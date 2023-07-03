<template>
    <h1 class="text-xl font-bold mb-3">Demostración</h1>
    <hr />

    <div>
        <p class="my-2">
            La presente es una demostración del prototipo elaborado para un sistema de gestión de auditorías internas de
            entidades financieras.
        </p>
        <p>
            A continuación, se muestran las opciones disponibles por módulo para consultar en esta versión reducida de la
            aplicación:
        </p>
    </div>

    <div id="auditorias" class="my-3 max-w-6xl">
        <div class="card">
            <Panel toggleable>
                <template #header>
                    <div class="flex flex-row gap-2">
                        <div>
                            <i class="pi pi-search"></i>
                        </div>
                        <div class="font-semibold">
                            Auditorías
                        </div>
                    </div>
                </template>

                <div id="lista-auditorias">
                    <h2 class="text-md font-medium">Lista de auditorias</h2>
                    <p class="ml-4">
                        Permite visualizar un listado de la auditorias en curso o finalizadas en el sistema.
                    </p>
                    <p class="ml-4">
                        En la presente demostración se pueden visualizar 2 auditorías anuales (años 2022 y 2023) y una de
                        tipo especial, con sus correspondientes estados. Se recomienda continuar el flujo de la aplicación
                        en la auditoría 2023.
                    </p>
                    <p class="ml-4 mt-1 mb-4">
                        <span class="text-semibold underline">Link ejemplo:</span>
                        &nbsp;
                        <RouterLink :to="{ path: '/app/auditorias' }" class="text-cyan-500">
                            app/auditorias
                        </RouterLink>
                    </p>
                </div>

                <!-- Otro -->
                <div id="auditoria">
                    <h2 class="text-md font-medium">Auditoría</h2>
                    <p class="ml-4">
                        Permite visualizar los atributos de una auditoría, así como interactuar con las revisiones asociadas
                        a la misma.
                    </p>
                    <p class="ml-4">
                        Para continuar con el flujo de la aplicación, se debe ingresar a la revisión:
                        <span class="italic">DEP-CC-COM</span> (Depósitos > Cuenta Corriente > Comercial).
                    </p>
                    <p class="ml-4 mt-1 mb-4">
                        <span class="text-semibold underline">Link ejemplo:</span>
                        &nbsp;
                        <RouterLink :to="{ path: '/app/auditorias/2023/plan-anual-2023' }" class="text-cyan-500">
                            app/auditorias/2023/plan-anual-2023
                        </RouterLink>
                    </p>
                </div>

            </Panel>
        </div>
    </div>
</template>

<script setup>
import Panel from 'primevue/panel';

</script>

<style scoped>
</style>
