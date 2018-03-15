import Vue from 'vue'
import axios from 'axios'
export default {
    get(url,request) {
        return axios.get(url)
        .then((response) => commit(request, response.data))
        .catch((error) => console.log(error))
    }
}