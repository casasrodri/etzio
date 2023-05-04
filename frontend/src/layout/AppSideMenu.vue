<script setup>
import { ref, onMounted } from 'vue'
import { initFlowbite  } from 'flowbite'

import Icon from './Icon.vue'
onMounted(() => {
    initFlowbite ();
})

const desplegado = ref(false)

</script>

<template>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">

                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700
                        hover:text-blue-500">
                        <Icon class="pi-search" />
                        <span class="flex-1 ml-3 whitespace-nowrap">Auditorías</span>
                    </a>
                </li>

                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700
                        hover:text-blue-500">
                        <Icon class="pi-eye" />
                        <span class="flex-1 ml-3 whitespace-nowrap">Observaciones</span>
                    </a>
                </li>

                <li>
                    <a href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700
                        hover:text-blue-500">
                        <Icon class="pi-th-large" />
                        <span class="flex-1 ml-3 whitespace-nowrap">Requerimientos</span>
                    </a>
                </li>


                <li>
                    <button type="button"
                        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-blue-500"
                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" @click="desplegado = !desplegado">
                        <Icon class="pi-cog" />

                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Parámetros</span>

                        <Icon v-if="desplegado" class="pi-angle-down" />
                        <Icon v-if="!desplegado" class="pi-angle-up" />

                    </button>
                    <ul id="dropdown-example" class="hidden py-2 space-y-2">
                        <li>
                            <a href="#"
                                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-normal hover:text-blue-500">Ciclos</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-normal hover:text-blue-500">Usuarios</a>
                        </li>
                        <li>
                            <a href="#"
                                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-normal hover:text-blue-500">Logs</a>
                        </li>
                    </ul>
                </li>

        </ul>
    </div>
</aside></template>

<style scoped>
</style>
