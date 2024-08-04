<template >
    <div class="clearAllContainer" v-show="todoItems.length > 0">
        <button class="clearAllBtn" @click="clearTodo">Clear All</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations('todoApp', {
            clearTodo: 'clearAllItems'
        }),
        // clearTodo() {
        //     //this.$emit('clearAll');
        //     this.$store.commit('clearAllItems');
        // }
    },
    computed: {        
        ...mapState('todoApp', ['todoItems']),
    }
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    background: #fff;
    border-radius: 5px;
}
.clearAllBtn {
    /* display: block; */
    width: 100%;
    height: 100%;
    color: #e20303;
}
</style>