<script setup>
import Icon from './Icon.vue';

const props = defineProps(['nombre', 'icon'])
</script>

<template>
    <li>
        <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700
                        hover:text-blue-500"
        >
            <Icon :class="icon" />
            <span class="flex-1 ml-3 whitespace-nowrap">
                {{ nombre }}
            </span>
        </a>
    </li>
</template>

<style scoped>
</style>
