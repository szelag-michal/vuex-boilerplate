import * as firebase from 'firebase'

const addPortfolio = {
    actions: {
        addPortfolio({commit, getters}, payload) {
          const portfolio = {
            title: payload.title,
            categoryId: payload.categoryId,
            excerpt: payload.excerpt,
            content: payload.content,
            authorId: getters.user.id
          }
          let imageUrl
          let key
          firebase.database().ref('portfolio').push(portfolio)
            .then((data) => {
               key = data.key
              return key
            })
            .then(key => {
              const filename = payload.image.name
              const ext = filename.slice(filename.lastIndexOf('.'))
              return firebase.storage().ref('portfolio/' + key + '.' + ext).put(payload.image)
            })
            .then(fileData => {
              imageUrl = fileData.metadata.downloadURLs[0]
              return firebase.database().ref('portfolio').child(key).update({imageUrl: imageUrl})
            })
            .then(() => {
              commit('CREATE_PORTFOLIO', {
                ...portfolio,
                imageUrl: imageUrl,
                id: key
              })
            })
            .catch(e => console.log(e))
        }
    }
}
export default addPortfolio