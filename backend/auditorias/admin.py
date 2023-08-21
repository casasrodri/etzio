from django.contrib import admin
from django.db import models
from auditorias import models


# Register your models here.
admin.site.register(models.Ciclo)
admin.site.register(models.Auditoria)
