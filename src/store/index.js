import Vue from 'vue'
import Vuex from 'vuex'
// import stocks from './modules/stockModule'
import stocks from '../data/stocks.js'

const stockModule = {
  state: {
    stocks: []
  },
  mutations: {
    'SET_STOCKS' (state, stocks) {
      state.stocks = stocks
    },
    'RND_STOCKS' (state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
      })
    }
  },
  actions: {
    buyStock: ({ commit }, order) => {
      commit('BUY_STOCKS', order)
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

const portfolioModule = {
  state: {
    funds: 90000,
    stocks: []
  },
  mutations: {
    'BUY_STOCKS' (state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id === stockId)
      if (record) {
        record.quantity += quantity
      } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity
        })
      }
      state.funds -= stockPrice * quantity
    },
    'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id === stockId)
      if (record.quantity > quantity) {
        record.quantity -= quantity
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1)
      }
      state.funds += stockPrice * quantity
    },
    'SET_PORTFOLIO' (state, portfolio) {
      state.funds = portfolio.funds
      state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
  },
  actions: {
    sellStock: ({ commit }, order) => {
      commit('SELL_STOCK', order)
    }
  },
  getters: {
    stockPortfolio (state, getters) {
      return state.stocks.map(stock => {
        const record = getters.stocks.find(element => element.id === stock.id)
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        }
      })
    },
    funds (state) {
      return state.funds
    }
  }
}
const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks
        const funds = data.funds
        const stockPortfolio = data.stockPortfolio

        const portfolio = {
          stockPortfolio,
          funds
        }

        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}
Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    loadData
  },
  modules: {
    stockModule,
    portfolioModule
  }
})
