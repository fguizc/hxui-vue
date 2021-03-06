/**
 * Created by lxhfight on 2018/8/2.
 * Email: lxhfight1@gmail.com
 * Description:
 *   用于存储并引入不同的独立的模块的全局状态
 */

import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  strict: debug
})
