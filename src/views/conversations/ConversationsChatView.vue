<template>
    <Section class="flex-1 flex flex-col items-stretch bg-neutral-100">

        <!-- Chat -->
        <div class="flex-1 overflow-auto light-scroll " id="chatContainer">
            <div class="pt-8" id="chatWrapper">
                <transition-group name="list" tag="div">
                    <component v-for="(message, index) in state.messages" :key="message.id"
                               :is="message.author == 'Igor Dantas' ? 'SendedMessage' : 'ReceivedMessage'" 
                               :message="message"
                               :showTime="!state.messages[index + 1] || state.messages[index+1] != null && state.messages[index +1].author != message.author"/>

                </transition-group>
            </div>
        </div>

        <!-- Input -->
        <div class="p-3 md:py-4 md:px-16 flex items-center">

            <form @submit.prevent="sendMessage" class="flex-1" id="chatForm">
                <input class="h-14 shadow-100 outline-none w-full bg-white rounded-xl flex-1 flex items-center border border-neutral-300 px-5" v-model="state.message" placeholder="Digite aqui sua mensagem"/>
            </form>

            <button class="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center ml-3 pl-1" form="chatForm">
                <Icon icon="send" color="white" size="2rem"/>
            </button>
        </div>
    </Section>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive } from 'vue';
import { Header, Text, Icon, Section, IconButton, Dropdown, DropdownItem } from '../../components';
import { ResizeObserver } from 'resize-observer';
import Message from '../../interfaces/Message';
import ReceivedMessage from './components/ReceivedMessage.vue';
import SendedMessage from './components/SendedMessage.vue';
import format from 'date-fns/format';


interface ConversationsChatState {
    messages: Message[],
    message: string;
}

const ConversationsChat = defineComponent({
    components: { Header, Text, ReceivedMessage, SendedMessage, Icon, Section, IconButton, Dropdown, DropdownItem },
    setup() {

        const state = reactive<ConversationsChatState>({
            messages: [
                {
                    id: Math.random(),
                    author: 'Paulo Trindade',
                    content: "Olá, tudo bem? Tenho uma pequena dúvida em relação ao meu pedido",
                    time: format(new Date(), 'HH:mm')
                },
                {
                    id: Math.random(),
                    author: 'Paulo Trindade',
                    content: "Eu posso trocar o endereço de entrega?",
                    time: format(new Date(), 'HH:mm')
                },
            ],
            message : ''
        });

        const sendMessage = () => {
            state.messages.push({
                id: Math.random(),
                author: 'Igor Dantas',
                content: state.message,
                time: format(new Date(), 'HH:mm')
            });

            state.message = '';
        };

        const observeMessages = () => {
            const container = document.querySelector("#chatContainer") as HTMLDivElement;
            const observer = new ResizeObserver(() => {
                container.scrollTop = container.scrollHeight;
            });

            observer.observe(document.querySelector('#chatWrapper')!);
        };

        onMounted(() => observeMessages());

        return { state, sendMessage };
    }
});

export default ConversationsChat;
</script>

<style>
#chatContainer {
    scroll-behavior: smooth;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(.9);
}

.list-leave-active {
  position: absolute;
}
</style>