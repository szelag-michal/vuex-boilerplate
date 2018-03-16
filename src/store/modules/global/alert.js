const alert = {
    state: {
        loading: false,
        error: null
      },
      mutations: {
        setLoading (state, payload) {
          state.loading = payload
        },
        setError (state, payload) {
          state.error = payload
        },
        clearError (state) {
          state.error = null
        }
      }
}
export default alert