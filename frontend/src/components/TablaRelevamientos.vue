<template>
    <TreeTable :value="nodos" class="p-treetable-sm text-sm">
        <Column field="codigo" header="Código" expander style="width: 100px;">
            <template #body="row">
                <span class="font-semibold">
                    <!-- {{ row.node.data.tipo != 'R' }} -->
                    {{ row.node.data.codigo }}
                </span>
            </template>
        </Column>
        <Column field="nombre" header="Nombre">
            <template #body="row">
                <span v-if="row.node.data.tipo === 'R'">
                    <i class="pi pi-file mr-2"></i>
                    {{ row.node.data.nombre }}
                </span>
                <span v-else class="font-semibold">
                    <i class="pi pi-folder mr-2"></i>
                    {{ row.node.data.nombre }}
                </span>
            </template>
        </Column>
        <Column header="Acciones" style="width: 80px;" headerStyle="text-align: center;">
            <template #body="row">
                <div class="flex flex-row justify-center">
                    <Button icon="pi pi-eye" severity="success" text rounded title="Ver"
                        @click="abrirDocumento(row.node.data.url)" size="small" class="basis-1/2"
                        v-if="row.node.data.url" />
                    <Button icon="pi pi-times" severity="danger" text rounded title="Eliminar"
                        @click="alertt(row.node.data)" size="small" class="basis-1/2" />
                </div>
            </template>
        </Column>
    </TreeTable>
    <div class="mt-2">
        <Button label="Nuevo" icon="pi pi-plus" size="small" severity="success" id="btnNuevoRel" />
    </div>
</template>

<script setup>
import router from '../router/index'
import { useRoute } from 'vue-router';
const route = useRoute();

const props = defineProps(['nodos'])
// function alertt(t) { alert(JSON.stringify(t)) }
function alertt(t) { console.log(route.params) }
function abrirDocumento(url) {
    router.push({ path: `/app/auditorias/${route.params.auditoria}/revisiones/${route.params.revision}/doc/${url}` })
}
</script>

<style scoped>
#btnNuevoRel {
    margin-top: 3px !important;
}
</style>
