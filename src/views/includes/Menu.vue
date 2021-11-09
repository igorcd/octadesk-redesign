<template>
    <nav class="flex flex-col pt-4 w-16 ">
        <slot/>
        <div class="flex-1">
            
        </div>
        <slot name="footer"/>
    </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Menu = defineComponent({
});

export default Menu;
</script>

<style>

</style>