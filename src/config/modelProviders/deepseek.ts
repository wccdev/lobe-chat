import { ModelProviderCard } from '@/types/llm';

const DeepSeek: ModelProviderCard = {
  chatModels: [
    {
      description: '擅长通用对话任务',
      displayName: 'DeepSeek-V2',
      enabled: true,
      id: 'deepseek-chat',
      tokens: 32_768,
    },
    {
      description: '擅长编程场景',
      displayName: 'DeepSeek-coder',
      enabled: true,
      id: 'deepseek-coder',
      tokens: 16_384,
    },
  ],
  id: 'deepseek',
};

export default DeepSeek;