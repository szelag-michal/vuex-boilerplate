import axios from 'axios'
import api from '@/services/api/firebase/pages/'

const pages = {
    state: {
        pages: [],
    },
    mutations: {
        CREATE_PAGE (state, payload) {
            state.pages.push(payload)
          },
        FETCH_PAGES(state, pages) {
          let arr = []
          for(let key in pages) {
            pages[key].id = key
              arr.push(pages[key]);
          }
          state.pages = arr;
        }
    },
    actions: {
        fetchPages({commit}) {
            api.fetchPages()
                .then((response) => commit("FETCH_PAGES", response.data))
                .catch((error) => console.log(error))
        },
    }
}
export default pages