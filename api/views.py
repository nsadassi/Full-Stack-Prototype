from django.shortcuts import render
from rest_framework import generics
from .models import VehicleData
from .serializers import VehicleDataSerializer

# Create your views here.
class VehicleDataView(generics.ListAPIView):
    queryset = VehicleData.objects.all()
    serializer_class = VehicleDataSerializer