
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    },
};

const state = {
    headerTitle: 'TODO it!',
    todoItems: storage.fetch(),
}

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
    }
}

const mutations = {
    // 추가
    addOneItem(state, todoItem) {
        let obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    // 삭제
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    // 전체 삭제
    clearAllItems(state) {
        if (confirm('전부 삭제하시겠습니까?')) {
            localStorage.clear();
            state.todoItems = [];
        }
    },
    // 체크
    toggleOneItem(state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        // 로컬스토리지 데이터 갱신
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
}

export default { 
    namespaced: true,
    state, 
    getters, 
    mutations 
};