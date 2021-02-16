from django.db import models

# Create your models here.

class VehicleData(models.Model):
    Datetime = models.CharField(max_length=20, unique=True)
    Bus = models.IntegerField(null=False, default=0)
    Light = models.IntegerField(null=False, default=0)
    SingleUnitTruck = models.IntegerField(null=False, default=0)
    ArticulatedTruck = models.IntegerField(null=False, default=0)
    MotorizedVehicle = models.IntegerField(null=False, default=0)
    Bicycle = models.IntegerField(null=False, default=0)