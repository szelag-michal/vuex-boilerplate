import axios from 'axios'
import api from '@/services/api/jsonplaceholder/users/'

const users = {
    state: {
        users: []
    },
    mutations: {
        FETCH_USERS(state, users) {state.users = users}
    },
    actions: {
        fetchUsers({commit}) {
            api.fetchUsers()
                .then((response) => commit("FETCH_USERS", response.data))
                .catch((error) => console.log(error))
        }
    }
}
export default users