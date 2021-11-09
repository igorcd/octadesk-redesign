<template>
    <button class="rounded-full active:bg-white active:bg-opacity-30 flex items-center justify-center"
            :style="[{'width': size}, {'height': size}]"
            @click="$emit('pressed')">
        <Icon :icon="icon" :size="iconSize" :color="color"/>
    </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from '@/components/Icon.vue';

const IconButton = defineComponent({
    props: {
        icon: {
            type: String,
            required: true
        },
        color: {
            type: String
        },
        size: {
            type: String,
            default: '2.5rem' 
        },
        iconSize: {
            type: String,
            default: '1.5rem'
        }
    },
    components: { Icon }

});

export default IconButton;
</script>

<style>

</style>