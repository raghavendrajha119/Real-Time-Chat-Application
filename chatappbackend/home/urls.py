from django.urls import path
from . import views
urlpatterns = [
    path('home/',views.HomeView.as_view(),name='home'), #as_view() meaning returns a callable (function-like object) that can be used as a view
    path('logout/', views.LogoutView.as_view(), name ='logout')
]