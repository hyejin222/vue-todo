<template>
    <transition-group name="list" tag="ul" class="todoList">
        <!-- <li v-for="(todoItem, index) in this.$store.state.todoItems" :key="todoItem.item" class="shadow"> -->
            <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.item" class="shadow">
            <i class="checkBtn fas fa-check"
                :class="{checkBtnCompleted: todoItem.completed}" 
                @click="toggleComplete({ todoItem, index })">
            </i>
            <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <button class="removeBtn" @click="removeTodo({ todoItem, index })"><i class="fas fa-trash-alt"></i></button>
        </li>
    </transition-group>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    // props: ['propsData'],
    methods: {
        ...mapMutations('todoApp', {
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem'
        }),
        // removeTodo(todoItem, index) {            
        //     //this.$emit('removeTodoItem', todoItem, index);
        //     this.$store.commit('removeOneItem', { todoItem, index });
        // },
        // toggleComplete(todoItem, index) {
        //     //this.$emit('toggleItem', todoItem, index)
        //     this.$store.commit('toggleOneItem', { todoItem, index });            
        // }
    },
    computed: {
        // todoItems() {
        //     return this.$store.getters.storedTodoItems;
        // }

        // 이름을 같게 사용할 때 , this.storedTodoItems
        ...mapGetters('todoApp', ['storedTodoItems'])

        // 이름을 다르게 사용할때 , this.test
        // ...mapGetters({ test : 'storedTodoItems'})
    }
};
</script>

<style scoped>
.todoList {
    margin-top: 0;
    padding-left: 0;
    text-align: left;
    list-style-type: none;
}
.todoList li {
    display: flex;
    align-items: center;
    min-height: 50px;
    height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    line-height: 50px;
    background: #fff;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
    background: transparent;
}
.checkBtn {
    margin-right: 5px;
    line-height: 45px;
    color: #62acde;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}


.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
