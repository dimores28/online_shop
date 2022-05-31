import { createStore } from 'vuex'


import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import getters from './getters/getters'
import mutations from './mutations/mutations'

const actions = {...commonActions, ...apiRequests};

export default createStore({
  state: {
    products:[],
    cart: [],
  },
  getters,
  mutations,
  actions,
})
