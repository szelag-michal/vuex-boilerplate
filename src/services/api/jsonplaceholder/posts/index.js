import axios from 'axios'
import url from '../../jsonplaceholder'

export default {
  fetchPosts() {
    return axios.get(url.posts)
  }
}