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
          let imageUrl
          let key
          firebase.database().ref('posts').push(post)
            .then((data) => {
               key = data.key
              return key
            })
            .then(key => {
              const filename = payload.image.name
              const ext = filename.slice(filename.lastIndexOf('.'))
              return firebase.storage().ref('posts/' + key + '.' + ext).put(payload.image)
            })
            .then(fileData => {
              imageUrl = fileData.metadata.downloadURLs[0]
              return firebase.database().ref('posts').child(key).update({imageUrl: imageUrl})
            })
            .then(() => {
              commit('CREATE_POST', {
                ...post,
                imageUrl: imageUrl,
                id: key
              })
            })
            .catch(e => console.log(e))
        }
    }
}
export default addPost