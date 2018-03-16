import * as firebase from 'firebase'

const signin = {
    state: {
        user: null
      },
      mutations: {
        setUser(state, payload) {
          state.user = payload
        }
      },
      actions: {
        signUserIn ({commit}, payload) {
          firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(user => {
                const newUser = {
                  id: user.uid
                }
                commit('setUser', newUser)
              })
            .catch(error => console.log(error))
        }
      },
      getters: {
        user(state) {
          return state.user
        }
      }
}
export default signin