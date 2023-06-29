#from django.shortcuts import render
from rest_framework import viewsets
from .serializer import PersonaSerializer
from .models import Persona
# Create your views here.
#funciones para crear, listar, eliminar, etc
class PersonaView(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all() #traigo todas las tareas
