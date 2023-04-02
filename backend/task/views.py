from rest_framework.viewsets import ModelViewSet
from .models import Task
from .serializers import TaskSerializer

# Create your views here.


class TaskMVS(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
