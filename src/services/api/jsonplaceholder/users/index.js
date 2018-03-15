import axios from 'axios'
import url from '../../jsonplaceholder'

export default {
  fetchUsers() {
    return axios.get(url.users)
  }
}