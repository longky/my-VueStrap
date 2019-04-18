import DailyPhone from './DailyPhone.vue'
import functions from './functions'
import global from './global'

 

Vue.prototype.$axios=axios;
Vue.use(functions); 
Vue.mixin(global);
 

 
new Vue({
  el: '#app',
  components: { DailyPhone }
})

 