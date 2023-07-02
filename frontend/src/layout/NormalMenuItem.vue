<template>
    <li>
        <RouterLink :to="{ name: url }">
            <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700
                        hover:text-blue-500">
                <Icon :class="icon" />
                <span class="flex-1 ml-3 whitespace-nowrap">
                    {{ nombre }}
                </span>
            </div>
        </RouterLink>
    </li>
</template>

<script setup>
import Icon from '../components/Icon.vue';

const props = defineProps(['nombre', 'icon', 'url'])
</script>

<style scoped>
</style>
