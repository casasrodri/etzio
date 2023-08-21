from auditorias.models import Auditoria
import datetime

auditorias = [
    {
        'codigo': '2023',
        'nombre': 'Plan Anual 2023',
        'tipo': 'anual',
        'estado': 'en curso',
        'fecha_inicio': datetime.date(2023, 1, 1),
        'fecha_fin': datetime.date(2023, 12, 31),
    },
    {
        'codigo': '2022',
        'nombre': 'Plan Anual 2022',
        'tipo': 'anual',
        'estado': 'finalizado',
        'fecha_inicio': datetime.date(2022, 1, 1),
        'fecha_fin': datetime.date(2022, 12, 31),
    },
    {
        'codigo': 'LIP-202302',
        'nombre': 'Revisión Especial LIP - 2° trimestre',
        'tipo': 'especial',
        'estado': 'en curso',
        'fecha_inicio': datetime.date(2023, 4, 1),
        'fecha_fin': datetime.date(2023, 6, 30),
    },
]


def run(*args):
    for aud in auditorias:
        a = Auditoria(**aud)
        a.save()
        print('Auditoria creado:', aud['nombre'])
