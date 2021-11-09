<template>
    <div class="received-message">
        <!-- Avatar -->
        <div class="w-15 mr-4 h-0">
            <div class="received-message_avatar" 
                 style="background-image: url('https://i.pravatar.cc/150')">
            </div>
        </div>

        <!-- Conteúdo -->
        <div class="max-w-[calc(75%-3.75rem)] md:max-w-[95%] mb-1">
            <p class="received-message_content">{{ message.content }}</p>
            <p class="text-xs font-medium text-neutral-900 mx-1 mt-2" v-if="showTime">{{ message.time }}</p>
        </div>
    </div>
</template>

<script lang='ts'>
import Message from '@/interfaces/Message';
import { defineComponent, PropType } from 'vue';

const ReceivedMessage = defineComponent({
    props: {
        message: {
            type: Object as PropType<Message>,
            required: true
        },
        showTime: {
            type: Boolean,
            required: true
        }
    }
});

export default ReceivedMessage;
</script>

<style>
.received-message_avatar {
    display: none;
}
.received-message__time {
    display: none;
}
.received-message:first-child .received-message_avatar,
.sended-message + .received-message .received-message_avatar {
    display: block;
}

.received-message:first-child .received-message_content, .sended-message + .received-message .received-message_content {
    border-top-left-radius: 2px !important;
}


</style>