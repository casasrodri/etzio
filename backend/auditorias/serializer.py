from rest_framework import serializers
from auditorias import models


class CicloSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ciclo
        fields = ['id', 'codigo', 'nombre', 'padre']  # '__all__'


class AuditoriasSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Auditoria
        fields = '__all__'
