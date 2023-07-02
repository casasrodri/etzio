<template>
    <h1 class="text-xl font-bold mb-1">
        {{ controlInfo.nombre }}
    </h1>

    <h2 class="text-md font-medium text-gray-500 ml-5 mb-2">
        {{ controlInfo.mp }} | {{ controlInfo.pr }}
    </h2>

    <hr class="mb-3" />

    <div id="linea1" class="flex flex-row justify-between max-w-6xl">
        <div id="col1">

            <!-- Descripción -->
            <div id="descripcion" class="card mb-4 mr-10">
                <h3 class="font-ligth underline text-gray-600 mb-1">
                    Descripción:
                </h3>
                <Inplace :closable="true" closeIcon="pi pi-save">
                    <template #display>
                        {{ controlInfo.descripcion || 'Descripción' }}
                    </template>
                    <template #content>
                        <InputText v-model="controlInfo.descripcion" autofocus />
                    </template>
                </Inplace>
            </div>

            <div id="realizado-por" class="card mb-4 mr-10">
                <h3 class="font-ligth underline text-gray-600 mb-1">
                    Realizado por:
                </h3>
                <Inplace :closable="true" closeIcon="pi pi-save">
                    <template #display>
                        {{ controlInfo.realizado_por || 'Descripción' }}
                    </template>
                    <template #content>
                        <InputText v-model="controlInfo.realizado_por" autofocus />
                    </template>
                </Inplace>
            </div>
        </div>

        <!-- Tipificación del control -->
        <div id="tipificacion-control" class="mb-2">
            <h3 class="font-ligth underline text-gray-600 mb-2">
                Tipificación del control:
            </h3>

            <div id="container-tipi" class="grid grid-rows-3 grid-flow-col gap-2 w-12">
                <template v-for="tipo in ['Oportunidad', 'Periodicidad', 'Automatización']">
                    <div class="self-center font-ligth text-gray-600">
                        {{ tipo }}:
                    </div>
                </template>
                <Dropdown v-model="controlInfo.tipificacion.oportunidad" :options="tipificaciones.oportunidad" />
                <Dropdown v-model="controlInfo.tipificacion.periodicidad" :options="tipificaciones.periodicidad" />
                <Dropdown v-model="controlInfo.tipificacion.automatizacion" :options="tipificaciones.automatizacion" />
            </div>
        </div>
    </div>

    <div id="linea2">

        <div id="observaciones" class="my-3 max-w-6xl">
            <div class="card">
                <Panel toggleable :collapsed="panelCollapsed.observaciones" @cantidad-obs="cantObs = $event">

                    <TablaRelacion tipo="observaciones" />

                    <template #header>
                        <div class="flex flex-row font-semibold gap-2"
                            @click="panelCollapsed.observaciones = !panelCollapsed.observaciones">
                            <div>
                                <i class="pi pi-eye"> </i>
                            </div>
                            <div class="font-semibold text-red-800">
                                Observaciones
                            </div>
                            <Badge value="3" severity="danger"></Badge>
                            {{ cantObs }}
                        </div>
                    </template>
                </Panel>
            </div>
        </div>

        <div id="pruebas" class="my-3 max-w-6xl">
            <div class="card">
                <Panel toggleable :collapsed="panelCollapsed.pruebas">

                    <TablaRelacion tipo="pruebas" />

                    <template #header>
                        <div class="flex flex-row gap-2" @click="panelCollapsed.pruebas = !panelCollapsed.pruebas">
                            <div>
                                <i class="pi pi-search"></i>
                            </div>
                            <div class="font-semibold">
                                Pruebas
                            </div>
                        </div>
                    </template>
                </Panel>
            </div>
        </div>

        <div id="riesgos" class="my-3 max-w-6xl">
            <div class="card">
                <Panel toggleable :collapsed="panelCollapsed.riesgos">

                    <TablaRelacion tipo="riesgos" />

                    <template #header>
                        <div class="flex flex-row gap-2" @click="panelCollapsed.riesgos = !panelCollapsed.riesgos">
                            <div>
                                <i class="pi pi-exclamation-circle"></i>
                            </div>
                            <div class="font-semibold">
                                Riesgos
                            </div>
                        </div>
                    </template>
                </Panel>
            </div>
        </div>

        <div id="otras-relaciones" class="my-3 max-w-6xl">
            <div class="card">
                <Panel toggleable :collapsed="panelCollapsed.relaciones">

                    <TablaRelacion :tipo="relacSeleccionada" />

                    <template #header>
                        <div class="flex flex-row gap-2" @click="panelCollapsed.relaciones = !panelCollapsed.relaciones">
                            <div>
                                <i class=" pi pi-link"></i>
                            </div>
                            <div class="font-semibold">
                                Otra relaciones
                            </div>
                        </div>
                    </template>

                    <template #icons>
                        <button class="p-panel-header-icon p-link mr-2" @click="toggleRelaciones('normativas')">
                            <span class="pi pi-file"></span>
                        </button>

                        <button class="p-panel-header-icon p-link mr-2" @click="toggleRelaciones('aplicativos')">
                            <span class="pi pi-desktop"></span>
                        </button>
                    </template>
                </Panel>
            </div>
        </div>

    </div>





    <!-- <hr class="mt-20" />
    {{ $route.params }} -->
</template>

<script setup>
function alertt(e) {
    alert(e)
}
import { ref, reactive } from 'vue';

import Inplace from 'primevue/inplace';
import Dropdown from 'primevue/dropdown';
import Panel from 'primevue/panel';
import Badge from 'primevue/badge';

import TablaRelacion from '../components/TablaRelacion.vue';


const controlInfo = ref({
    nombre: 'Validación de identidad y carga de información',
    mp: 'Alta de cuentas corrientes',
    pr: 'Alta por red de sucursales ',
    descripcion: 'El supervisor operativo valida la identidad del cliente y controla los datos cargados en el sistema SAP.',
    tipificacion: {
        oportunidad: 'Preventivo',
        periodicidad: 'Permanente',
        automatizacion: 'Automatizado',
    },
    realizado_por: 'Supervisor Operativo de Sucursal'
})

const panelCollapsed = reactive({
    observaciones: false,
    pruebas: false,
    riesgos: false,
    relaciones: false
})

// TODO: Hacer que si no hay observaciones figure collapsed.
// setTimeout(() => {
//     const observaciones = 0
//     panelCollapsed.observaciones =

//     console.log(panelCollapsed.observaciones);
// }, 2000)

const tipificaciones = {
    oportunidad: [
        'Preventivo',
        'Correctivo',
        'Detectivo',
    ],

    periodicidad: [
        'Permanente',
        'Periódico',
        'Ocasional',
    ],

    automatizacion: [
        'Automatizado',
        'Semi-automatizado',
        'Manual',
    ],
}

const relacSeleccionada = ref('normativas')

function toggleRelaciones(tipo) {
    panelCollapsed.relaciones = false
    relacSeleccionada.value = tipo
}

const cantObs = ref('')


</script>

<style scoped>
</style>
