<template>
    <hr>
    <div class="container">
        <div id="editorjs">
        </div>
    </div>
    <!-- <hr>
    <Button class="btn" @click="readOnlyToggle">Toggle</Button>
    <Button class="btn" @click="save">Guardar</Button>
    <Button class="btn" @click="verJson">Ver</Button>

    <pre id="output"></pre>

    <hr>

    URL: {{ url }}

    <div id="destino"></div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['url'])

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// import SimpleImage from '@editorjs/simple-image';
import List from '@editorjs/list';
// import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import Alert from 'editorjs-alert';
import FootnotesTune from '@editorjs/footnotes';
import DragDrop from 'editorjs-drag-drop';
import CtrlRelevante from '../assets/js/block-ctrl-relevante/ctrl-relevante'

const dataDefault = {
    time: 1688093245224,
    blocks: [
        {
            "id": "l98dyx3yjb",
            "type": "header",
            "data": {
                "text": "Plan de cuentas contables",
                "level": 2
            }
        },
        {
            "id": "21m0DYw7R_",
            "type": "paragraph",
            "data": {
                "text": "Como ya veremos en detalle unos\nprocesos más adelante (<b>PR6.- Contabilización de Transacciones/Movimientos</b>),\nla Entidad utiliza diferente aplicativos para realizar sus operaciones diarias generando cada uno de ellos su propia contabilidad que, al final del día luego del proceso Batch, impacta en el sistema SBI (Sistema\nBancario Integral). Este último consolida toda la información contable del\nBanco y contiene el Plan de Cuentas\ndel Banco descripto en el instructivo CIMI00011,\nplan que ha sido definido acorde con los lineamientos establecidos por el BCRA\ny que es actualizado según las necesidades de nuestra Entidad y/o en función a\nlos cambios normativos impulsados por el Órgano Rector.emos en detalle unos\nprocesos más adelante (<b>PR6.- Contabilización de Transacciones/Movimientos</b>,\nla Entidad utiliza diferente aplicativos para realizar sus\noperaciones diarias generando cada uno de ellos su propia contabilidad que, al\nfinal del día luego del proceso Batch, impacta en el sistema SBI (Sistema\nBancario Integral). Este último consolida toda la información contable del\nBanco y contiene el Plan de Cuentas\ndel Banco descripto en el instructivo CIMI00011,\nplan que ha sido definido acorde con los lineamientos establecidos por el BCRA\ny que es actualizado según las necesidades de nuestra Entidad y/o en función a\nlos cambios normativos impulsados por el Órgano Rector."
            },
            "tunes": {
                "footnotes": []
            }
        },
        {
            id: "l98dyx3yjb",
            type: "header",
            data: {
                text: "Solicitud de alta de cuenta",
                level: 3,
            },
        },
        {
            "id": "VZg8kAFr8A",
            "type": "paragraph",
            "data": {
                "text": "Cuando surge la necesidad de dar de alta una nueva cuenta contable (que contemple una transacción determinada o bien por un nuevo producto o servicio o bien por requerimiento del Órgano Rector), solicita la misma a través de un correo electrónico al Jefe de Departamento de Modelos Contables, incluyendo los siguientes datos:"
            },
            "tunes": {
                "footnotes": []
            }
        },
        {
            id: "os_YI4eub4",
            type: "list",
            data: {
                type: "unordered",
                items: [
                    "Descripción de la cuenta,",
                    "Moneda,",
                    "Responsable de conciliación,",
                    "Saldo habitual,",
                    "Autorizador,",
                    "Proceso involucrado,",
                    "Admisión de partidas pendientes."
                ],
            },
        },
        {
            "id": "Kybux7QuMI",
            "type": "paragraph",
            "data": {
                "text": "Una vez que el jefe de sector solicita la creación de la cuenta, el analista la crea y el supervisor de cuentas contables procede a verificar su correcta creación."
            },
            "tunes": {
                "footnotes": []
            }
        },
        {
            "id": "J8RBzJcG9y",
            "type": "ctrlrelevante",
            "data": {}
        },
        {
            "id": "1yKeXKxN7-",
            "type": "header",
            "data": {
                "text": "Modificación de cuentas contables",
                "level": 2
            }
        },
        {
            id: "TcUNySG15P",
            type: "paragraph",
            data: {
                text: "Las modificaciones de cuentas que el sistema permite se relacionan con cambios en la descripción de la cuenta, en la posibilidad de que se gestione por el sistema de partidas pendientes o que se modifique alguno de los parámetros indicativos.",
            },
            tunes: {
                "footnotes": []
            },
        },
        {
            id: "TcUNySOO8D",
            type: "paragraph",
            data: {
                text: "Del mismo modo que en el proceso de alta descripto precedentemente, ante la solicitud del área usuaria, integra el formulario ABM de Cuentas Contables e <b>ingresa la modificación en el aplicativo SBI/SAP. Luego imprime copia del formulario ABM de Cuentas Contables intervenido por el Jefe de Departamento de Modelos Contables y lo resguarda en una carpeta habilitada para tal efecto junto con los antecedentes que generaron la indicada modificación</b>, tal como los mails de solicitud de los usuarios.",
            },
            tunes: {
                "footnotes": []
            },
        },
        {
            "id": "s2EQxlrxYC",
            "type": "paragraph",
            "data": {
                "text": "<b><i>Nota:</i></b> el proceso de alta es el mismo tanto para\nentorno Bancor como para el entorno NIIF. Se debe ingresar en cada entorno para\nsu procesamiento.    "
            },
            "tunes": {
                "footnotes": []
            }
        },
        {
            "id": "omejC9S1Hv",
            "type": "ctrlrelevante",
            "data": {}
        },

        {
            "id": "M3UXyblhAo",
            "type": "header",
            "data": {
                "text": "Aplicativos que registran la contabilización de operaciones ",
                "level": 3
            }
        },
        {
            "id": "KOcIofZ3Z1",
            "type": "paragraph",
            "data": {
                "text": "A continuación, se exponen los procesos de la empresa, y los aplicativos que impactan la contabilidad de las los mismos:"
            },
            "tunes": {
                "footnotes": []
            }
        },
        {
            "id": "OJ6yVRHE-d",
            "type": "table",
            "data": {
                "withHeadings": true,
                "content": [
                    [
                        "Proceso",
                        "Aplicativo"
                    ],
                    [
                        "Compra venta de títulos valores",
                        "Mercap"
                    ],
                    [
                        "Operaciones con bancos corresponsales",
                        "SBI"
                    ],
                    [
                        "Operaciones con el BCRA",
                        "SBI"
                    ],
                    [
                        "Depósitos a plazo fijo",
                        "SAP Banking"
                    ],
                    [
                        "Cuentas corrientes / Cajas de ahorro",
                        "SIBA"
                    ],
                    [
                        "Operaciones de tesorería",
                        "Transactor Manager"
                    ],
                    [
                        "Préstamos",
                        "SAP Banking"
                    ]
                ]
            },
            "tunes": {
                "footnotes": []
            }
        },

        // {
        //     id: "XKNT99-qqS",
        //     type: "attaches",
        //     data: {
        //         file: {
        //             url: "https://drive.google.com/user/catalog/my-file.pdf",
        //             size: 12902,
        //             name: "file.pdf",
        //             extension: "pdf",
        //         },
        //         title: "My file",
        //     },
        // },

        // {
        //     id: "hZAjSnqYMX",
        //     type: "image",
        //     data: {
        //         file: {
        //             url: "assets/codex2x.png",
        //         },
        //         withBorder: false,
        //         withBackground: false,
        //         stretched: true,
        //         caption: "CodeX Code Camp 2019",
        //     },
        // },
    ],
}

