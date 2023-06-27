<template>
    <h1 class="text-2xl text-bold m-5">COMPONENTE VACIO</h1>
    <div class="card flex justify-content-center">
        <Toast class="z-50" position="center" />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useToast } from "primevue/usetoast";
const toast = useToast();

onMounted(() => show())
const show = () => {
    toast.add({ severity: 'warn', summary: 'En construcción', detail: 'Componente en desarrollo', life: 3000, });
};
</script>
