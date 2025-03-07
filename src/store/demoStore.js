import { createStore } from 'vuex';

const demoStore = createStore({
    state: {
        price: 100
    },
    getters: {
        originalPrice(state) {
            return state.price;
        },
        doublePrice(state) {
            return state.price * 2;
        },
        triplePrice(state) {
            return state.price* 3;
        }
    }
});

export default demoStore;