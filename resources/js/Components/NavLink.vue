<template>
    <inertia-link :href="href" class="nav-bg m-auto" :class="classes">
        <slot />
    </inertia-link>
</template>

<style scoped>
    .nav-bg{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
</style>

<script>
    export default {
        props: ['href', 'active'],
        computed: {
            classes() {
                return this.active
                            ? 'bg-red-200'
                            : 'hover:bg-red-100 transition-all'
            }
        }
    }
</script>
