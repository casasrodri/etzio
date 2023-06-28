import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../views/AppView.vue'

import UserHome from '../components/UserHome.vue'
import CiclosList from '../components/CiclosList.vue'
import AuditoriasList from '../components/AuditoriasList.vue'
import Auditoria from '../components/Auditoria.vue'
import Revision from '../components/Revision.vue'
import DocumentoRevision from '../components/DocumentoRevision.vue'
import Vacio from '../components/Vacio.vue'

const tituloPredeterminado = 'Etzio'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/app'
    },
    {
      path: '/app',
      name: 'app',
      component: AppView,
      children: [

        // Lista de auditorias
        {
          path: 'auditorias',
          name: 'auditorias',
          component: AuditoriasList,
          meta: {
            title: 'Auditorías'
          }
        },

        // Auditoría
        {
          path: 'auditorias/:codigo',
          component: Auditoria,
          meta: {
            title: 'Auditoría'
          }
        },
        {
          path: 'auditorias/:codigo/:nombre',
          component: Auditoria,
          meta: {
            title: 'Auditoría'
          }
        },


        // Revisión
        {
          path: 'auditorias/:auditoria/revisiones/:revision',
          component: Revision,
          meta: {
            title: 'Revisión'
          }
        },
        {
          path: 'auditorias/:auditoria/revisiones/:revision/:nombre',
          component: Revision,
          meta: {
            title: 'Revisión'
          }
        },


        // Documentos de Revisión
        {
          path: 'auditorias/:auditoria/revisiones/:revision/doc/:mp/:pr',
          component: DocumentoRevision,
          meta: {
            title: 'Relevamiento'
          }
        },
        {
          path: 'auditorias/:auditoria/revisiones/:revision/doc/:mp/:pr/:nombre',
          component: DocumentoRevision,
          meta: {
            title: 'Relevamiento'
          }
        },


        // Base de usuario
        {
          path: '',
          name: 'userhome',
          component: UserHome
        },
        {
          path: 'ciclos',
          name: 'ciclos',
          component: CiclosList, meta: {
            title: 'Ciclos'
          }
        },
        {
          path: 'otraURLaunVacia',
          name: 'pendiente',
          component: Vacio,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Vacio
    }
  ]
})

router.beforeEach((to, from, next) => {
  // const nuevo = `${tituloPredeterminado} | ${to.meta.title}`
  const pageTitle = to.meta.title || tituloPredeterminado;

  document.title = pageTitle;
  next();
});

export default router
