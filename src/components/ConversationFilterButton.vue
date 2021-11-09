<template>
    <button class="min-h-[1.75rem] w-full flex items-center text-sm opacity-60" :class="{'font-bold opacity-100': selected}">
        <div class="flex-1 text-left">{{ title }}</div>
        <div>{{ label }}</div>
    </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const ConversationFilterButton = defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        }
    }
});

export default ConversationFilterButton;
</script>

<style>

</style>