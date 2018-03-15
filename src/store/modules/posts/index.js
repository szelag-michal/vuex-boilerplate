import axios from 'axios'

const posts = {
    state: {
        posts: []
    },
    mutations: {
        FETCH_POSTS(state, posts) {state.posts = posts}
    },
    actions: {
        fetchPosts({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => commit("FETCH_POSTS", response.data))
                .catch((error) => console.log(error))
        }
    }
}
export default posts