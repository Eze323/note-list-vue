import { createRouter, createWebHistory} from 'vue-router'
import LoginView from '../views/LoginView.vue';
import NoteCreateView from '../views/NoteCreateView.vue';
import NoteListView from '../views/NoteListView.vue';
import RegisterView from '../views/RegisterView.vue';
import useAuth from '@/store/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
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
})

router.beforeEach((to,from,next)=>{
  const auth= useAuth();
  const isAuth =auth.token;
  if((to.meta.requireAuth )&&(isAuth==null)){
    next('login');
  }else{
    next();
  }
})

export default router
