<script setup>
import { onMounted, reactive } from 'vue'
import { RouterView } from 'vue-router'

import AppTopBar from '../layout/AppTopBar.vue';
import AppSideMenu from '../layout/AppSideMenu.vue'
import getResponse from '../JsonReader'

const usuario = reactive({ name: 'Username', email: 'user@company.com' })
const menus_show = reactive({})


document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        alert('[Ctrl+K] En este momento se abriría el buscador...');
    }
});

onMounted(() => {

    async function getUser() {
        const datos = await getResponse('rtdoLoginRodri')
        usuario.name = datos.name
        usuario.email = datos.email

        Object.assign(menus_show, datos.menu)
    }
    getUser()
})
</script>

<template>
    <AppTopBar :nombre="usuario.name" :email="usuario.email" />
    <AppSideMenu :menu="menus_show" />
    <div class="p-3 sm:ml-64 mt-14">
        <RouterView />
    </div>
</template>

<style scoped>
</style>
