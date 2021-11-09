<template>
    <div class="min-w-[9rem] h-10 flex items-center px-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md" @click="$emit('pressed')">
        <Icon :icon="icon" class="fill-current text-neutral-900 dark:text-white opacity-60" :class="{'opacity-0': !showIcon}" v-if="icon"/>
        <p class="whitespace-nowrap text-sm px-2 opacity-80">{{ label }}</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

const DropdownItem = defineComponent({
    components: { Icon },
    props: {
        showIcon: {
            type: Boolean,
            default: true
        },
        icon: {
            type: String,
        },
        label: {
            type: String,
            required: true
        }
    }
});

export default DropdownItem;
</script>

<style>

</style>