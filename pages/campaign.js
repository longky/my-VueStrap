
import VueRouter from '../docs/js/vue-router.min.js'
import Campaign from './Campaign.vue'
import routerConfig from './router.campaign.js'
import global from './global.js'
import functions from './functions'
 

Vue.use(functions); 
Vue.mixin(global);
Vue.use(VueRouter);


//配置路由
const router=new VueRouter();

router.map(routerConfig);

/*
router.redirect({
	'/':'/home'
});
*/
router.start(Campaign,'#app');




