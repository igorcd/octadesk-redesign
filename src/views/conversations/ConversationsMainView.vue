<template>
    <Page class="flex items-stretch relative overflow-x-hidden">

        <!-- Header -->
        <teleport to="#headerSection2">
            <div class="h-15 flex items-center px-4">
                <Text type="headline1" class="flex-1">Paulo Trindade</Text>
                <Dropdown>
                    <template #default>
                        <IconButton icon="ellipsis"/>
                    </template>
                    <template #content>
                        <DropdownItem label="Ver perfil" @click="state.profileOpened = true"/>
                        <DropdownItem label="Opção 2"/>
                        <DropdownItem label="Opção 3"/>
                    </template>
                </Dropdown>
            </div>
        </teleport>


        <ConversationsMenuView/>
        <ConversationsMessagesView/>

        <ConversationsChatView v-model:isOpened="state.chatOpened"/>

        <ConversationsProfileView v-model:isOpened="state.profileOpened"/>
    </Page>
</template>

<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import { Page, Text, Dropdown, DropdownItem, IconButton } from '../../components';

import ConversationsMenuView from './ConversationsMenuView.vue';
import ConversationsMessagesView from './ConversationsMessagesView.vue';
import ConversationsChatView from './ConversationsChatView.vue';
import ConversationsProfileView from './ConversationProfileView.vue';

const ConversationsView = defineComponent({
    components: { Page, ConversationsMenuView, Dropdown, ConversationsMessagesView, ConversationsChatView, ConversationsProfileView, Text, DropdownItem, IconButton },
    setup() {
        const state = reactive({
            profileOpened: false,
            chatOpened: false
        });

        return { state };
    }
});

export default ConversationsView;
</script>

<style>

</style>