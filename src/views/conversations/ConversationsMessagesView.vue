<template>
    <Section>
        <teleport to="#headerSection1">
            <div class="absolute top-0 right-0 w-full h-screen bg-white shadow-xl flex flex-col items-stretch">
                
                <!-- Header --> 
                <div class="px-2">
                    <div class="h-15 flex items-center px-2 border-b border-gray-100">
                        <Text type="headline1">Mensagens</Text>
                    </div>
                </div>

                <!-- Mensagens -->
                <ul class="flex-1 overflow-auto light-scroll">
                    <ConversationListItem v-for="(conversation, index) in conversations" :key="index" :conversation="conversation" :selected="index == selectectChat" @click="selectectChat = index"/>
                </ul>
            </div>
        </teleport>
    </Section>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';
import { Section, Text } from '../../components';
import ConversationListItem from './components/ConversationListItem.vue';

// Data
import conversations from '../../data/conversations.json';

const ConversationsMessagesView = defineComponent({
    components: { Section, Text, ConversationListItem },
    setup() {
        const selectectChat = ref(-1);

        return { conversations, selectectChat };
    }
});

export default ConversationsMessagesView;
</script>

<style>

</style>