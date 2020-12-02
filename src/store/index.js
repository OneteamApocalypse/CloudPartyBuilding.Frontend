import Vue from 'vue'
import Vuex from 'vuex'
import Storage from'good-storage'
Vue.use(Vuex)
// vuex3-声明store对象
export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production', // 严格模式：防止直接修改state
	state: { // 核心：数据
		a: 12,
		b: 5,
		users: [],
		system: {
		  hideSidebar: Storage.get("HideSidebar"),
		  miniSidebar: Storage.get("MiniSidebar"),
		  navType: parseInt(Storage.get("NavType") || 1)
		}
	},

	mutations: {
		addA(state, n) {
			state.a += n
		},
		addB(state, n) {
			state.b += n
		},
		MINI_SIDEBAR_TOGGLE(state) {
		    let miniSidebar = state.system.miniSidebar === 1 ? 0 : 1;
		    state.system.miniSidebar = miniSidebar;
		    Storage.set("MiniSidebar", miniSidebar);
		  },
		  HIDE_SIDEBAR_TOGGLE(state) {
		    let hideSidebar = state.system.hideSidebar === 1 ? 0 : 1;
		    state.system.hideSidebar = hideSidebar;
		    Storage.set("HideSidebar", hideSidebar);
		  },
		  NAV_TYPE_TOGGLE(state, type) {
		    state.system.navType = type;
		    Storage.set("NavType", type);
		  }
		
	},
	actions: {
		addA({
			commit
		}, n) {
			commit('addA', n)
		},
		addB({
			commit
		}, n) {
			commit('addB', n)
		}
	},
	getters: {
		count(state) {
			return state.a + state.b
		}
	},
	modules: {}
})
