<template>
    <div class="absolute 2xl:static transition-transform duration-150 right-0 top-0 w-76 h-content overflow-auto bg-white shadow-2xl p-6 2xl:translate-x-0"
         v-click-out="() => $emit('update:isOpened', false)"
         :class="{'translate-x-full': !isOpened}">
        
        <Avatar size="16rem" image="https://i.pravatar.cc/150" class="mx-auto mb-4"/>
        <Text type="headline1">Paulo Trindade</Text>
        <Text class="opacity-60 mb-8">@paulotrindade</Text>

        <Text type="headline1" class="mb-2">Tags</Text>
        <div class="flex items-center flex-wrap mb-8">
            <div class="tag">Tag 1</div>
            <div class="tag">Tag usuário</div>
            <div class="tag">Tag 3</div>
            <div class="tag">Tag trabalho</div>
        </div>

        <Text type="headline1">Observações</Text>
        <Text class="opacity-60 mb-8">Com histórico de devolução de produto por tamanho errado</Text>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { Avatar, Text } from '../../components';
import clickOut from '../../directives/clickOut';

const ConversationProfileView = defineComponent({
    directives: { clickOut },
    components: { Avatar, Text },
    props: {
        isOpened: {
            type: Boolean,
            default: true
        }
    }
});

export default ConversationProfileView;
</script>

<style>

</style>