<template>
    <footer class="py-4 flex justify-center items-center relative">
        <Avatar image="https://liberal.com.br/wp-content/uploads/2020/06/capa-3.jpg">
            <template #badge>
                <div class="w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
            </template>
        </Avatar>

        <div class="absolute left-full">
            <Text type="title" class="whitespace-nowrap">Igor Dantas</Text>
            <Text type="subtitle">Online</Text>
        </div>
    </footer>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { Avatar, Text } from '../../components';

const User = defineComponent({
    components: { Avatar, Text }
});

export default User;
</script>

<style>

</style>