from auditorias.models import Ciclo

ciclos = [
    {'codigo': 'CONT', 'nombre': 'Contabilidad', 'padre': None},
    {'codigo': 'MCC', 'nombre': 'Mesa de Control Contable', 'padre': 1},
    {'codigo': 'CCBCRA', 'nombre': 'Conciliación de cuentas BCRA', 'padre': 1},
    {'codigo': 'DEP', 'nombre': 'Depósitos', 'padre': None},
    {'codigo': 'CC', 'nombre': 'Cuenta corriente', 'padre': 4},
    {'codigo': 'CA', 'nombre': 'Caja de ahorro', 'padre': 4},
    {'codigo': 'COM', 'nombre': 'Comercial', 'padre': 5},
    {'codigo': 'IND', 'nombre': 'Individuos', 'padre': 5},
    {'codigo': 'CGU', 'nombre': 'Cuenta gratuita universal', 'padre': 6},
    {'codigo': 'PLD', 'nombre': 'Prevención de Lavado de Dinero', 'padre': None},
]


def run(*args):
    for ciclo in ciclos:
        if ciclo['padre']:
            ciclo['padre'] = Ciclo(ciclo['padre'])
            print(ciclo['padre'])

        c = Ciclo(**ciclo)
        c.save()
