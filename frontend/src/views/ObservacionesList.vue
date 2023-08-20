<template>
    <h1 class="text-xl font-bold mb-3">Observaciones</h1>
    <div class="card">
        <!-- {{ listaObservaciones }} -->
        <DataTable v-model:filters="filters" :value="listaObservaciones" paginator :rows="10" dataKey="id"
            filterDisplay="row" :loading="loading"
            :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
            <template #header>
                <div class="flex justify-content-end">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Buscar" />
                    </span>
                </div>
            </template>
            <template #empty> No hay observaciones para mostrar. </template>
            <template #loading> Cargando observaciones, por favor espere... </template>
            <Column field="titulo" header="Titulo" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.titulo }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"
                        placeholder="Buscar por titulo" />
                </template>
            </Column>
            <Column header="Responsable" filterField="responsable" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <!-- <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                            :class="`flag flag-${data.country.code}`" style="width: 24px" /> -->
                        <span>{{ data.responsable }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter"
                        placeholder="Buscar por responsable" />
                </template>
            </Column>
            <!--
            <Column header="Agent" filterField="representative" :showFilterMenu="false"
            :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name"
                            :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`"
                            style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives"
                        optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem"
                        :maxSelectedLabels="1">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name"
                                    :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`"
                                    style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
        -->
            <Column field="riesgo" header="Riesgo" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }"
                style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.riesgo" :severity="getSeverity(data.riesgo)" />
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="riesgos"
                        placeholder="Seleccionar" class="p-column-filter" style="min-width: 12rem" :showClear="true">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <!-- <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                <template #body="{ data }">
                    <i class="pi"
                        :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
                </template>
            </Column> -->
        </DataTable>

    </div>
</template>

<script setup>
import Dropdown from 'primevue/dropdown';
import { FilterMatchMode } from 'primevue/api';
// import { CustomerService } from '@/service/CustomerService';
import { onMounted, ref } from 'vue'
import getResponse from '../assets/js/JsonReader'

const listaObservaciones = ref(null)



const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    titulo: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    responsable: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    riesgo: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const riesgos = ref(['Alto', 'Medio', 'Bajo']);
const loading = ref(true);




onMounted(() => {

    async function getObservaciones() {
        const listaObs = await getResponse('lista_observaciones');
        listaObservaciones.value = listaObs;
        loading.value = false;
    }

    getObservaciones()


    // CustomerService.getCustomersMedium().then((data) => {
    //     customers.value = getCustomers(data);
    // });

})







const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};
const formatDate = (value) => {
    return value.toLocaleDateString('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (riesgo) => {
    switch (riesgo) {
        case 'Alto':
            return 'danger';

        case 'Ba':
            return 'success';

        case 'Bajo':
            return 'info';

        case 'Medio':
            return 'warning';
    }
}

</script>
