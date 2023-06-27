<template>
    Revisión
    {{ { auditoria, revision, nombre } }}
</template>

<script setup>
// banco.audit.int/app/auditorias/2023/revisiones/DEP-CC-COM/cuenta-corriente-comercial
// auditorias/:auditoria/revisiones/:revision
// auditorias/:auditoria/revisiones/:revision/:nombre

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import getResponse from '../JsonReader'
import getNodeResponse from '../NodeService'

const route = useRoute();
const { auditoria, revision, nombre } = route.params
// const audit = ref({ nombre: 'Auditoría' });
// const revisiones = ref(null);
// const filters = ref({ global: null });
// const options = ref(['iniciar', 'ingresar', 'finalizado'])

onMounted(() => {
    // getResponse(`auditoria_${codigo}`).then((data) => (audit.value = data));
    // getNodeResponse(`revisiones_${codigo}`).then((data) => (revisiones.value = data));
});
</script>

<style scoped>
</style>
