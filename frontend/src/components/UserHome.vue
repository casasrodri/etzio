<template>
    <h1 class="text-2xl font-bold text-gray-700 mb-3 mt-3">Demostración</h1>
    <hr />

    <div>
        <p class="my-2">
            La presente es una demostración del prototipo elaborado para un sistema de gestión de auditorías internas de
            entidades financieras.
        </p>
        <p>
            A continuación, y organizadas por módulo, se muestran las opciones disponibles para consultar en esta
            versión reducida de la aplicación:
        </p>
    </div>

    <div id="auditorias" class="my-3 max-w-6xl">
        <div class="card">
            <Panel toggleable collapsed>
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


                <div id="auditoria">
                    <h2 class="text-md font-medium">Auditoría</h2>
                    <p class="ml-4">
                        Permite visualizar los atributos de una auditoría, así como interactuar con las
                        revisiones asociadas a la misma.
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


                <div id="revision">
                    <h2 class="text-md font-medium">Revisión</h2>
                    <p class="ml-4">
                        Permite visualizar los atributos de una revisión, así como interactuar con los distintos
                        objetos de la misma, a través de las distintas solapas disponibles.
                    </p>
                    <p class="ml-4">
                        Se pueden crear y editar relevamientos (documentos descriptivos de un proceso), así como
                        visualizar relaciones con Riesgos, Controles y Pruebas.
                        Asimismo, se podría finalizar una revisión, al momento de hacer la emisión del informe
                        definitivo de dicha revisión.
                    </p>
                    <p class="ml-4">
                        Para continuar con el flujo de la aplicación, se debe ingresar a la revisión:
                        <span class="italic">Operatoria habitual</span> (Relevamientos > MP1 > PR1 > Operatoria habitual).
                    </p>
                    <p class="ml-4 mt-1 mb-4">
                        <span class="text-semibold underline">Link ejemplo:</span>
                        &nbsp;
                        <RouterLink :to="{ path: '/app/auditorias/2023/revisiones/DEP-CC-COM/comercial' }"
                            class="text-cyan-500">
                            app/auditorias/2023/revisiones/DEP-CC-COM/comercial
                        </RouterLink>
                    </p>
                </div>


                <div id="documento-relevamiento">
                    <h2 class="text-md font-medium">Documento de relevamiento</h2>
                    <p class="ml-4">
                        Permite visualizar y editar una descipción del proceso bajo auditoría.
                    </p>
                    <p class="ml-4">
                        Se trata de un editor interactivo basado en bloques de contenido. Al detectar controles
                        relevantes se puede agregar un bloque especial de dicho tipo, para identificarlos mejor y,
                        poder relacionarlos con otras secciones de la aplicación.

                        Además, es posible, con los botones flotantes de la parte inferior, ver relaciones con otros
                        objetos de la auditoría, así como ejecutar diversas acciones.
                    </p>
                    <p class="ml-4">
                        Para continuar con el flujo de la aplicación, se hacer click en los objetos relacionados tales
                        como Riesgos, Controles, Pruebas u otras relaciones.
                    </p>
                    <p class="ml-4 mt-1 mb-4">
                        <span class="text-semibold underline">Link ejemplo:</span>
                        &nbsp;
                        <RouterLink
                            :to="{ path: '/app/auditorias/2023/revisiones/DEP-CC-COM/doc/MP1/PR1/operatoria-habitual' }"
                            class="text-cyan-500">
                            app/auditorias/2023/revisiones/DEP-CC-COM/doc/MP1/PR1/operatoria-habitual
                        </RouterLink>
                    </p>
                </div>

                <div id="riesgo">
                    <h2 class="text-md font-medium">Riesgo</h2>
                    <p class="ml-4">
                        Permite visualizar y configurar los atributos de un riesgo de auditoria detectado.
                    </p>
                    <p class="ml-4">
                        Permite definir atributos como su titulo, descripción, nivel (alto, medio, bajo), y los
                        objetivos de control relacionados.
                    </p>
                    <p class="ml-4">
                        Como es usual, incluye relaciones a los demás objetos de auditoría.
                    </p>
                    <p class="ml-4 mt-1 mb-4">
                        <span class="text-semibold underline">Link ejemplo:</span>
                        &nbsp;
                        <RouterLink :to="{ path: '/app/auditorias/2023/revisiones/DEP-CC-COM/riesgo/1' }"
                            class="text-cyan-500">
                            app/auditorias/2023/revisiones/DEP-CC-COM/riesgo/1
                        </RouterLink>
                    </p>
                </div>

                <div id="control">
                    <h2 class="text-md font-medium">Control relevante</h2>
                    <p class="ml-4">
                        Permite visualizar y configurar los atributos de un control relevante que es realizado
                        por un auditado dentro del proceso de negocio analizado.
                    </p>
                    <p class="ml-4">
                        Permite definir atributos como su titulo, descripción, quien realiza el mismo, y los
                        atributos relacionados a su tipificación (oportunidad, periodicidad y automatización).
                    </p>
                    <p class="ml-4">
                        Como es usual, incluye relaciones a los demás objetos de auditoría.
                    </p>
                    <p class="ml-4">
                        Además, en esta sección, se incluyen relaciones con las observaciones detectadas, ya que,
                        si existe alguna observación de auditoría, existe algún control que no está funcionando como
                        debería.
                    </p>
                    <p class="ml-4 mt-1 mb-4">
                        <span class="text-semibold underline">Link ejemplo:</span>
                        &nbsp;
                        <RouterLink :to="{ path: '/app/auditorias/2023/revisiones/DEP-CC-COM/control/87' }"
                            class="text-cyan-500">
                            app/auditorias/2023/revisiones/DEP-CC-COM/control/87
                        </RouterLink>
                    </p>
                </div>

                <div id="pruebas">
                    <h2 class="text-md font-medium">Pruebas de auditoría</h2>
                    <p class="ml-4">
                        Permite visualizar y configurar los atributos de una prueba de auditoría diseñada para
                        verificar el correcto funcionamiento de un control relevante detectado.
                    </p>
                    <p class="ml-4">
                        Permite definir atributos como su titulo, descripción, el informe de auditoría que incluirá
                        dicha prueba, y el sector de la gerencia que la realizará.
                    </p>
                    <p class="ml-4">
                        Como es usual, incluye relaciones a los demás objetos de auditoría.
                    </p>
                    <p class="ml-4 mt-1 mb-4">
                        <span class="text-semibold underline">Link ejemplo:</span>
                        &nbsp;
                        <RouterLink :to="{ path: '/app/auditorias/2023/revisiones/DEP-CC-COM/prueba/1' }"
                            class="text-cyan-500">
                            app/auditorias/2023/revisiones/DEP-CC-COM/prueba/1
                        </RouterLink>
                    </p>
                </div>

            </Panel>

            <Panel toggleable collapsed class="mt-3">
                <template #header>
                    <div class="flex flex-row gap-2">
                        <div>
                            <i class="pi pi-eye"></i>
                        </div>
                        <div class="font-semibold">
                            Observaciones
                        </div>
                    </div>
                </template>

                No se han incluído en esta demostración las funcionalidades la presente sección.
            </Panel>


            <Panel toggleable collapsed class="mt-3">
                <template #header>
                    <div class="flex flex-row gap-2">
                        <div>
                            <i class="pi pi-th-large"></i>
                        </div>
                        <div class="font-semibold">
                            Requerimientos
                        </div>
                    </div>
                </template>

                No se han incluído en esta demostración las funcionalidades la presente sección.
            </Panel>

            <Panel toggleable collapsed class="mt-3">
                <template #header>
                    <div class="flex flex-row gap-2">
                        <div>
                            <i class="pi pi-cog"></i>
                        </div>
                        <div class="font-semibold">
                            Parámetros
                        </div>
                    </div>
                </template>

                Se ha incluido, en el submenú
                <RouterLink :to="{ path: '/app/parametros/ciclos' }" class="text-cyan-500">
                    <i>Ciclos</i>
                </RouterLink>

                un ejemplo de como se visualizará el formulario
                para el alta, baja y modificación de ciclos de negocio relevantes. Los mismos luego conformarán
                las distintas revisiones.
            </Panel>

        </div>
    </div>
</template>

<script setup>
import Panel from 'primevue/panel';

</script>

<style scoped>
</style>

app/auditorias/2023/revisiones/DEP-CC-COM/doc/MP1/PR1/operatoria-habitual
