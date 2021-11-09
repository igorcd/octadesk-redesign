<template>
    <li class="px-2 w-full cursor-pointer" :class="{'bg-gray-100': selected, 'hover:bg-gray-50': !selected}">

        <div class="px-2 py-4 border-b border-gray-100 flex items-center w-full relative">

            <Avatar :image="conversation.avatar">
                <template #badge>
                    <ImageBadge :image="image"/>
                </template>
            </Avatar>

            <div class="flex-1 px-2.5 overflow-hidden">
                <Text type="title">{{ conversation.name }}</Text>
                <Text type="subtitle" class="whitespace-nowrap w-full overflow-hidden overflow-ellipsis">{{ conversation.lastMessage }}</Text>
            </div>

            <div class="w-1.5 h-1.5  rounded-full bg-neutral-900 absolute right-2" v-if="conversation.hasNewMessages ">
                <div class="w-1.5 h-1.5 animate-ping rounded-full bg-neutral-900"></div>
            </div>
        </div>
    </li>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue';
import { Avatar, ImageBadge, Text } from '../../../components';
import { whatsapp, chat, instagram, messenger } from '../../../assets/img';
import ConversationList from '@/interfaces/ConversationList';

const ConversationListItem = defineComponent({
    components: { Avatar, ImageBadge, Text },
    props: {
        conversation: {
            type: Object as PropType<ConversationList>,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const image = computed(() => {
            const images = {
                instagram,
                whatsapp,
                chat,
                messenger
            };

            return images[props.conversation.origin];
        });

        return { image };
    }
});

export default ConversationListItem;
</script>

<style>

</style>