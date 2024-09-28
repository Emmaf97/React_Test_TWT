
from django.contrib import admin
from django.views.generic import TemplateView
from django.http import JsonResponse
from django.urls import path, include
from api.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

def root_view(request):
    return JsonResponse({'message': 'Welcome to the API'})

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', root_view),
    path('', TemplateView.as_view(template_name="index.html")),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api/auth/", include("rest_framework.urls")),
    path("api/", include("api.urls")),
]
