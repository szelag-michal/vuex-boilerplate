import axios from 'axios'
import api from '@/services/api/firebase/ingredients/'

const posts = {
    state: {
        ingredients: []
    },
    mutations: {
        FETCH_INGREDIENTS(state, ingredients) {
          let arr = []
          for(let key in ingredients) {
            ingredients[key].id = key
              arr.push(ingredients[key]);
          }
          state.ingredients = arr;
        }
    },
    actions: {
        fetchIngredients({commit}) {
            api.fetchIngredients()
                .then((response) => commit("FETCH_INGREDIENTS", response.data))
                .catch((error) => console.log(error))
        }
    }
}
export default posts