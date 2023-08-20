from django.db import models


# Create your models here.
class Ciclo(models.Model):
    nombre = models.CharField(max_length=200)
    codigo = models.CharField(max_length=20, primary_key=True)
    creado = models.DateTimeField(auto_created=True)
    modificado = models.DateTimeField(auto_created=True)
