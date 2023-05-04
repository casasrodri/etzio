<script setup>
const props = defineProps(['nombre'])
</script>

<template>
    <li>
        <a href="#"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 font-normal hover:text-blue-500">{{ nombre }}</a>
    </li>
</template>

<style scoped>
</style>
