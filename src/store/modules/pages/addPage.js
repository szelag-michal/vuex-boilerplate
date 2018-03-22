import * as firebase from 'firebase'

const addPage = {
    actions: {
      addPage({commit, getters}, payload) {
          const page = {
            title: payload.title,
            slug: payload.slug,
            content: payload.content,
            authorId: getters.user.id
          }
          let imageUrl
          let key
          firebase.database().ref('pages').push(page)
            .then((data) => {
              key = data.key
              return key
            })
            .then(key => {
              const filename = payload.image.name
              const ext = filename.slice(filename.lastIndexOf('.'))
              return firebase.storage().ref('pages/' + key + '.' + ext).put(payload.image)
            })
            .then(fileData => {
              imageUrl = fileData.metadata.downloadURLs[0]
              return firebase.database().ref('pages').child(key).update({imageUrl: imageUrl})
            })
            .then(() => {
              commit('CREATE_PAGE', {
                ...page,
                imageUrl: imageUrl,
                id: key
              })
            })
            .catch(e => console.log(e))
        }
    }
}
export default addPage