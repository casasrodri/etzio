<script setup>
import NormalMenuItem from './NormalMenuItem.vue'
import DesplegableMenuItem from './DesplegableMenuItem.vue'
import SubItemMenu from './SubItemMenu.vue';
</script>

<template>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">

                <NormalMenuItem nombre="Auditorías" icon="pi-search" />

                <NormalMenuItem nombre="Observaciones" icon="pi-eye" />

                <NormalMenuItem nombre="Requerimientos" icon="pi-th-large" />

                <DesplegableMenuItem nombre="Parámetros" icon="pi-cog">
                    <SubItemMenu nombre="Ciclos" />
                    <SubItemMenu nombre="Usuarios" />
                    <SubItemMenu nombre="Logs" />
                </DesplegableMenuItem>

            </ul>
        </div>
    </aside>
</template>

<style scoped>
</style>
