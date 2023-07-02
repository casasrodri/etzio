<template>
    <div class="flex flex-col place-items-center ">

        <div class="flex flex-col bg-repeat bg-sky-500/80 m-5 p-10 w-max rounded-xl shadow-2xl shadow-teal-400 hover:shadow-red-400 text-teal-800 hover:text-red-900"
            style="background-image: url('/background-pattern.svg')">

            <div class="text-9xl font-mono self-center font-bold tracking-widest  ">
                404
            </div>
            <div class="text-2xl font-mono self-center font-black uppercase">
                Página no encontrada
            </div>
        </div>

        <RouterLink to="/" class="underline text-gray-600 align-middle text-center mt-3">Volver a la página principal
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>
html,
body {
    background-color: #11819C;
}
</style>
