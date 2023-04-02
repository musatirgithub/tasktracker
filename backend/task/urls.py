from django.urls import path, include
from rest_framework import routers
from .views import (
    TaskMVS
)

router = routers.DefaultRouter()
router.register("api", TaskMVS)


urlpatterns = []

urlpatterns += router.urls
