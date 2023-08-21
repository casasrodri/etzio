from rest_framework import viewsets
from .serializer import CicloSerializer
from .models import Ciclo
from rest_framework.response import Response


# Create your views here.


class CicloView(viewsets.ModelViewSet):
    serializer_class = CicloSerializer
    queryset = Ciclo.objects.all()
    # permission_classes = [IsAccountAdminOrReadOnly]


def agregar_keys(iterador, padre=0, codigo='', padre_id: str = 'padre_id'):
    count = 1
    for nodo in iterador:
        if nodo['data']['padre_id'] == 0:
            key = str(count)
            nodo['data']['cod_ext'] = nodo['data']['codigo']
        else:
            key = f'{padre}.{count}'
            nodo['data']['cod_ext'] = f"{codigo}.{nodo['data']['codigo']}"

        nodo['key'] = key

        if len(nodo['children']):
            agregar_keys(nodo['children'], padre=key, codigo=nodo['data']['cod_ext'])

        count += 1


def generar_treenodes(lista: list, padre_id: str = 'padre_id') -> dict:
    nodos = []

    # Se le da el formato necesario del nodo
    for i in lista:
        nodo = {'key': None, 'data': i, 'children': [], 'label': i['nombre'], 'icon': None}

        if not nodo['data'][padre_id]:
            nodo['data'][padre_id] = 0

        nodos.append(nodo)

    # Se ordenan de mayor a menor:
    nodos = sorted(nodos, key=lambda d: -d['data'][padre_id])

    # Se incrustan los hijos dentro de los padres:
    for nodo in nodos.copy():
        if int(nodo['data'][padre_id]) != 0:
            padre = next(item for item in nodos if item['data']['id'] == nodo['data'][padre_id])
            padre['children'].append(nodo)
            nodos.remove(nodo)

    # Se agregan las keys:
    agregar_keys(nodos)

    # Se devuelve la lista de salida
    return nodos


def extraer_campos(obj, campos) -> dict:
    return {c: obj.__dict__[c] for c in campos}


class CicloNodosView(viewsets.ViewSet):
    def list(self, request):
        ciclos = Ciclo.objects.all()
        campos = ['id', 'nombre', 'codigo', 'padre_id']
        ciclos = [extraer_campos(ciclo, campos) for ciclo in ciclos]
        nodos = generar_treenodes(ciclos)

        return Response(nodos)
