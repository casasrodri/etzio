<template>
    <h1>Formulario ciclo</h1>
    <hr>

    <br />
    CODIGO:
    <div class="card flex justify-content-center">
        <InputText type="text" v-model="camposForm.codigo" placeholder="Código" />
    </div>

    NOMBRE:
    <div class="card flex justify-content-center">
        <InputText type="text" v-model="camposForm.nombre" placeholder="Nombre" />
    </div>

    PADRE:
    <div class="card flex justify-content-center">
        <TreeSelect v-model="camposForm.padre" :options="nodes" placeholder="Seleccionar..." class="md:w-20rem" />
    </div>

    <template v-if="id === 'nuevo'">
        <Button label="Crear" @click="crearCiclo()" size="small" />
    </template>

    <template v-else>
        <Button label="Guardar" @click="guardarModifCiclo()" size="small" />
    </template>
</template>

<script setup>
import TreeSelect from 'primevue/treeselect';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { CiclosApi } from '../api'

const router = useRouter()
const route = useRoute();
const { id } = route.params;
const { padre } = route.query;
const ciclosApi = new CiclosApi();
const nodes = ref(null);

const camposForm = ref({
    codigo: null,
    nombre: null,
    padre: null
})

onMounted(async () => {
    const { data } = await ciclosApi.listNodes()
    nodes.value = data

    if (id != 'nuevo') {
        const { data } = await ciclosApi.get(id)
        camposForm.value = data
        filtrarSelectorPadre(data.padre);
    } else {
        if (padre) {
            filtrarSelectorPadre(padre);
        }
    }
});

const ciclo = computed(() => {
    const ciclo = {
        codigo: camposForm.value.codigo,
        nombre: camposForm.value.nombre,
    }

    if (camposForm.value.padre) {
        const padre_id = Object.keys(camposForm.value.padre)[0]
        const encontrado = buscarElementoPorKey(nodes.value, padre_id);

        if (encontrado) ciclo.padre = encontrado.data.id
    }

    return ciclo
})

function buscarElementoPorKey(arr, key) {
    for (const nodo of arr) {
        if (nodo.key === key) {
            return nodo;
        }
        if (nodo.children.length > 0) {
            const resultadoHijo = buscarElementoPorKey(nodo.children, key);
            if (resultadoHijo) {
                return resultadoHijo;
            }
        }
    }
    return null;
}

function buscarKeyPorId(arr, id) {
    for (const nodo of arr) {
        if (nodo.data.id === id) {
            return nodo.key;
        }
        if (nodo.children.length > 0) {
            const resultadoHijo = buscarKeyPorId(nodo.children, id);
            if (resultadoHijo) {
                return resultadoHijo;
            }
        }
    }
    return null;
}

function filtrarSelectorPadre(id) {
    const key = buscarKeyPorId(nodes.value, parseInt(id));
    const obj = {}
    obj[key] = true

    camposForm.value.padre = obj
}

const crearCiclo = async () => {
    await ciclosApi.create(ciclo.value)
    router.push({ name: 'ciclos' })
}

const guardarModifCiclo = async () => {
    await ciclosApi.update(id, ciclo.value)
    router.push({ name: 'ciclos' })
}

const log = console.log;
</script>
