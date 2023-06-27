<template>
    <Tag :severity="colorEstado(estado)" :value="texto" />
</template>

<script setup>
const props = defineProps(['estado', 'texto'])

function colorEstado(estado) {

    switch (estado) {
        case 'finalizado':
            return 'success';
        case 'en curso':
            return 'warning';
        case 'pendiente':
            return 'danger';
        default:
            return ''
    }
}
</script>

<style scoped>
</style>
