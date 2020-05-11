export default {
  namespaced: true,
  state: {
    users: null,
  },
  actions: {},
  mutations: {
    setUsers(state, payload) {
      fetch(
        "https://my-json-server.typicode.com/Mariega/jsonServerHackatonFinal/users"
      )
        .then((response) => response.json())
        .then((users) => {
          state.users = users;
        })
        .catch((e) => console.log(e));
    },
  },
};
