import axios from 'axios'
import api from '@/services/api/firebase/posts/'

const categories = {
    state: {
        categories: []
    },
    mutations: {
        
          CREATE_CATEGORY (state, payload) {
            state.categories.push(payload)
          },
        
        FETCH_CATEGORIES(state, categories) {
            let arr = []
            for(let key in categories) {
              categories[key].id = key
                arr.push(categories[key]);
            }
            state.categories = arr;
          }
    },
    actions: {
        fetchCategories({commit}) {
            api.fetchCategories()
                .then((response) => commit("FETCH_CATEGORIES", response.data))
                .catch((error) => console.log(error))
        }
    }
}
export default categories