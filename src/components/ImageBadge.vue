<template>
    <div class="w-6 h-6 rounded-full border-2 border-white bg-center bg-cover bg-no-repeat "
         :style="{'background-image': `url('${image}')`}">

    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const SocialMediaBadge = defineComponent({
    props: {
        image: {
            type: String,
            required: true
        }
    }
});

export default SocialMediaBadge;
</script>

<style>

</style>