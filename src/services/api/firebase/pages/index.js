import axios from 'axios'
import url from '../../firebase/'

export default {
  fetchPages() {
    return  axios.get(url.pages)
  }
}