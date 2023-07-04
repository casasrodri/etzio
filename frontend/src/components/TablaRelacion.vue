<template>
    <h1 class="text-lg font-semibold mb-3 capitalize"
        v-if="['normativas', 'organigrama', 'aplicativos'].includes(props.tipo)">{{ tipo }}</h1>

    <div id="container" class="">
        <div class="grid max-w-6xl">
            <div class="col-12">
                <div class="card">
                    <DataTable :value="asociaciones[props.tipo]" @rowClick="onRowClick">

                        <Column header="ID" style="width: 40px; text-align: center;">
                            <template #body="row">
                                {{ row.data.link.split('/').at(-1) }}
                            </template>
                        </Column>
                        <Column field="descripcion" header="Descripción" style="padding-left: 2px;"></Column>

                        <Column header="Acciones" style="width: 70px;" headerStyle="text-align: center;">
                            <template #body="row">
                                <div class="flex flex-row justify-center">
                                    <Button icon="pi pi-times" severity="danger" text rounded title="Eliminar"
                                        @click="alertt(row.data)" size="small" class="basis-1/2" />
                                </div>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-2">
        <Button label="Nuevo" icon="pi pi-plus" size="small" severity="success" id="btnNuevoRel" v-if="props.btnNuevo"
            @click="nuevo" />
    </div>
</template>

<script setup>
// import router from '../router';
import { useRouter } from 'vue-router';
const router = useRouter()

function nuevo() {
    alert(`Se está creando un nuevo elemento del tipo: ${props.tipo}`)
}
const props = defineProps(['tipo', 'btnNuevo'])

const asociaciones = {
    controles: [
        {
            link: '/app/auditorias/2023/revisiones/DEP-CC-COM/control/87',
            descripcion: 'Validación de identidad y carga de información',
        },
        {
            link: '/app/auditorias/2023/revisiones/DEP-CC-COM/control/81',
            descripcion: 'Conciliación bancaria mensual',
        },
    ],
    observaciones: [
        {
            link: '/app/observaciones/2',
            descripcion: 'Normativa desactualizada.',
        },
        {
            link: '/app/observaciones/16',
            descripcion: 'Errores de autorización al ingreso al sistema.',
        },
        {
            link: '/app/observaciones/20',
            descripcion: 'Falta de segregación de funciones en control de identidad.',
        },
    ],
    pruebas: [
        {
            link: '/app/auditorias/2023/revisiones/DEP-CC-COM/prueba/1',
            descripcion: 'Revisión de legajos de muestra de operaciones de alta.',
        },
        {
            link: '/app/auditorias/2023/revisiones/DEP-CC-COM/prueba/13',
            descripcion: 'Análisis de cuentas de resultados globales.',
        },
    ],
    riesgos: [
        {
            link: '/app/auditorias/2023/revisiones/DEP-CC-COM/riesgo/1',
            descripcion: 'El cliente no se encuentra registrado en el sistema.',
        }, {
            link: '/app/auditorias/2023/revisiones/DEP-CC-COM/riesgo/2',
            descripcion: 'Fraude por falta de identificación del personal interviniente.',
        },
    ],
    normativas: [
        {
            link: '/app/normativas/102',
            descripcion: 'Com. "A" 7200',
        }, {
            link: '/app/normativas/212',
            descripcion: 'Manual de Cuenta Corriente',
        },
    ],
    aplicativos: [
        {
            link: '/app/aplicativos/71',
            descripcion: 'Bantotal',
        },
        {
            link: '/app/aplicativos/26',
            descripcion: 'Transactor Manager',
        },
        {
            link: '/app/aplicativos/23',
            descripcion: 'Smart Open Anywhere',
        },
    ],
    organigrama: [
        {
            link: '/app/organigrama/12',
            descripcion: 'Supervisor Operativo de Sucursal',
        }, {
            link: '/app/organigrama/88',
            descripcion: 'Ejecutivo de Atención al Cliente',
        },
    ],
}

function alertt(num) {
    alert(JSON.stringify(num))
}

function onRowClick(row) {
    router.push({ path: row.data.link })
}

// FIX: No se emite correctamente el evento.
const emit = defineEmits(['cantidad-obs']);
// emit('cantidad-obs', asociaciones['observaciones'].length);
emit('cantidad-obs', 33);

</script>


<style scoped>
:deep(.p-datatable-tbody>tr>td) {
    padding: 1px !important;
}
</style>
