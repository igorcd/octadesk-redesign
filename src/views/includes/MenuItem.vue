<template>
    <button class="w-16 h-14 flex items-center justify-center hover:bg-gray-100" :class="{'opacity-30': !selected}">
        <Icon :icon="icon" color="graph" size="1.875rem"/>
    </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { Icon } from '../../components';

const MenuItem = defineComponent({
    components: { Icon },
    props: {
        icon: {
            type: String,
            required: true
        },
        selected: { 
            type: Boolean,
            default: false
        }
    }
});

export default MenuItem;
</script>

<style>

</style>