import Vue from 'vue'
import VueRouter from 'vue-router'
import Family from './Family.vue'
import routerConfig from './router.family.js'
import functions from './functions'
 

Vue.use(functions); 
Vue.mixin(global);
Vue.use(VueRouter);


//配置路由
const router=new VueRouter();

router.map(routerConfig);

router.redirect({
	'/':'/family'
});

router.start(Family,'#app');

