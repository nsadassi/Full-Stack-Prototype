from django.urls import path
from .views import VehicleDataView

urlpatterns = [
    path('', VehicleDataView.as_view()),
]