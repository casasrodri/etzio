<template>
    <h1 class="text-xl font-bold mb-3">Ciclos</h1>
    <div id="container" class="">
        <div class="grid max-w-6xl">
            <div class="col-12">
                <div class="card">
                    <TreeTable class="text-sm my-treetable" :value="listaNodosCiclos" paginator :rows="10"
                        :alwaysShowPaginator="false" :rowsPerPageOptions="[10, 25, 50]" :filters="filters"
                        filterMode="lenient" :sortField="'nombre'" :sortOrder="1">

                        <template #header>
                            <div class="flex justify-between">
                                <Button icon="pi pi-plus" label="Nuevo" @click="crearCiclo()" size="small" />

                                <div class="text-right">
                                    <div class="p-input-icon-left">
                                        <i class="pi pi-search"></i>

                                        <InputText v-model="filters['global']" class="p-inputtext-sm"
                                            placeholder="Buscar" />
                                    </div>
                                </div>
                            </div>
                        </template>

                        <Column field="codigo" header="Código" sortable expander></Column>
                        <Column field="nombre" header="Nombre" sortable></Column>
                        <Column header="Acciones">
                            <template #body="slotProps">

                                <Button icon="pi pi-plus" severity="success" text rounded title="Nuevo subnivel"
                                    @click="crearHijo(slotProps.node.data.id)" size="small" />

                                <Button icon="pi pi-pencil" severity="warning" text rounded title="Editar"
                                    @click="editarCiclo(slotProps.node.data.id)" size="small" />

                                <Button icon="pi pi-times" severity="danger" text rounded title="Eliminar"
                                    @click="eliminarCiclo(slotProps.node.data.id)" size="small"
                                    v-if="posibleEliminar(slotProps.node.data.id)" />

                            </template>
                        </Column>

                    </TreeTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { CiclosApi } from '../api';
import { useRouter } from 'vue-router';

const router = useRouter()
const ciclosApi = new CiclosApi();
const filters = ref({});
const listaNodosCiclos = ref(null);

const cargarNodos = async () => {
    const res = await ciclosApi.listNodes();
    listaNodosCiclos.value = res.data;
}

onMounted(async () => {
    cargarNodos();
});

function posibleEliminar(id) {
    // Se puede eliminar cuando no tiene hijos.
    const elemento = listaNodosCiclos.value.find(e => e.data.id === id)
    if (!elemento) {
        return true;
    }
    return !Boolean(elemento.children.length);
}

const eliminarCiclo = async (id) => {
    const confirmacion = window.confirm('Seguro que desea eliminar?')
    if (confirmacion) {
        await ciclosApi.delete(id);
        cargarNodos();
    }
}

const editarCiclo = id => {
    router.push({ name: 'formciclos', params: { id: id } })
}

const crearHijo = padre_id => {
    router.push({ name: 'formciclos', params: { id: 'nuevo' }, query: { padre: padre_id } })
}

const crearCiclo = () => {
    router.push({ name: 'formciclos', params: { id: 'nuevo' } })
}

</script>

<style scoped>
:deep(.p-treetable-tbody>tr>td) {
    padding: 0px !important;
}
</style>
