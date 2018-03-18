import axios from 'axios'
import api from '@/services/api/firebase/posts/'

const posts = {
    state: {
        posts: [],
        categories: [],
        catNames: []
    },
    mutations: {
        CREATE_POST (state, payload) {
            state.posts.push(payload)
          },
          CREATE_CATEGORY (state, payload) {
            state.categories.push(payload)
          },
        FETCH_POSTS(state, posts) {
          let arr = []
          for(let key in posts) {
            posts[key].id = key
              arr.push(posts[key]);
          }
          state.posts = arr;
        },
        FETCH_CATEGORIES(state, categories) {
            let arr = []
            for(let key in categories) {
              categories[key].id = key
                arr.push(categories[key]);
            }
            state.categories = arr;
          },
          FETCH_CATEGORY(state, categories) {
            let arr = []
            for(let key in categories) {
              categories[key].id = key
              categories[key].key = key
                arr.push(categories[key]);
            }
            state.catNames = arr;
          }
    },
    actions: {
        fetchPosts({commit}) {
            api.fetchPosts()
                .then((response) => commit("FETCH_POSTS", response.data))
                .catch((error) => console.log(error))
        },
        fetchCategories({commit}) {
            api.fetchCategories()
                .then((response) => commit("FETCH_CATEGORIES", response.data))
                .catch((error) => console.log(error))
        },
        fetchCategory({commit}) {
            api.fetchCategories()
                .then((response) => {
                    
                    commit("FETCH_CATEGORY", response.data)
                })
                .catch((error) => console.log(error))
        }
    }
}
export default posts