const handleReady = (editor) => {
    new DragDrop(editor);
};

const editor = new EditorJS({
    holder: 'editorjs',

    logLevel: 'ERROR',

    autofocus: true,

    placeholder: 'Escribe algo...',

    readOnly: false,

    tools: {

        header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H',
            config: {
                placeholder: 'Ingresa un encabezado',
                levels: [1, 2, 3],
                defaultLevel: 2
            },
            inlineToolbar: ['link']
        },

        list: {
            class: List,
            inlineToolbar: true,
            config: {
                defaultStyle: 'unordered'
            }
        },

        table: {
            class: Table,
            inlineToolbar: true,
            config: {
                rows: 2,
                cols: 3,
            },
            tunes: ['footnotes'],
        },

        alert: {
            class: Alert,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+A',
            config: {
                defaultType: 'primary',
                messagePlaceholder: 'Enter something',
            },
        },

        footnotes: {
            class: FootnotesTune,
            config: {
                placeholder: 'Escribe algo...',
                shortcut: 'CMD+SHIFT+F',
            },
        },

        paragraph: {
            tunes: ['footnotes'],
        },

        ctrlrelevante: CtrlRelevante,

        // quote: {
        //     class: Quote,
        //     inlineToolbar: true,
        //     shortcut: 'CMD+SHIFT+O',
        //     config: {
        //         quotePlaceholder: 'Enter a quote',
        //         captionPlaceholder: 'Quote\'s author',
        //     },
        // },

        // image: SimpleImage,

    },

    i18n: {
        messages: {
            ui: {
                blockTunes: {
                    toggler: {
                        "Click to tune": "Opciones",
                        "or drag to move": "Arrastar para mover"
                    },
                },
                inlineToolbar: {
                    converter: {
                        "Convert to": "Convertir a"
                    }
                },
                toolbar: {
                    toolbox: {
                        "Add": "Agregar",
                        'Filter': 'Filtrar',
                    }
                },
                popover: {
                    'Filter': 'Filtrar',
                    "Nothing found": 'Sin resultados'
                }
            },

            //  Section for translation Tool Names: both block and inline tools
            toolNames: {
                "Text": "Texto",
                "Heading": "Encabezado",
                "List": "Lista",
                "Bold": "Negrita",
                "Italic": "Cursiva",
                "Link": "Link",
                "Table": "Tabla",
                'Alert': 'Alerta',

                // "Quote": "Cita",
                // "Warning": "Примечание",
                // "Checklist": "Чеклист",
                // "Code": "Код",
                // "Delimiter": "Разделитель",
                // "Raw HTML": "HTML-фрагмент",
                // "Marker": "Маркер",
                // "InlineCode": "Моноширинный",
            },


            // Section for passing translations to the external tools classes
            tools: {
                /**
                 * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
                 * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
                 */

                // Link is the internal Inline Tool
                link: {
                    "Add a link": "Hipervínculo..."
                },

                // The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
                stub: {
                    'The block can not be displayed correctly.': '¡Oops! Este bloque no puede ser mostrado correctamente.'
                },

                // image: {
                //     'Heading': 'Encabezado',
                // },

                list: {
                    "Ordered": "Números",
                    "Unordered": "Viñetas"
                },

                table: {
                    'Heading': 'Título',
                    'With headings': 'Con encabezados',
                    'Without headings': 'Sin encabezados',
                    'Add column to left': 'Agregar columna a la izquierda',
                    'Add column to right': 'Agregar columna a la derecha',
                    'Delete column': 'Eliminar columna',
                    'Add row above': 'Agregar fila arriba',
                    'Add row below': 'Agregar fila abajo',
                    'Delete row': 'Eliminar fila',
                },

                header: {
                    'Heading 1': 'Encabezado 1',
                    'Heading 2': 'Encabezado 2',
                    'Heading 3': 'Encabezado 3',
                },

                alert: {
                    'Primary': 'Celeste',
                    'Secondary': 'Gris',
                    'Info': 'Azul',
                    'Success': 'Verde',
                    'Warning': 'Naranja',
                    'Danger': 'Rojo',
                    'Light': 'Claro',
                    'Dark': 'Oscuro',
                    'Left': 'Izquierda',
                    'Center': 'Centro',
                    'Right': 'Derecha',
                }

            },

            /**
             * Section allows to translate Block Tunes
             */
            blockTunes: {
                /**
                 * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
                 * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
                 *
                 * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
                 */
                footnotes: {
                    "Footnote": "Comentario",
                    'Apply': 'Aplicar',
                    'Remove': 'Eliminar',
                    'Are you sure you want to remove this note?': 'Estás seguro que querés borrar esta nota?'
                },
                delete: {
                    "Delete": "Eliminar",
                    'Click to delete': 'Estás seguro?'
                },
                moveUp: {
                    "Move up": "Mover hacia arriba"
                },
                moveDown: {
                    "Move down": "Mover hacia abajo"
                }
            },
        }
    },

    // data: dataDefault,

    onChange: (api, event) => {
        console.log('Hubo un cambio en el editor:', event)
    },

    // onReady: () => {
    //     new DragDrop(editor);
    // },
});


