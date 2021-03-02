from django.shortcuts import render
from rest_framework import generics
from .models import VehicleData
from .serializers import VehicleDataSerializer, CreateGraphSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import ensure_csrf_cookie


# Create your views here.

class VehicleDataView(generics.ListAPIView):
    queryset = VehicleData.objects.all()
    serializer_class = VehicleDataSerializer

class CreateGraphView(APIView):     # inheriting API view allows us to override get and post method
    serializer_class = CreateGraphSerializer
    
    #@ensure_csrf_cookie
    @api_view(['POST'])
    def post(self, request):
        if request.method == 'POST':
            data = VehicleData.objects.all()
            
            title = request.query_params.get('startTime', None)
            print(title)
            #if title is not None:

                #tutorials = tutorials.filter(title__icontains=title)
            
            #tutorials_serializer = TutorialSerializer(tutorials, many=True)
            #return JsonResponse(tutorials_serializer.data, safe=False)


    '''     
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session_key):
            self.request.session.create()

            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                dates = serializer.data.Datetime
                lv = serializer.data.Light
                bus = serializer.data.Bus
                sut = serializer.data.SingleUnitTruck
                at = serializer.data.ArticulatedTruck
                mv = serializer.data.MotorizedVehicle
                cycle = serializer.data.Bicycle
                
                graph = VehicleData(Datetime=dates,Light=lv,Bus=bus,SingleUnitTruck=sut, ArticulatedTruck=at, MotorizedVehicle=mv,Bicycle=cycle)
                graph.save()
                return Response(VehicleDataSerializer(graph).data, status=status.HTTP_)
    '''