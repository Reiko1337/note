from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model


class User(AbstractUser):
    """
    Расширенная модель пользователь
    """
    first_name = models.CharField(verbose_name="Имя", max_length=150, blank=False)
    last_name = models.CharField(verbose_name="Фамилия", max_length=150, blank=False)
    email = models.EmailField(verbose_name="Адрес электронной почты", blank=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'password']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class Noted(models.Model):
    """
    Заметка с отдельными задачами
    """
    title = models.CharField(verbose_name='Заголовок', max_length=50)
    tasks = models.ManyToManyField('Task')
    creator = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)
    creation_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Заметка'
        verbose_name_plural = 'Заметки'
        ordering = ['-creation_date']

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        self.tasks.all().delete()
        super().delete(args, kwargs)


class Task(models.Model):
    """
    Список задач (TO-DO)
    """
    text = models.TextField(verbose_name='Текст задачи')
    is_done = models.BooleanField(default=False, verbose_name='Выполнено')
    creation_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'
        ordering = ['-creation_date']

    def __str__(self) -> str:
        return self.text[:50] + '...' if len(self.text) > 50 else self.text
