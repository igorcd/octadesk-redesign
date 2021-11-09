<template>
    <Panel class="h-content pl-3 pr-6 py-7">
        <Text type="headline1" class="mb-3">Conversas</Text>
        <ConversationFilterButton title="Todas as conversas" label="230"/>
        <ConversationFilterButton title="Suas conversas" label="60" :selected="true"/>
        <ConversationFilterButton title="Esperando resposta" label="230"/>
        <ConversationFilterButton title="Não lidas" label="230"/>
        <ConversationFilterButton title="Menções" label="230"/>
        <ConversationFilterButton title="Não atribuidas" label="230"/>
        <ConversationFilterButton title="Próximas a desativar" label="230"/>
        <ConversationFilterButton title="Inativas" label="230"/>

        <Text type="headline1" class="mb-3 mt-6">Grupos</Text>
        <ConversationFilterButton title="Vendas" label="0"/>
        <ConversationFilterButton title="Pós-vendas" label="2"/>
        <ConversationFilterButton title="Sucesso do cliente" label="0"/>
        <ConversationFilterButton title="Financeiro" label="11"/>
    </Panel>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { Text, ConversationFilterButton, Panel } from '../../components';

const ConversationsMenuView = defineComponent({
    components: { Text, ConversationFilterButton, Panel }
});

export default ConversationsMenuView;
</script>

<style>

</style>