from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Stock, UserRegistration, AdminLoginLog, UserLoginLog

# ✅ Stock Serializer
class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = '__all__'

# ✅ User Registration Serializer (with email sync fix)
class UserRegistrationSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    password = serializers.CharField(write_only=True, source='user.password')

    class Meta:
        model = UserRegistration
        fields = ['full_name', 'email', 'username', 'password']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        email = validated_data.get('email')  # ✅ Get email from registration form

        # ✅ Create User with email saved to auth_user table
        user = User.objects.create_user(
            username=user_data['username'],
            password=user_data['password'],
            email=email  # ✅ Save email to Django's User model
        )

        # ✅ Save to UserRegistration table
        return UserRegistration.objects.create(user=user, **validated_data)
