<template>
    <h1 class="text-xl font-bold mb-1">
        {{ pruebaInfo.nombre }}
    </h1>

    <h2 class="text-md font-medium text-gray-500 ml-5 mb-2">
        {{ pruebaInfo.ciclo }}
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
                    {{ pruebaInfo.descripcion || 'Descripción' }}
                </template>
                <template #content>
                    <InputText v-model="pruebaInfo.descripcion" autofocus />
                </template>
            </Inplace>
        </div>

        <!-- Informe de auditoría -->
        <div id="informe" class="flex flex-row mb-4 mr-10">
            <h3 class="font-ligth underline text-gray-600 mb-1 self-center mr-3">
                Informe relacionado:
            </h3>

            <InputText type="text" v-model="pruebaInfo.informe" />
        </div>

        <!-- Sector auditor -->
        <div id="sector-auditor" class="flex flex-row mb-4 mr-10">
            <h3 class="font-ligth underline text-gray-600 mb-1 self-center mr-3">
                Sector de auditoría:
            </h3>
            <Dropdown v-model="pruebaInfo.sector" :options="sectoresAuditoria" />
        </div>

    </div>

    <div id="linea2">

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
import Checkbox from 'primevue/checkbox';
import TablaRelacion from '../components/TablaRelacion.vue';
import InputText from 'primevue/inputtext';

const pruebaInfo = ref({
    nombre: 'Revisión de legajos de muestra de operaciones de alta',
    ciclo: 'Depósitos - Cuenta corriente - Comercial',
    descripcion: 'Solicitar una muestra de 10 legajos de altas de cuentas corrientes en la red de sucursales, y validar su integridad y autorización.',
    informe: 'AO-DEP-CC-COM',
    sector: 'Auditoría Centralizada'
})

const panelCollapsed = reactive({
    riesgos: false,
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

const sectoresAuditoria = [
    'Auditoría Centralizada',
    'Auditoría Sistemas',
    'Auditoría Sucursales',
    'Auditoría Continua',
]
const relacSeleccionada = ref('normativas')

function toggleRelaciones(tipo) {
    panelCollapsed.relaciones = false
    relacSeleccionada.value = tipo
}

</script>

<style scoped>
</style>
