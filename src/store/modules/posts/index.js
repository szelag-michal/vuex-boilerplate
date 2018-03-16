import axios from 'axios'
import api from '@/services/api/firebase/posts/'

const posts = {
    state: {
        posts: []
    },
    mutations: {
        CREATE_POST (state, payload) {
            state.posts.push(payload)
          },
        FETCH_POSTS(state, posts) {
          let arr = []
          for(let key in posts) {
            posts[key].id = key
              arr.push(posts[key]);
          }
          state.posts = arr;
        }
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