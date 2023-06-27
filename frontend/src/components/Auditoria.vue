<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import getResponse from '../JsonReader'
import getNodeResponse from '../NodeService'
import ButtonRevision from './ButtonRevision.vue';

const route = useRoute();
const { codigo, nombre } = route.params
const audit = ref({ nombre: 'Auditoría' });
const revisiones = ref(null);
const filters = ref({ global: null });
const options = ref(['iniciar', 'ingresar', 'finalizado'])

onMounted(() => {
    getResponse(`auditoria_${codigo}`).then((data) => (audit.value = data));
    getNodeResponse(`revisiones_${codigo}`).then((data) => (revisiones.value = data));
});


// TODO: Corregir
function abrirLineas() {

    let pendientes = document.querySelectorAll('[aria-expanded="false"][role]')

    // Comprobación
    while (pendientes.length) {
        console.log('Llamada recursiva', pendientes);

        for (let expansor of pendientes) {
            if (expansor.getAttribute('aria-expanded') === 'false') {
                expansor.querySelector('button').click()
                expansor.setAttribute('aria-expanded', 'true')
            }
        }
        console.log('Pendientes', pendientes);
        pendientes = document.querySelectorAll('[aria-expanded="false"][role]')
        console.log('Fin', pendientes);
        console.log('Fin', document.querySelectorAll('[aria-expanded="false"][role]'));
        console.log(pendientes.length);
    }

}

</script>

<template>
    <h1 class="text-xl font-bold mb-3">{{ audit.nombre }}</h1>
    <div v-if="audit.estado" id="atributos-auditoria">
        <div>
            <span class="font-medium underline underline-offset-1">Estado:</span>
            &nbsp;
            <span>{{ audit.estado }}</span>
        </div>
        <div>
            <span class="font-medium underline underline-offset-1">Tipo:</span>
            &nbsp;
            <span>{{ audit.tipo }}</span>
        </div>
        <div>
            <span class="font-medium underline underline-offset-1 pr-2">Periodo:</span>

            <span>{{ audit.periodo }}</span>
        </div>
    </div>
    <h2 class="text-lg font-semibold mt-3 mb-2 underline">Revisiones</h2>
    <div id="container-tabla" class="">
        <div class="grid max-w-6xl">
            <div class="col-12">
                <div class="card">
                    <TreeTable class="text-sm my-treetable" :value="revisiones" paginator :rows="10"
                        :alwaysShowPaginator="false" :rowsPerPageOptions="[10, 25, 50]" :filters="filters"
                        filterMode="lenient" :sortField="'nombre'" :sortOrder="1">

                        <template #header>
                            <div class="flex justify-between">
                                <div class="card flex justify-content-center">
                                    <SelectButton v-model="filters.global" :options="options" />
                                </div>

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
                        <Column field="accion" header="Acción">
                            <template #body="row">
                                <ButtonRevision :estado="row.node.data.accion" :url="{
                                    auditoria: codigo,
                                    revision: row.node.data.cod_ext.replaceAll('.', '-'),
                                    nombre: row.node.data.nombre
                                }" />
                            </template>
                        </Column>


                    </TreeTable>
                    <button type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2"
                        @click="abrirLineas">
                        Expandir
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:deep(.p-treetable-tbody>tr>td) {
    padding: 3px !important;
}
</style>
