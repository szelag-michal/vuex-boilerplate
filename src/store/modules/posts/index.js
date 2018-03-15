import axios from 'axios'
import api from '@/services/api/jsonplaceholder/posts/'

const posts = {
    state: {
        posts: []
    },
    mutations: {
        FETCH_POSTS(state, posts) {state.posts = posts}
    },
    actions: {
        fetchPosts({commit}) {
            api.fetchPosts()
                .then((response) => commit("FETCH_POSTS", response.data))
                .catch((error) => console.log(error))
        }
    }
}
export default posts