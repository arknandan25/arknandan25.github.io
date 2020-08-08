import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'
import NewEmployee from '@/components/NewEmployee'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new_emp',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit_emp',
      component: EditEmployee
    },
    {
      path: '/view/:employee_id',
      name: 'view_emp',
      component: ViewEmployee
    },

  ]
})