function readOnlyToggle() {
    editor.readOnly.toggle();
}

function save() {
    if (editor.configuration.readOnly) { soloLectura() }
    editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
}





async function cargaDatos() {

    try {
        await editor.isReady
        console.log('Editor.js is ready to work!')
        editor.render(dataDefault)
    } catch (reason) {
        console.log(`Editor.js initialization failed because of ${reason}`)
    }
}

cargaDatos()


const verJson = () => {
    editor.save().then(savedData => {
        output.innerHTML = JSON.stringify(savedData, null, 4);
    })
}







</script>

<style>
/* Son no "scoped" para que se pueda aplicar bien a todos los bloques. */

h1.ce-header {
    font-size: 2.5em;
}

h2.ce-header {
    font-size: 1.875em;
}

h3.ce-header {
    font-size: 1.6em;
}

h4.ce-header {
    font-size: 1.3em;
}

.codex-editor__redactor {
    padding-bottom: 50px !important;
}

.p-button {
    margin: 3px !important;
}

div.ce-stub svg path {
    stroke: none;
}

.ce-stub {
    border-radius: 30px;
}

.ce-block--stretched .ce-block__content {
    max-width: 650px !important;
}


/* Códigos puntuales para mi bloque personalizado */
.simple-image {
    padding: 20px 0;
}

.simple-image input {
    width: 100%;
    padding: 10px;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    outline: none;
    font-size: 14px;
}

.simple-image img {
    max-width: 100%;
    margin-bottom: 15px;
}
</style>
