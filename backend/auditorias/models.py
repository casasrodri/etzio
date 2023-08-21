from django.db import models
from django.utils import timezone


class TimeStampedModel(models.Model):
    creado = models.DateTimeField(default=timezone.now, editable=False)
    modificado = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


# Create your models here.
class Ciclo(TimeStampedModel):
    codigo = models.CharField(max_length=20)
    nombre = models.CharField(max_length=200)
    padre = models.ForeignKey('self', on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self) -> str:
        return self.nombre


class Auditoria(TimeStampedModel):
    codigo = models.CharField(max_length=20)
    nombre = models.CharField(max_length=200)
    tipo = models.CharField(max_length=20)
    estado = models.CharField(max_length=20)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()

    def __str__(self) -> str:
        return self.nombre
