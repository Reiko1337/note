from rest_framework import serializers
from django.contrib.auth import get_user_model
from . import models

User = get_user_model()


class NotedSerializer(serializers.ModelSerializer):
    creator = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Noted
        fields = '__all__'
        extra_kwargs = {'tasks': {'required': False}}


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Task
        fields = '__all__'
