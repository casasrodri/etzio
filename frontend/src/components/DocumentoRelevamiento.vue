<template>
    <h1 class="sticky top-4 text-2xl font-semibold my-3 z-50">
        Documento de Relevamiento
    </h1>

    <EditorBloques :url="$route.params" />

    <!-------------------------------------------------------------->
    <Dialog v-model:visible="dialogoVisible" :header="dialogoHeader" :style="{ width: '80vw' }" position="center" modal
        draggable maximizable dismissableMask>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>

        <p>
            <br>
            {{ $route.params }}
        </p>

        <template #header>
            <div class="text-xl font-semibold">
                <i :class="iconoHeader"></i>
                {{ dialogoHeader }}
            </div>
        </template>

        <template #footer>
            <div class="flex flex-row justify-center">
                <!-- <Button label="No" icon="pi pi-times" @click="visible = false" text /> -->
                <Button label="Relacionar" icon="pi pi-link" severity="info" @click="dialogoVisible = false" />
                <!-- <Button icon="pi pi-exclamation-circle" severity="info" text rounded /> -->

            </div>
        </template>
    </Dialog>

    <div class="footer flex flex-row justify-center">
        <div class="card flex justify-content-center">

            <!-- Relaciones -->
            <Menu ref="menuRelaciones" id="overlay_menu" :model="menuRelacionesItems" popup />
            <Button type="button" @click="toggleMenuRelaciones" aria-haspopup="true" aria-controls="overlay_menu" rounded
                raised icon="pi pi-link" severity="success" v-tooltip.top="'Relaciones'" />

            <!-- Editor -->
            <Menu ref="menuEditor" id="overlay_menu" :model="menuEditorItems" popup />
            <Button type="button" @click="toggleMenuEditor" aria-haspopup="true" aria-controls="overlay_menu" rounded raised
                icon="pi pi-bars" v-tooltip.top="'Opciones'" />
        </div>
    </div>
    <Toast />

    <ScrollTop threshold="200" class="custom-scrolltop" icon="pi pi-arrow-up" />
</template>

<script setup>
import ScrollTop from 'primevue/scrolltop';
import Dialog from 'primevue/dialog';
import EditorBloques from './EditorBloques.vue';
import Menu from 'primevue/menu';

import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const dialogoVisible = ref(false);
const dialogoHeader = ref(' ');
const iconoHeader = ref('');

const menuRelaciones = ref();
const menuEditor = ref();
const menuRelacionesItems = ref([
    {
        label: 'Relaciones',
        items: [
            {
                label: 'Riesgos',
                icon: 'pi pi-exclamation-circle',
                command: () => {
                    iconoHeader.value = 'pi pi-exclamation-circle'
                    dialogoHeader.value = 'Riesgos'
                    dialogoVisible.value = true
                }
            },
            {
                label: 'Controles',
                icon: 'pi pi-eye',
                command: () => {
                    iconoHeader.value = 'pi pi-eye'
                    dialogoHeader.value = 'Controles'
                    dialogoVisible.value = true
                }
            },
            {
                label: 'Pruebas',
                icon: 'pi pi-search',
                command: () => {
                    iconoHeader.value = 'pi pi-search'
                    dialogoHeader.value = 'Pruebas'
                    dialogoVisible.value = true
                }
            },
        ]
    },
    {
        label: 'Otras',
        items: [
            {
                label: 'Organigrama',
                icon: 'pi pi-sitemap',
                command: () => {
                    iconoHeader.value = 'pi pi-sitemap'
                    dialogoHeader.value = 'Organigrama'
                    dialogoVisible.value = true
                }
            },
            {
                label: 'Normativas',
                icon: 'pi pi-file',
                command: () => {
                    iconoHeader.value = 'pi pi-file'
                    dialogoHeader.value = 'Normativas'
                    dialogoVisible.value = true
                }
            },
            {
                label: 'Aplicativos',
                icon: 'pi pi-desktop',
                command: () => {
                    iconoHeader.value = 'pi pi-desktop'
                    dialogoHeader.value = 'Aplicativos'
                    dialogoVisible.value = true
                }
            },
        ]
    },
]);

const menuEditorItems = ref([
    {
        label: 'Riesgos',
        icon: 'pi pi-exclamation-circle',
        command: () => {
            dialogoHeader.value = 'Riesgos'
            dialogoVisible.value = true
        }
    },
    {
        label: 'Edición',
        items: [
            {
                label: 'Riesgos',
                icon: 'pi pi-exclamation-circle',
                command: () => {
                    dialogoHeader.value = 'Riesgos'
                    dialogoVisible.value = true
                }
            },

        ]
    },
    {
        label: 'Otras',
        items: [
            {
                label: 'Organigrama',
                icon: 'pi pi-sitemap',
                command: () => {
                    dialogoHeader.value = 'Organigrama'
                    dialogoVisible.value = true
                }
            },
            {
                label: 'Normativas',
                icon: 'pi pi-file',
                command: () => {
                    dialogoHeader.value = 'Normativas'
                    dialogoVisible.value = true
                }
            },
            {
                label: 'Aplicativos',
                icon: 'pi pi-desktop',
                command: () => {
                    dialogoHeader.value = 'Aplicativos'
                    dialogoVisible.value = true
                }
            },
        ]
    },
]);

// const menuItems = ref([
//     {
//         label: 'Opciones',
//         items: [
//             {
//                 label: 'Editar',
//                 icon: 'pi pi-pencil',
//                 command: () => {

//                     toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
//                 }
//             },
//             {
//                 label: 'Update',
//                 icon: 'pi pi-refresh',
//                 command: () => {
//                     toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
//                 }
//             },
//             {
//                 label: 'Delete',
//                 icon: 'pi pi-times',
//                 command: () => {
//                     toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
//                 }
//             }
//         ]
//     },
//     {
//         label: 'Relaciones',
//         items: [
//             // {
//             //     label: 'Vue Website',
//             //     icon: 'pi pi-external-link',
//             //     url: 'https://vuejs.org/'
//             // },
//             // {
//             //     label: 'Router',
//             //     icon: 'pi pi-upload',
//             //     to: '/fileupload'
//             // },
//             {
//                 label: 'Riesgos',
//                 icon: 'pi pi-exclamation-circle',
//                 command: () => {
//                     dialogoHeader.value = 'Riesgos'
//                     dialogoVisible.value = true
//                 }
//             },
//             {
//                 label: 'Controles',
//                 icon: 'pi pi-eye',
//                 command: () => {
//                     dialogoHeader.value = 'Controles'
//                     dialogoVisible.value = true
//                 }
//             },
//             {
//                 label: 'Pruebas',
//                 icon: 'pi pi-search',
//                 command: () => {
//                     dialogoHeader.value = 'Pruebas'
//                     dialogoVisible.value = true
//                 }
//             },
//         ]
//     }
// ]);

const toggleMenuRelaciones = (event) => {
    menuRelaciones.value.toggle(event);
};

const toggleMenuEditor = (event) => {
    menuEditor.value.toggle(event);
};


const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};

</script>


<style>
.footer {
    z-index: 50;
    position: sticky;
    bottom: 0;
    padding-bottom: 4px;
    /* background-color: #aaaaaa62; */
}
</style>
