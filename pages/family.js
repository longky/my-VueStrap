import VueRouter from '../docs/js/vue-router.min.js'
import Family from './Family.vue'
import routerConfig from './router.family.js'
import functions from './functions'
import global from './global'

 

Vue.prototype.$axios = axios;
Vue.use(functions); 
Vue.mixin(global);
Vue.use(VueRouter);


//配置路由
const router=new VueRouter();

router.map(routerConfig);

router.redirect({
	'/':'/family/'
});

router.start(Family,'#app');

