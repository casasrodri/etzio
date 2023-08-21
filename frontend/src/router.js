import { createRouter, createWebHistory } from 'vue-router'

import AppView from './views/AppView.vue'

import UserHome from './components/UserHome.vue'

// Views
import AuditoriasList from './views/AuditoriasList.vue'
import Auditoria from './views/Auditoria.vue'
import Revision from './views/Revision.vue'
import Relevamiento from './views/Relevamiento.vue'
import ControlRelevante from './views/ControlRelevante.vue'
import Riesgo from './views/Riesgo.vue'
import Prueba from './views/Prueba.vue'

import ParamCiclos from './views/ParamCiclos.vue'
import FormCiclos from './views/FormCiclos.vue'

import NotFound from './views/NotFound.vue'
import Vacio from './components/Vacio.vue'

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
        {
          path: 'auditorias',
          name: 'auditorias',
          component: AuditoriasList,
          meta: {
            title: 'Auditorías'
          }
        },
        {
          path: 'auditorias/:codigo/:nombre?',
          component: Auditoria,
          meta: {
            title: 'Auditoría'
          }
        },
        {
          path: 'auditorias/:auditoria/revisiones/:revision/:nombre?',
          component: Revision,
          meta: {
            title: 'Revisión'
          }
        },
        {
          path: 'auditorias/:auditoria/revisiones/:revision/doc/:mp/:pr/:nombre?',
          component: Relevamiento,
          meta: {
            title: 'Relevamiento'
          }
        },
        {
          path: 'auditorias/:auditoria/revisiones/:revision/control/:id/:nombre?',
          component: ControlRelevante,
          meta: {
            title: 'Control'
          }
        },
        {
          path: 'auditorias/:auditoria/revisiones/:revision/riesgo/:id/:nombre?',
          component: Riesgo,
          meta: {
            title: 'Riesgo'
          }
        },
        {
          path: 'auditorias/:auditoria/revisiones/:revision/prueba/:id/:nombre?',
          component: Prueba,
          meta: {
            title: 'Prueba'
          }
        },


        // {
        //   path: 'observaciones',
        //   component: ObservacionesList,
        //   meta: {
        //     title: 'Observaciones'
        //   }
        // },
        // {
        //   path: 'observaciones/:id/:nombre?',
        //   component: Observacion,
        //   meta: {
        //     title: 'Observación'
        //   }
        // },


        // {
        //   path: 'requerimientos',
        //   component: RequerimientosList,
        //   meta: {
        //     title: 'Requerimientos'
        //   }
        // },
        // {
        //   path: 'requerimientos/:id/:nombre?',
        //   component: Requerimiento,
        //   meta: {
        //     title: 'Requerimiento'
        //   }
        // },


        // Base de usuario
        {
          path: '',
          name: 'userhome',
          component: UserHome
        },
        {
          path: 'parametros/ciclos',
          name: 'ciclos',
          component: ParamCiclos,
          meta: {
            title: 'Ciclos'
          }
        },
        {
          path: 'parametros/ciclos/:id',
          name: 'formciclos',
          component: FormCiclos,
          meta: {
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
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
})

router.beforeEach((to, from, next) => {
  // const nuevo = `${tituloPredeterminado} | ${to.meta.title}`
  const pageTitle = to.meta.title || tituloPredeterminado;

  document.title = pageTitle;
  next();
});

export default router
