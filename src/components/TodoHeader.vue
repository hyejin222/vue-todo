<template>
    <header>
        <h1>{{ headerTitle }}</h1>
    </header>
</template>


<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState("todoApp", ["headerTitle"]),
    }
}
</script>

<style scoped>
    h1 {
        margin: 2.5rem 0 1.5rem;
        font-weight: 900;
        color: #2F3B52;
    }
</style>