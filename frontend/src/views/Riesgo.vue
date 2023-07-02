<template>
    <h1 class="text-xl font-bold mb-1">
        {{ riesgoInfo.nombre }}
    </h1>

    <h2 class="text-md font-medium text-gray-500 ml-5 mb-2">
        {{ riesgoInfo.ciclo }}
    </h2>

    <hr class="mb-3" />

    <div id="linea1" class="flex flex-col justify-between max-w-6xl">

        <!-- Descripción -->
        <div id="descripcion" class="card mb-4 mr-10">
            <h3 class="font-ligth underline text-gray-600 mb-1">
                Descripción:
            </h3>
            <Inplace :closable="true" closeIcon="pi pi-save">
                <template #display>
                    {{ riesgoInfo.descripcion || 'Descripción' }}
                </template>
                <template #content>
                    <InputText v-model="riesgoInfo.descripcion" autofocus />
                </template>
            </Inplace>
        </div>

        <!-- Nivel de riesgo -->
        <div id="nivel-riesgo" class="flex flex-row mb-4 mr-10">
            <h3 class="font-ligth underline text-gray-600 mb-1 self-center mr-3">
                Nivel:
            </h3>

            <Dropdown v-model="riesgoInfo.nivel" :options="nivelesRiesgo" />
        </div>

        <!-- Objetivos de control -->
        <div id="objetivos-control" class="flex flex-col mb-4 mr-10">
            <h3 class="font-ligth underline text-gray-600 self-left mb-3">
                Objetivos de control:
            </h3>

            <div class="card flex justify-content-center">
                <div class="flex flex-col gap-3">
                    <div v-for="oc of objetivosControl" :key="oc.id" class="flex align-items-center">
                        <Checkbox v-model="objetivosSeleccionados" :inputId="oc.key" name="nombre" :value="oc.nombre" />
                        <label :for="oc.id" class="ml-2">{{ oc.nombre }}</label>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div id="linea2">

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

        <div id="controles" class="my-3 max-w-6xl">
            <div class="card">
                <Panel toggleable :collapsed="panelCollapsed.controles">

                    <TablaRelacion tipo="controles" />

                    <template #header>
                        <div class="flex flex-row gap-2" @click="panelCollapsed.controles = !panelCollapsed.controles">
                            <div>
                                <i class="pi pi-eye"></i>
                            </div>
                            <div class="font-semibold">
                                Controles
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




import { ref, reactive } from 'vue';

import Inplace from 'primevue/inplace';
import Dropdown from 'primevue/dropdown';
import Panel from 'primevue/panel';
import Badge from 'primevue/badge';
import ToggleButton from 'primevue/togglebutton';
import Checkbox from 'primevue/checkbox';
import TablaRelacion from '../components/TablaRelacion.vue';

const riesgoInfo = ref({
    nombre: 'El cliente no se encuentra registrado en el sistema',
    ciclo: 'Depósitos – Cuenta corriente - Comercial',
    descripcion: 'Los legajos que documentación la relación con el cliente pueden no poseer la documentación autorizada para operar con la entidad.',
    nivel: 'Alto',
    tipificacion: {
        oportunidad: 'Preventivo',
        periodicidad: 'Permanente',
        automatizacion: 'Automatizado',
    },
    realizado_por: 'Supervisor Operativo de Sucursal'
})

const panelCollapsed = reactive({
    pruebas: false,
    controles: false,
    relaciones: true
})

const objetivosSeleccionados = ref([
    'Autorización',
    'Exactitud y oportunidad del ingreso',
    'Acceso restringido',
]);
const objetivosControl = ref([
    { id: 1, nombre: 'Autorización' },
    { id: 2, nombre: 'Exactitud y oportunidad del ingreso' },
    { id: 3, nombre: 'Integridad del ingreso' },
    { id: 4, nombre: 'Integridad y exactitud de las actualizaciones' },
    { id: 5, nombre: 'Integridad y exactitud de los datos acumulados' },
    { id: 6, nombre: 'Acceso restringido' },
]);

const nivelesRiesgo = ['Alto', 'Medio', 'Bajo']
const relacSeleccionada = ref('normativas')

function toggleRelaciones(tipo) {
    panelCollapsed.relaciones = false
    relacSeleccionada.value = tipo
}

</script>

<style scoped>
</style>
