import * as firebase from 'firebase'

const addCategory = {
    actions: {
        addCategory({commit, getters}, payload) {
          const category = {
            category: payload.category,
          }
          let imageUrl
          let key
          firebase.database().ref('categories').push(category)
            .then((data) => {
               key = data.key
               commit('CREATE_CATEGORY', {
                ...category,
                id: key
              })
            })
            .catch(e => console.log(e))
        }
    }
}
export default addCategory