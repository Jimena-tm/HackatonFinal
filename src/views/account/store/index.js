import state from './state';
import actions from './actions';
import mutations from './mutations';

const accountStore = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default accountStore;