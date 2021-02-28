from django.urls import path
from .views import VehicleDataView, CreateGraphView

urlpatterns = [
    path('', VehicleDataView.as_view()),
    path('graph/', CreateGraphView),
]