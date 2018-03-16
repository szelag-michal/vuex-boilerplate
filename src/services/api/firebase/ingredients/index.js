import axios from 'axios'
import url from '../../firebase/'

export default {
  fetchIngredients() {
    return  axios.get(url.ingredients)
  },
}