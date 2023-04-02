from django.db import models

# Create your models here.


class Task(models.Model):
    task_definition = models.CharField(max_length=150)
    is_done = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    due_time = models.DateTimeField()

    def __str__(self) -> str:
        return self.task_definition
