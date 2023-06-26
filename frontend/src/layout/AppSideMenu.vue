<template>
    <aside id="logo-sidebar"
        class="fixed top-16 left-0 z-40 w-64 h-screen pt-3 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">

                <DesplegableMenuItem nombre="Auditorías" icon="pi-search" v-if="menu.audit">
                    <SubItemMenu nombre="Home" url="auditorias" />
                    <SubItemMenu nombre="Informes" url="pendiente" />
                    <SubItemMenu nombre="Normativas" url="pendiente" />
                    <SubItemMenu nombre="Aplicativos" url="pendiente" />
                    <SubItemMenu nombre="Organigrama" url="pendiente" />
                </DesplegableMenuItem>

                <!-- <DesplegableMenuItem nombre="Observaciones" icon="pi-eye" v-if="menu.audit">
                    <SubItemMenu nombre="Inventario" url="pendiente" />
                    <SubItemMenu nombre="Seguimiento" url="pendiente" />
                </DesplegableMenuItem> -->

                <NormalMenuItem nombre="Observaciones" icon="pi-eye" url="pendiente" v-if="menu.observ" />

                <NormalMenuItem nombre="Requerimientos" icon="pi-th-large" url="pendiente" v-if="menu.requer" />

                <DesplegableMenuItem nombre="Parámetros" icon="pi-cog" v-if="menu.param">
                    <SubItemMenu nombre="Ciclos" url="ciclos" v-if="menu.param.cicl" />
                    <SubItemMenu nombre="Usuarios" url="pendiente" v-if="menu.param.user" />
                    <SubItemMenu nombre="Logs" url="pendiente" v-if="menu.param.log" />
                </DesplegableMenuItem>

            </ul>
        </div>
    </aside>
</template>

<script setup>
import NormalMenuItem from './NormalMenuItem.vue'
import DesplegableMenuItem from './DesplegableMenuItem.vue'
import SubItemMenu from './SubItemMenu.vue';

const props = defineProps(['menu'])
</script>

<style scoped>
</style>
