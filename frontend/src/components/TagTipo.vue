<template>
    <Tag :severity="colorTipo(tipo)" :value="texto" />
</template>

<script setup>
const props = defineProps(['tipo', 'texto'])

function colorTipo(tipo) {

    switch (tipo) {
        case 'especial':
            return 'warning';
        default:
            return ''
    }
}
</script>

<style scoped>
</style>
