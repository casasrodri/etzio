<template>
    <li>
        <RouterLink :to="{ name: url }">
            <div
                class="flex items-center w-full p-1 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-normal hover:text-blue-500">
                {{ nombre }}
            </div>
        </RouterLink>
    </li>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['nombre', 'url'])
</script>

<style scoped>
</style>
