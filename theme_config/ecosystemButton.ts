/**
 * 生态导航配置
 *
 * 数据定义在此文件，供以下两处引用：
 *  - rspress.config.ts（themeConfig 中声明来源，仅作文档注释）
 *  - theme/components/EcosystemButton/index.tsx（实际读取使用）
 *
 * 如需修改生态导航列表，直接编辑本文件即可。
 */
export interface EcosystemItem {
  name: string;
  description: string;
  /** 站内路径或外部链接（以 http 开头则新窗口打开） */
  link: string;
  icon: string;
}

export const ecosystemButton: EcosystemItem[] = [
  {
    name: 'Java',
    description: '主要开发语言',
    link: 'https://guide.docs.zxinrun.cn/',
    icon: '☕',
  },
  {
    name: 'Spring Boot',
    description: '企业级应用框架',
    link: '/spring',
    icon: '🌱',
  },
  {
    name: 'MySQL',
    description: '关系型数据库',
    link: '/database/mysql',
    icon: '🐬',
  },
  {
    name: 'Redis',
    description: '缓存与分布式锁',
    link: '/cache/redis',
    icon: '🔴',
  },
  {
    name: 'Kafka',
    description: '消息队列',
    link: '/middleware/kafka',
    icon: '📨',
  },
  {
    name: 'Docker',
    description: '容器化部署',
    link: '/devops/docker',
    icon: '🐳',
  },
];
