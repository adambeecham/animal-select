import Vue from 'vue'
import Router from 'vue-router'
import Cats from './views/Cats.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Cats',
			component: Cats
		}, {
			path: '/dogs',
			name: 'Dogs',
			component: () => import( './views/Dogs.vue')
		}, {
			path: '/misc',
			name: 'Misc',
			component: () => import( './views/Misc.vue')
		}
	]
})
