export default {
  namespaced: true,
  state: {
    users: null,
  },
  actions: {},
  mutations: {
    setUsers(state, payload) {
      fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((users) => {
          state.users = users;
        })
        .catch((e) => console.log(e));
    },
  },
};
