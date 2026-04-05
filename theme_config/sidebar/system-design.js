export const systemDesignSidebar = [
  {
    text: '设计方法论',
    link: '/system-design/methodology/',
    items: [
      { text: '系统设计流程', link: '/system-design/methodology/process' },
      {
        text: '需求分析与边界确定',
        link: '/system-design/methodology/requirements',
      },
      { text: '数据模型设计', link: '/system-design/methodology/data-model' },
      { text: 'API 设计原则', link: '/system-design/methodology/api-design' },
    ],
  },
  {
    text: '权衡分析',
    link: '/system-design/tradeoffs/',
    items: [
      { text: 'CAP 权衡', link: '/system-design/tradeoffs/cap' },
      {
        text: '延迟 vs 吞吐量',
        link: '/system-design/tradeoffs/latency-throughput',
      },
      {
        text: '一致性 vs 可用性',
        link: '/system-design/tradeoffs/consistency-availability',
      },
      {
        text: '存储成本 vs 查询性能',
        link: '/system-design/tradeoffs/cost-performance',
      },
    ],
  },
  {
    text: '扩展策略',
    link: '/system-design/scaling/',
    items: [
      { text: '水平扩展', link: '/system-design/scaling/horizontal' },
      { text: '垂直扩展', link: '/system-design/scaling/vertical' },
      { text: '数据库扩展策略', link: '/system-design/scaling/database' },
      { text: '缓存扩展策略', link: '/system-design/scaling/cache' },
    ],
  },
  {
    text: '数据分片',
    link: '/system-design/sharding/',
    items: [
      { text: '分库分表策略', link: '/system-design/sharding/strategy' },
      { text: '分片键选择', link: '/system-design/sharding/sharding-key' },
      { text: '跨分片查询', link: '/system-design/sharding/cross-shard-query' },
      { text: '分片迁移', link: '/system-design/sharding/migration' },
    ],
  },
  {
    text: '缓存策略',
    link: '/system-design/caching/',
    items: [
      { text: '缓存模式', link: '/system-design/caching/patterns' },
      { text: '缓存更新策略', link: '/system-design/caching/update-strategy' },
      {
        text: '缓存穿透、击穿、雪崩',
        link: '/system-design/caching/penetration-breakdown-avalanche',
      },
      { text: '多级缓存', link: '/system-design/caching/multi-level' },
    ],
  },
  {
    text: '负载均衡',
    link: '/system-design/load-balancing/',
    items: [
      {
        text: '负载均衡算法',
        link: '/system-design/load-balancing/algorithms',
      },
      {
        text: '四层 vs 七层负载均衡',
        link: '/system-design/load-balancing/l4-l7',
      },
      {
        text: '健康检查机制',
        link: '/system-design/load-balancing/health-check',
      },
      {
        text: '会话保持策略',
        link: '/system-design/load-balancing/session-persistence',
      },
    ],
  },
  {
    text: '消息队列选型',
    link: '/system-design/message-queue/',
    items: [
      {
        text: 'Kafka vs RabbitMQ vs RocketMQ',
        link: '/system-design/message-queue/comparison',
      },
      {
        text: '消息可靠性保证',
        link: '/system-design/message-queue/reliability',
      },
      { text: '消息顺序性', link: '/system-design/message-queue/ordering' },
      { text: '消息积压处理', link: '/system-design/message-queue/backlog' },
    ],
  },
];
