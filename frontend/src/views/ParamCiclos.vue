<template>
    <h1 class="text-xl font-bold mb-3">Ciclos</h1>
    <div id="container" class="">
        <div class="grid max-w-6xl">
            <div class="col-12">
                <div class="card">
                    <TreeTable class="text-sm my-treetable" :value="treeTableValue" paginator :rows="10"
                        :alwaysShowPaginator="false" :rowsPerPageOptions="[10, 25, 50]" :filters="filters"
                        filterMode="lenient" :sortField="'nombre'" :sortOrder="1">

                        <template #header>
                            <div class="flex justify-between">
                                <Button icon="pi pi-plus" label="Nuevo" @click="alertt('Nuevo ciclo')" size="small" />

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
                                    @click="alertt(slotProps.node.data.cod_ext)" size="small" />
                                <Button icon="pi pi-pencil" severity="warning" text rounded title="Editar"
                                    @click="alertt(slotProps.node.data.cod_ext)" size="small" />
                                <Button icon="pi pi-times" severity="danger" text rounded title="Eliminar"
                                    @click="alertt(JSON.stringify(slotProps.node.data))" size="small" />
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
import getNodeResponse from '../assets/js/NodeService';

const filters = ref({});
const treeTableValue = ref(null);

onMounted(() => {
    getNodeResponse('nodosCiclos').then((data) => (treeTableValue.value = data));
});

function alertt(num) {
    alert(num)
}
</script>

<style scoped>
:deep(.p-treetable-tbody>tr>td) {
    padding: 0px !important;
}
</style>
