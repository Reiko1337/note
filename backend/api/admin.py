from django.contrib import admin
from . import models


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Noted)
class NoteAdmin(admin.ModelAdmin):

    def delete_queryset(self, request, queryset):
        for noted in queryset:
            noted.tasks.all().delete()
        super().delete_queryset(request, queryset)



@admin.register(models.Task)
class TaskAdmin(admin.ModelAdmin):
    pass
