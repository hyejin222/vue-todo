<template>
    <div class="inputBox shadow">
        <input type="text" id="todoInput" v-model="newTodoItem" @keyup.enter="addTodo" />
        <button class="addBtn" @click="addTodo">
            <i class="fas fa-plus"></i>
        </button>

        <Modal v-if="showModal" @close="showModal = false">
            <template #header>
                <h3>경고!
                    <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
                </h3
            ></template>
            <template #body>아무것도 입력하지 않았습니다.</template>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/ModalCustom.vue';
  
export default {
    data() {
        return {
            newTodoItem: '',
            showModal: false,
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoItem) {
                //this.$emit('addTodoItem', this.newTodoItem);
                const newText = this.newTodoItem.trim();
                this.$store.commit('todoApp/addOneItem', newText);
                this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        },
    },
    components: {
        Modal
    },
};
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
}
.inputBox input {
    width: 100%;
    padding: 5px 14px;
    font-size: 0.9rem;
}
.addBtn {
    display: block;
    width: 3rem;
    color: #fff;
    background: linear-gradient(to right, #6478fb, #8763fb);
    border-radius: 0 5px 5px 0;
}
.closeModalBtn {
    position: absolute; 
    top: 16px;
    right: 16px;
    color: #42b983;
}
</style>
