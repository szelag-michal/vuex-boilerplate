import axios from 'axios'
import url from '../../firebase/'

export default {
  fetchPortfolio() {
    return  axios.get(url.portfolio)
  },
  fetchCategories() {
    return  axios.get(url.categories)
  },
}