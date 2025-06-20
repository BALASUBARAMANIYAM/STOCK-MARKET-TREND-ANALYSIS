from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.db.models import Q

from .models import Stock, UserRegistration, AdminLoginLog, UserLoginLog
from .serializers import StockSerializer, UserRegistrationSerializer


class StockViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all().order_by('-added_at')
    serializer_class = StockSerializer
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser]

    def perform_create(self, serializer):
        name = self.request.data.get("name")
        period = self.request.data.get("prediction_period")

        if Stock.objects.filter(name=name, prediction_period=period).exists():
            raise Exception("This stock with the same prediction period already exists.")

        serializer.save()


# ✅ User Registration
@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registration successful"}, status=201)
    return Response(serializer.errors, status=400)


# ✅ Email-based Login (for both user and admin)
@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user_obj = User.objects.get(email=email)
        user = authenticate(username=user_obj.username, password=password)

        if user:
            token, _ = Token.objects.get_or_create(user=user)

            if user.is_staff:
                AdminLoginLog.objects.create(admin_user=user)
            else:
                UserLoginLog.objects.create(user=user)

            return Response({'token': token.key, 'is_admin': user.is_staff})
        else:
            return Response({'error': 'Invalid credentials'}, status=401)

    except User.DoesNotExist:
        return Response({'error': 'User with this email does not exist'}, status=404)


# ✅ Admin-only login logs view
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_login_logs(request):
    user = request.user

    if not user.is_staff:
        return Response({'error': 'Access denied'}, status=403)

    admin_logs = AdminLoginLog.objects.all().order_by('-login_time').values('admin_user__username', 'login_time')
    user_logs = UserLoginLog.objects.all().order_by('-login_time').values('user__username', 'login_time')

    return Response({
        'admin_logins': list(admin_logs),
        'user_logins': list(user_logs)
    })
