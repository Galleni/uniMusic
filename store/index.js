import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {},
		hasLogin: false,
		leaveTime: 0,
		message: {}  // 角标信息
	},
	mutations: {
		storeLeaveTime(state, payload) { // 记录离开时间
			let date = new Date()
			state.leaveTime = date.getTime()
		},
		storeLogin(state, payload) { // 改变登录状态
			const temp = {
				hasLogin: true,
				token: payload.token,
				profile: payload.profile
			}
			
			state.userInfo = Object.assign({}, state.userInfo, temp)
			
			// 将用户信息保存在本地
			uni.setStorageSync('userInfo', JSON.stringify(state.userInfo))
		
		},
		storeLogout(state) { //退出登录
			const temp = {
				hasLogin: false,
				token: '',
				profile: {}
			}
			state.userInfo = Object.assign({}, state.userInfo, temp)
			
			uni.removeStorageSync('userInfo')
		},
		storeMessage (state, payload) {   // 角标信息
			state.message = {...state.message, ...payload}
		}
	}
})

export default store
