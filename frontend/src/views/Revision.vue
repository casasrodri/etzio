<template>
    <h1 class="text-xl font-bold mb-3">{{ revis.nombre }}</h1>

    <div v-if="revis.estado" id="atributos-revision" class="flex flex-row max-w-6xl">
        <div id="datos" class="basis-1/2">
            <div>
                <span class="font-medium underline underline-offset-1">Estado:</span>
                &nbsp;
                <span>{{ revis.estado }}</span>
                <Button label="Finalizar" size="small" severity="success" v-if="revis.estado === 'en curso'"
                    id="btnFinRev" />
            </div>
            <div>
                <span class="font-medium underline underline-offset-1">Ciclo:</span>
                &nbsp;
                <span>{{ revis.ciclo }}</span>
            </div>
            <div>
                <span class="font-medium underline underline-offset-1 pr-2">Periodo:</span>

                <span>{{ revis.periodo }}</span>
            </div>
        </div>
        <div id="informe" class="basis-1/2">
            <span class="font-medium underline underline-offset-1">Informe:</span>
            <div v-if="revis.informe === null">
                <FileUpload chooseLabel="Cargar" mode="basic" url="./upload.php" accept=".pdf, .doc, .docx"
                    id="btnCargaInforme" />
                <!--@upload="onUpload"   -->
            </div>
            <div v-else>
                <Button label="Descargar" size="small" severity="info" icon="pi pi-download" id="btnDescargarInfome" />
                <span class="hidden">{{ revis.informe }}</span>
            </div>
        </div>

    </div>

    <div class="card max-w-6xl mt-3">
        <TabView class="tabview-custom" v-model:activeIndex="activeTab">
            <!-- Relevamientos -->
            <TabPanel>
                <template #header>
                    <div @click="setUrlQueryParameter('relevamiento')">
                        <i class="pi pi-compass mr-2"></i>
                        <span>Relevamiento</span>
                    </div>
                </template>

                <TablaRelevamientos :nodos="relevamientos" />

            </TabPanel>

            <TabPanel>
                <template #header>
                    <div @click="setUrlQueryParameter('riesgos')">
                        <i class="pi pi-exclamation-circle mr-2"></i>
                        <span>Riesgos</span>
                    </div>
                </template>

                <TablaRelacion tipo="riesgos" btnNuevo="true" />

            </TabPanel>

            <TabPanel>
                <template #header>
                    <div @click="setUrlQueryParameter('controles')">
                        <i class="pi pi-eye mr-2"></i>
                        <span>Controles</span>
                    </div>
                </template>

                <TablaRelacion tipo="controles" btnNuevo="true" />

            </TabPanel>

            <TabPanel>
                <template #header>
                    <div @click="setUrlQueryParameter('pruebas')">
                        <i class="pi pi-search mr-2"></i>
                        <span>Pruebas</span>
                    </div>
                </template>

                <TablaRelacion tipo="pruebas" btnNuevo="true" />

            </TabPanel>
        </TabView>
    </div>
    <!-- <hr> -->
    <!-- {{ { auditoria, revision, nombre } }} -->
    <!-- <hr> -->
    <!-- {{ revis }} -->
    <!-- {{ $route.query }} -->
    <!-- {{ route.params }} -->
    <!-- <Button label="Descargar" size="small" severity="info" @click="router.push({ query: { tab: 'controles' } });" /> -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '../router'
import getResponse from '../assets/js/JsonReader'
import getNodeResponse from '../assets/js/NodeService'
import TablaRelevamientos from '../components/TablaRelevamientos.vue'
import TablaRelacion from '../components/TablaRelacion.vue'

const route = useRoute();
const { auditoria, revision, nombre } = route.params
const revis = ref({ nombre: 'Revisión' });
const tabs = ['relevamiento', 'riesgos', 'controles', 'pruebas']
const activeTab = ref(0)

function activarTabURL() {
    const orden = tabs.indexOf(route.query.tab)
    activeTab.value = orden >= 0 ? orden : 0

}

function setUrlQueryParameter(seccion) {
    router.replace({ query: { tab: seccion } });
}

const relevamientos = ref();

// TODO: Arregla esto para usar un skeleton
// const relevamientos = ref({
//     root: [
//         { key: '1', data: { id: 1, codigo: '', nombre: '' }, children: [] },
//         { key: '2', data: { id: 2, codigo: '', nombre: '' }, children: [] },
//         { key: '3', data: { id: 3, codigo: '', nombre: '' }, children: [] },
//         { key: '4', data: { id: 4, codigo: '', nombre: '' }, children: [] }
//     ]
// })

onMounted(() => {
    getResponse(`revision_${auditoria}_${revision}`).then((data) => (revis.value = data));
    getNodeResponse(`relevamientos_${auditoria}_${revision}`).then((data) => (relevamientos.value = data));

    activarTabURL();
});

</script>

<style scoped>
#btnFinRev {
    padding: 2px 5px !important;
    margin-left: 5px !important;
}

#btnCargaInforme {
    font-size: 1rem !important;
}

#btnDescargarInfome {
    padding: 2px 5px !important;
}
</style>
