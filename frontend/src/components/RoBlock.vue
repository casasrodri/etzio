<template>
    <hr>
    <div class="container">
        <div id="editorjs">
        </div>
    </div>
    <hr>
    <Button class="btn" @click="readOnlyToggle">Toggle</Button>
    <Button class="btn" @click="save">Guardar</Button>
    <Button class="btn" @click="verJson">Ver</Button>

    <pre id="output"></pre>

    <hr>

    URL: {{ url }}

    <div id="destino"></div>
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
import SimpleImage from '../assets/js/editorjs-simple-image/simple-image'

const dataDefault = {
    time: 1688093245224,
    blocks: [
        {
            id: "mhTl6ghSkV",
            type: "paragraph",
            data: {
                text: "Hey. Meet the new Editor. On this picture you can see it in action. Then, try a demo 🤓",
            },
        },
        {
            id: "l98dyx3yjb",
            type: "header",
            data: {
                text: "Key features",
                level: 3,
            },
        },
        {
            id: "os_YI4eub4",
            type: "list",
            data: {
                type: "unordered",
                items: [
                    "It is a block-style editor",
                    "It returns clean data output in JSON",
                ],
            },
        },
        {
            id: "1yKeXKxN7-",
            type: "header",
            data: {
                text: "What does it mean «block-styled editor»",
                level: 3,
            },
        },
        {
            id: "TcUNySG15P",
            type: "paragraph",
            data: {
                text: "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core.",
            },
            tunes: {
                footnotes: [
                    "It works more stable then in other WYSIWYG editors. Same time it has smooth and well-known arrow navigation behavior like classic editors.",],
            },
        },
        {
            id: "M3UXyblhAo",
            type: "header",
            data: {
                text: "What does it mean clean data output?",
                level: 3,
            },
        },
        {
            id: "KOcIofZ3Z1",
            type: "paragraph",
            data: {
                text: "There are dozens of ready-to-use Blocks and a simple API  for creating any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA buttons, and even games.",
            },
            tunes: {
                footnotes: [
                    "Just take a look at our Creating Block Tool guide. You'll be surprised.",],
            },
        },
        {
            id: "ksCokKAhQw",
            type: "paragraph",
            data: {
                text: "Classic WYSIWYG editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object</mark> with data of each Block.",
            },
        },
        {
            id: "XKNT99-qqS",
            type: "attaches",
            data: {
                file: {
                    url: "https://drive.google.com/user/catalog/my-file.pdf",
                    size: 12902,
                    name: "file.pdf",
                    extension: "pdf",
                },
                title: "My file",
            },
        },
        {
            id: "7RosVX2kcH",
            type: "paragraph",
            data: {
                text: "Given data can be used as you want: render with HTML for Web clients, render natively for mobile apps, create the markup for Facebook Instant Articles or Google AMP, generate an audio version, and so on.",
            },
        },
        {
            id: "eq06PsNsab",
            type: "paragraph",
            data: {
                text: "Clean data is useful to sanitize, validate and process on the backend.",
            },
        },
        {
            id: "hZAjSnqYMX",
            type: "image",
            data: {
                file: {
                    url: "assets/codex2x.png",
                },
                withBorder: false,
                withBackground: false,
                stretched: true,
                caption: "CodeX Code Camp 2019",
            },
        },],
}

const handleReady = (editor) => {
    new DragDrop(editor);
};

const editor = new EditorJS({
    holder: 'editorjs',

    logLevel: 'VERBOSE',

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

        rodri: SimpleImage,

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
