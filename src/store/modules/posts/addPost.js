import * as firebase from 'firebase'

const addPost = {
    state: {
      
    },
    mutations: {
        createPost (state, payload) {
          state.posts.push(payload)
        }
    },
    actions: {
        addPost({commit, getters}, payload) {
          const post = {
            title: payload.title,
            category: payload.category,
            excerpt: payload.excerpt,
            content: payload.content
          }
          firebase.database().ref('posts').push(post)
            .then((data) => {
              const key = data.key
              commit('createPost', {
                ...post,
                id: key
              })
            })
            .catch(e => console.log(e))
        }
    }
}
export default addPost