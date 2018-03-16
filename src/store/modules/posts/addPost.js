import * as firebase from 'firebase'

const addPost = {
    actions: {
        addPost({commit, getters}, payload) {
          const post = {
            title: payload.title,
            category: payload.category,
            excerpt: payload.excerpt,
            content: payload.content,
            authorId: getters.user.id
          }
          firebase.database().ref('posts').push(post)
            .then((data) => {
              const key = data.key
              commit('CREATE_POST', {
                ...post,
                id: key
              })
            })
            .catch(e => console.log(e))
        }
    }
}
export default addPost