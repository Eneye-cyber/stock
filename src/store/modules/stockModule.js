import stocks from '../../data/stocks.js'
const stockModule = {
  state: {
    stocks: []
  },
  mutations: {
    'SET_STOCKS' (state, stocks) {
      state.stocks = stocks
    },
    'RND_STOCKS' (state) {

    }
  },
  actions: {
    buyStock: ({ commit }, order) => {
      commit()
    },
    initStocks: ({ commit }) => {
      commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({ commit }) => {
      commit('RND_STOCKS')
    }
  },
  getters: {
    stocks: state => {
      return state.stocks
    }
  }
}

export default {
  stockModule
}
