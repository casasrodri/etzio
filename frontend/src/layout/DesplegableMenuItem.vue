<template>
    <li>
        <button type="button"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 hover:text-blue-500"

            :aria-controls="randomId"
            :data-collapse-toggle="randomId"

            @click="desplegado = !desplegado"
        >
            <Icon :class="icon" />

            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{{ nombre }}</span>

            <Icon v-if="!desplegado" class="pi-angle-down" />
            <Icon v-if="desplegado" class="pi-angle-up" />

        </button>
        <ul :id="randomId" class="hidden py-2 space-y-2">
            <slot></slot>
        </ul>
    </li>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite  } from 'flowbite'
import Icon from '../components/Icon.vue';

const props = defineProps(['nombre', 'icon', 'desplegado'])

const randomId = Math.floor(Math.random() * 100000)

// TODO ver cual es el init adecuado
onMounted(() => {
    initFlowbite ();
})
</script>

<style scoped>
</style>
