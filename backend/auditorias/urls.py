from django.urls import include, path
from rest_framework import routers
from auditorias import views

router = routers.DefaultRouter()
router.register('ciclos', views.CicloView, 'ciclos')
router.register('ciclosNodos', views.CicloNodosView, 'ciclosNod')

urlpatterns = [
    path('api/v1/', include(router.urls)),
]