from rest_framework import serializers
from .models import VehicleData

class VehicleDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleData
        fields = ('Datetime', 'Light', 'Bus', 'SingleUnitTruck', 'ArticulatedTruck', 'MotorizedVehicle', 'Bicycle')

class CreateGraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleData
        fields = ('Datetime', 'Light', 'Bus', 'SingleUnitTruck', 'ArticulatedTruck', 'MotorizedVehicle', 'Bicycle')