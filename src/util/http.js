/*/*
* @Author: cxpro
* @Date:   2018-01-12 10:13:42
* @Last Modified by:   cxpro
* @Last Modified time: 2018-01-12 17:57:47
* http 配置 封装了axios 拦截器 fetch post get put
*/

import axios from 'axios'
import store from '@/store/store'
import * as types from '@/store/types'
// import router from '@/pages/infoone/router/router'

//axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'https://api.github.com'

//http request 拦截器
axios.interceptors.request.use(
	config => {
		if (store.state.token) {
			config.headers.Authorization = `token ${store.state.token}`;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	});

//http response 拦截器
axios.interceptors.response.use(
	response => {
		return response;
	},
	err => {
		if (err.response) {
			switch (err.response.status) {
				case 401:
				//401清楚所有token，并且跳转到登录页面
				store.commit(types.LOGOUT);
				router.replace({
					path: '/infoone/home',
					query: {redirect: router.currentRoute.fullPath}
				})
			}
		// console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
		}
	});
export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {

    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                // reject(err)
            })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
    })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
    })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
    })
}