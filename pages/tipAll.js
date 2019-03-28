import Tips from './TipAll.vue'
import functions from './functions'
import global from './global'

 

Vue.prototype.$axios=axios;
Vue.use(functions); 
Vue.mixin(global);
 

 
new Vue({
  el: '#app',
  components: { Tips }
})

 