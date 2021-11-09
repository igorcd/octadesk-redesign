<template>
    <IconsSprite/>

    <div class="h-screen bg-neutral-100">
        <!-- Header -->
        <Header class="fixed top-0 right-0 w-full z-20 flex items-stretch">

            <div class="panel flex items-center  px-6 mr-16">
                <img :src="logo" class="h-7"/>
            </div>

            <div class="section relative" id="headerSection1">
                
            </div>
            <div class="flex-1" id="headerSection2">

            </div>
        </Header>

        <!-- Conteúdo -->
        <div class="h-screen flex items-stretch pt-15">
            <Menu>
                <template #default>
                    <MenuItem icon="chat" :selected="$route.name == 'conversations'" @click="$router.replace({ name: 'conversations'})"/>
                    <MenuItem icon="graph" :selected="$route.name == 'charts'" @click="$router.replace({ name: 'charts'})"/>
                    <MenuItem icon="users" :selected="$route.name == 'users'" @click="$router.replace({ name: 'users'})"/>
                </template>
                <template #footer>
                    <MenuItem icon="bell"/>
                    <MenuItem icon="help"/>
                    <MenuItem icon="cog"/>
                    <User/>
                </template>
            </Menu>

            <RouterView />
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { IconsSprite, Header } from './components';
import Menu from './views/includes/Menu.vue';
import MenuItem from './views/includes/MenuItem.vue';
import User from './views/includes/User.vue';

import { logo } from './assets/img';

const App = defineComponent({
    components: { IconsSprite, Header, Menu, MenuItem, User },
    setup() {
        return { logo };
    }
});

export default App;
</script>

<style>

</style>