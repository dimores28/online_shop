import { createStore } from 'vuex'


import commonActions from './actions/actions'
import apiRequests from './actions/api-requests'
import getters from './getters/getters'
import mutations from './mutations/mutations'

const actions = {...commonActions, ...apiRequests};

export default createStore({
  state: {
    searchValue: '',
    isMobile: false,
    isDesktop: true,
    products:[],
    cart: [],
  },
  getters,
  mutations,
  actions,
})
