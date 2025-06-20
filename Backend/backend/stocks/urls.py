from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StockViewSet, register_user, login_user, get_login_logs

router = DefaultRouter()
router.register(r'stocks', StockViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', register_user),
    path('login/', login_user),
    path('logs/', get_login_logs),  # ✅ Admin-only login logs endpoint
]
