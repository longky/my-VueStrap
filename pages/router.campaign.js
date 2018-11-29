//专门配置路由规则
//引入模块
import Home from './components/Home.vue'
import Couponlist from './components/Couponlist.vue'
import Detail from './components/Detail.vue'
import Enroll from './components/Enroll.vue'
import Report from './components/Report.vue'


export default{
	'/home/:id':{
		component:Home,
		subRoutes:{
			'enroll':{
				component:Enroll
			},
			'couponlist':{
				component:Couponlist
			}
		}
	},
	'/report/':{
		component:Report,
		subRoutes:{
			'detail/:id':{
				component:Detail
			}
		}
	}
}