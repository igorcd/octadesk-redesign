<template>
    <Page class="flex items-center justify-center">
        <h1 class="text-3xl font-bold">Users</h1>
    </Page>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { Page } from '../../components';

const UsersMainView = defineComponent({
    components: { Page }
});

export default UsersMainView;
</script>

<style>

</style>