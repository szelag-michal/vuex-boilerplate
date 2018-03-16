import axios from 'axios'
import url from '../../firebase/'

export default {
  fetchPosts() {
    return  axios.get(url.posts)
  },
}