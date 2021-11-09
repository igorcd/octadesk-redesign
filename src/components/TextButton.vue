<template>
    <button class="min-h-[1.5rem] flex items-center text-sm">
        <slot/>
    </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const TextButton = defineComponent({
});

export default TextButton;
</script>

<style>

</style>