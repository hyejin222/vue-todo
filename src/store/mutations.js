// 추가
const addOneItem = (state, todoItem) => {
    let obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
};
// 삭제
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
};
// 전체 삭제
const clearAllItems = (state) => {
    if (confirm('전부 삭제하시겠습니까?')) {
        localStorage.clear();
        state.todoItems = [];
    }
};
// 체크
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // 로컬스토리지 데이터 갱신
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};

export { addOneItem, removeOneItem, clearAllItems, toggleOneItem };
