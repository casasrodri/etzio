<template>
    <h1 class="text-xl font-bold mb-3">Auditorías</h1>
    <div id="container" class="">
        <div class="grid max-w-6xl">
            <div class="col-12">
                <div class="card">
                    <DataTable :value="listaCiclos" tableStyle="min-width: 50rem" @rowClick="onRowClick">
                        <Column field="codigo" header="Código"></Column>
                        <Column field="nombre" header="Nombre"></Column>
                        <Column field="estado" header="Tipo">
                            <template #body="row">
                                <TagTipo :tipo="row.data.tipo" :texto="row.data.tipo" />
                            </template>
                        </Column>

                        <Column field="estado" header="Estado">
                            <template #body="row">
                                <TagEstado :estado="row.data.estado" :texto="row.data.estado" />
                            </template>
                        </Column>

                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import getResponse from '../assets/js/JsonReader'
import router from '../router'
import { toURLName } from '../assets/js/helpers'
import TagTipo from './TagTipo.vue';
import TagEstado from './TagEstado.vue';

const listaCiclos = ref()

onMounted(() => {
    getResponse('listaCiclos').then((data) => (listaCiclos.value = data));
});

function alertt(num) {
    alert(num)
};

function colorTipo(tipo) {

    switch (tipo) {
        case 'especial':
            return 'warning';
        default:
            return ''
    }
}

function colorEstado(estado) {

    switch (estado) {
        case 'finalizado':
            return 'success';
        case 'en curso':
            return 'warning';
        case 'pendiente':
            return 'danger';
        default:
            return ''
    }
}

const onRowClick = ({ data: { codigo, nombre } }) => {
    router.push({ path: `/app/auditorias/${codigo}/${toURLName(nombre)}` })
};
</script>

<style scoped>
:deep(.p-datatable-tbody>tr>td) {
    padding: 5px !important;
}
</style>
