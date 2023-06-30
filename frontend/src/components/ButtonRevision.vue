<template>
    <template v-if="estado">
        <RouterLink :to="{ path: `/app/auditorias/${url.auditoria}/revisiones/${url.revision}/${toURLName(url.nombre)}` }">
            <Tag :value="estado" :style="{ background: color[estado] }" />
        </RouterLink>
    </template>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { toURLName } from '../assets/js/helpers'

const props = defineProps(['estado', 'url'])



const color = {
    iniciar: '#72E2E2',
    ingresar: '#84DF95',
    finalizado: '#DBDBDB'
}
</script>
