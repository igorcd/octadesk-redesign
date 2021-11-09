<template>
    <div class="bg-center bg-cover bg-no-repeat rounded-xl shadow-lg relative flex-shrink-0"
         :style="{'width': size, 'height': size, 'background-image': `url('${image}')`}">
        <div class="absolute bottom-1 right-1 translate-x-1/2 translate-y-1/2">
            <slot name="badge"/>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Avatar = defineComponent({
    props: {
        image: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: '2.875rem'
        }
    }
});

export default Avatar;
</script>

<style>

</style>