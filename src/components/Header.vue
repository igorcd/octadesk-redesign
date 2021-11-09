<template>
    <header class="h-15 bg-white shadow-xl flex items-center">
        <slot/>
    </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Header = defineComponent({
});

export default Header;
</script>

<style>

</style>