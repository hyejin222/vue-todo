import { createStore } from 'vuex';
import todoApp from './modules/todoApp'

const store = createStore({
    modules: {
        todoApp,
    },
});

export default store;
