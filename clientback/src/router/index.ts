import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue';
import NoteCreateView from '@/views/NoteCreateView.vue';
import NoteListView from '@/views/NoteListView.vue';
import RegisterView from '@/views/RegisterView.vue';
import useAuth from '@/stores/auth'


const routes:Array<RouteRecordRaw> = [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'list',
      component: NoteListView,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component:NoteListView
    },
    {
      path: '/create',
      name: 'create',
      component: NoteCreateView,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
  ]

  const router= createRouter({
    history: createWebHistory(process.env.BASE_URL)
  })

// router.beforeEach((to,from,next)=>{
//   const auth= useAuth();
//   const isAuth =auth.token;
//   if((to.meta.requireAuth )&&(isAuth==null)){
//     next('login');
//   }else{
//     next();
//   }
// })
export default router
