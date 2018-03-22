import axios from 'axios'
import api from '@/services/api/firebase/portfolio/'

const portfolio = {
    state: {
        portfolio: [],
        categories: [],
        catNames: []
    },
    mutations: {
        CREATE_PORTFOLIO (state, payload) {
            state.portfolio.push(payload)
          },
          CREATE_CATEGORY (state, payload) {
            state.categories.push(payload)
          },
        FETCH_PORTFOLIO(state, portfolio) {
          let arr = []
          for(let key in portfolio) {
            portfolio[key].id = key
              arr.push(portfolio[key]);
          }
          state.portfolio = arr;
        },
        FETCH_CATEGORIES(state, categories) {
            let arr = []
            for(let key in categories) {
              categories[key].id = key
                arr.push(categories[key]);
            }
            state.categories = arr;
          },
          FETCH_CATEGORY(state, categories) {
            let arr = []
            for(let key in categories) {
              categories[key].id = key
              categories[key].key = key
                arr.push(categories[key]);
            }
            state.catNames = arr;
          }
    },
    actions: {
        fetchPortfolio({commit}) {
            api.fetchPortfolio()
                .then((response) => commit("FETCH_PORTFOLIO", response.data))
                .catch((error) => console.log(error))
        },
        fetchCategories({commit}) {
            api.fetchCategories()
                .then((response) => commit("FETCH_CATEGORIES", response.data))
                .catch((error) => console.log(error))
        },
        fetchCategory({commit}) {
            api.fetchCategories()
                .then((response) => {
                    
                    commit("FETCH_CATEGORY", response.data)
                })
                .catch((error) => console.log(error))
        }
    }
}
export default portfolio