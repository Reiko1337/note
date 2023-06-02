from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from . import serializers, models
from rest_framework import permissions


class NotedViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.NotedSerializer
    queryset = models.Noted.objects.all()


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.TaskSerializer
    queryset = models.Task.objects.all()