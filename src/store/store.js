/*
* @Author: cxpro
* @Date:   2018-01-12 11:17:23
* @Last Modified by:   cxpro
* @Last Modified time: 2018-01-12 17:55:05
*
*/
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
//Store 需要大写
export default new Vuex.Store({
	state: {
		user: {},
		token: null,
		title: ''
	},
	mutations: {
		//登录记录token
		[types.LOGIN]: (state, data) => {
			localStorage.token = data;
			state.token = data;
		},
		//登出移除token
		[types.LOGOUT]: (state, data) => {
			localStorage.removeItem('token');
			state.token = null;
		},
		[types.TITLE]: (state, data) => {
			state.title = data
		}
	}
})