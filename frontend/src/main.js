// App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// PrimeVue Components
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext'
import SelectButton from 'primevue/selectbutton'
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import TreeTable from 'primevue/treetable'

// Estilos
import './assets/main.css'
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

// Temas
import 'primevue/resources/themes/saga-blue/theme.css'
// import 'primevue/resources/themes/tailwind-light/theme.css'
// import 'primevue/resources/themes/lara-light-teal/theme.css'
// import 'primevue/resources/themes/vela-orange/theme.css'

const app = createApp(App)

app.use(router)
app.use(ToastService)

// PrimeVue Components
app.use(PrimeVue, { ripple: true })
app.component('Button', Button);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('InputText', InputText);
app.component('SelectButton', SelectButton);
app.component('Tag', Tag);
app.component('Toast', Toast);
app.component('TreeTable', TreeTable);

app.mount('#app')
