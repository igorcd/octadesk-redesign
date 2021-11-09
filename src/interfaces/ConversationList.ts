export default interface ConversationList {
    avatar: string;
    name: string;
    lastMessage: string;
    origin: 'whatsapp' | 'instagram' | 'chat',
    hasNewMessages: boolean;
}