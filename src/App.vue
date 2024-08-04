<template>
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <TodoFooter />
    <!-- <TestSample /> -->
    <!-- 
    <TodoInput v-on:addTodoItem="addOneItem" />
    <TodoList :propsData="todoItems"
        v-on:removeTodoItem="removeOneItem" 
        v-on:toggleItem="toggleOneItem" />
    <TodoFooter v-on:clearAll="clearAllItems"/>
    -->
</template>

<script>
//import { mapState } from 'vuex';

import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';


// import TestSample from './components/TestSample.vue';


export default {    
    name: 'App',
    // data() {
    //     return {
    //         todoItems: [],
    //     };
    // },
    methods: { // mutations, 주석처리 = store로 이동됨
        // 추가
        // addOneItem(todoItem) {
        //     let obj = { completed: false, item: todoItem };
        //     localStorage.setItem(todoItem, JSON.stringify(obj));
        //     this.todoItems.push(obj);
        // },
        // 삭제
        // removeOneItem(todoItem, index) {
        //     localStorage.removeItem(todoItem.item);
        //     this.todoItems.splice(index, 1);
        // },
        // 전체 삭제
        // clearAllItems() {
        //     if(confirm("전부 삭제하시겠습니까?")) {
        //         localStorage.clear();
        //         this.todoItems = [];
        //     }
        // },
        // 체크
        // toggleOneItem(todoItem, index) {
        //     this.todoItems[index].completed = !this.todoItems[index].completed;
        //     // 로컬스토리지 데이터 갱신
        //     localStorage.removeItem(todoItem.item);
        //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        // }
        
    },
    // created() {
    //     if (localStorage.length > 0) {
    //         for (let i = 0; i < localStorage.length; i++) {
    //             this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //         }
    //     }
    // },

    components: {
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter,
        // TestSample
    },
};
</script>

<style>
* {
    font-family: 'Ubuntu', sans-serif;
    box-sizing: border-box;
}
body {
    text-align: center;
    background: #f6f6f6;
}
input {
    width: 200px;
    border-style: none;
}
button {
    background: transparent;
    border-style: none;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
