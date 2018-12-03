//专门配置路由规则
//引入模块
import MyFamily from './components/MyFamily.vue'
import Tutor from './components/Tutor.vue'


export default{
	'/family/':{
		component:MyFamily
	},
	'/tutor/':{
		component:Tutor
	}
}