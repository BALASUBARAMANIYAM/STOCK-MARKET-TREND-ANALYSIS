from django.db import models
from django.contrib.auth.models import User

class Stock(models.Model):
    name = models.CharField(max_length=100)
    prediction_period = models.CharField(
        max_length=20,
        choices=[('1month', '1 Month'), ('3month', '3 Months'), ('6month', '6 Months')]
    )
    chart_image = models.ImageField(upload_to='charts/')
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('name', 'prediction_period')

    def __str__(self):
        return self.name

class UserRegistration(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    registered_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

class AdminLoginLog(models.Model):
    admin_user = models.ForeignKey(User, on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.admin_user.username} at {self.login_time}"

class UserLoginLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} at {self.login_time}"
