<template>
    
    <div class="sended-message">

        <p class="sended-message_content">{{ message.content }} </p>

        <!-- Horário -->
        <div class="flex items-center mt-1" v-if="showTime">
            <p class="text-xs font-medium text-neutral-900 mr-1">{{ message.time }}</p>
            <Icon icon="double-check" size="1.25rem"/>
        </div>
    </div>
</template>

<script lang='ts'>
import Message from '@/interfaces/Message';
import { defineComponent, PropType } from 'vue';
import Icon from '../../../components/Icon.vue';

const SendedMessage = defineComponent({
    components: { Icon },
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

export default SendedMessage;
</script>

<style>
.received-message + .sended-message .sended-message_content, .sended-message:first-child .sended-message_content {
    border-top-right-radius: 2px !important;
}
</style>