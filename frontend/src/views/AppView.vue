<script setup>
import { reactive } from 'vue'
import AppTopBar from '../layout/AppTopBar.vue';
import AppSideMenu from '../layout/AppSideMenu.vue'
import CuadradosGrises from '../layout/CuadradosGrises.vue';

import { onMounted } from 'vue';
import getResponse from '../JsonReader'

const usuario = reactive({name: 'Username', email: 'user@company.com'})

onMounted(() => {

    async function getUser() {
        const datos = await getResponse('login_rodri')
        usuario.name = datos.name
        usuario.email = datos.email
    }
    getUser()
})
</script>

<template>
    <AppTopBar :nombre="usuario.name" :email="usuario.email" />
    <AppSideMenu />
    <CuadradosGrises />
</template>

<style scoped>
</style>
