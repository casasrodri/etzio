// App
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// PrimeVue Components
import PrimeVue from 'primevue/config';
import Column from 'primevue/column'
import TreeTable from 'primevue/treetable'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

// Estilos
import './assets/main.css'
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

// Temas
import 'primevue/resources/themes/saga-green/theme.css'
// import 'primevue/resources/themes/tailwind-light/theme.css'
// import 'primevue/resources/themes/lara-light-teal/theme.css'
// import 'primevue/resources/themes/vela-orange/theme.css'

const app = createApp(App)

app.use(router)

// PrimeVue Components
app.use(PrimeVue, { ripple: true })
app.component('Button', Button);
app.component('Column', Column);
app.component('InputText', InputText);
app.component('TreeTable', TreeTable);

app.mount('#app')
