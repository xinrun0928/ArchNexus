export const nav = [
  {
    text: '架构原理篇',
    items: [
      {
        text: 'CAP 理论与 BASE 理论',
        link: '/principles/cap-base',
        activeMatch: '^/principles/cap-base',
      },
      {
        text: '一致性模型',
        link: '/principles/consistency',
        activeMatch: '^/principles/consistency',
      },
      {
        text: '分布式算法',
        link: '/principles/algorithms',
        activeMatch: '^/principles/algorithms',
      },
      {
        text: 'Paxos 与 Raft',
        link: '/principles/consensus',
        activeMatch: '^/principles/consensus',
      },
      {
        text: 'Gossip 协议',
        link: '/principles/gossip',
        activeMatch: '^/principles/gossip',
      },
      {
        text: '两阶段提交与三阶段提交',
        link: '/principles/2pc-3pc',
        activeMatch: '^/principles/2pc-3pc',
      },
      {
        text: '幂等性理论',
        link: '/principles/idempotency',
        activeMatch: '^/principles/idempotency',
      },
    ],
  },
  {
    text: '设计模式篇',
    items: [
      {
        text: '创建型模式',
        link: '/patterns/creational',
        activeMatch: '^/patterns/creational',
      },
      {
        text: '结构型模式',
        link: '/patterns/structural',
        activeMatch: '^/patterns/structural',
      },
      {
        text: '行为型模式',
        link: '/patterns/behavioral',
        activeMatch: '^/patterns/behavioral',
      },
      {
        text: '并发设计模式',
        link: '/patterns/concurrent',
        activeMatch: '^/patterns/concurrent',
      },
      {
        text: '分布式设计模式',
        link: '/patterns/distributed',
        activeMatch: '^/patterns/distributed',
      },
      {
        text: '架构模式',
        link: '/patterns/architectural',
        activeMatch: '^/patterns/architectural',
      },
    ],
  },
  {
    text: '系统设计篇',
    items: [
      {
        text: '设计方法论',
        link: '/system-design/methodology',
        activeMatch: '^/system-design/methodology',
      },
      {
        text: '权衡分析',
        link: '/system-design/tradeoffs',
        activeMatch: '^/system-design/tradeoffs',
      },
      {
        text: '水平扩展 vs 垂直扩展',
        link: '/system-design/scaling',
        activeMatch: '^/system-design/scaling',
      },
      {
        text: '数据分片策略',
        link: '/system-design/sharding',
        activeMatch: '^/system-design/sharding',
      },
      {
        text: '缓存策略',
        link: '/system-design/caching',
        activeMatch: '^/system-design/caching',
      },
      {
        text: '负载均衡算法',
        link: '/system-design/load-balancing',
        activeMatch: '^/system-design/load-balancing',
      },
      {
        text: '消息队列选型',
        link: '/system-design/message-queue',
        activeMatch: '^/system-design/message-queue',
      },
    ],
  },
  {
    text: '性能原理篇',
    items: [
      {
        text: '性能评估指标',
        link: '/performance/metrics',
        activeMatch: '^/performance/metrics',
      },
      {
        text: '延迟分析',
        link: '/performance/latency',
        activeMatch: '^/performance/latency',
      },
      {
        text: '吞吐量优化',
        link: '/performance/throughput',
        activeMatch: '^/performance/throughput',
      },
      {
        text: '并发模型',
        link: '/performance/concurrency-models',
        activeMatch: '^/performance/concurrency-models',
      },
      {
        text: '内存管理原理',
        link: '/performance/memory',
        activeMatch: '^/performance/memory',
      },
      {
        text: 'I/O 模型',
        link: '/performance/io-models',
        activeMatch: '^/performance/io-models',
      },
      {
        text: 'JIT 编译原理',
        link: '/performance/jit',
        activeMatch: '^/performance/jit',
      },
    ],
  },
  {
    text: '容错与可用性',
    items: [
      {
        text: '可用性理论',
        link: '/availability/theory',
        activeMatch: '^/availability/theory',
      },
      {
        text: '故障模型',
        link: '/availability/failure-models',
        activeMatch: '^/availability/failure-models',
      },
      {
        text: '熔断机制',
        link: '/availability/circuit-breaker',
        activeMatch: '^/availability/circuit-breaker',
      },
      {
        text: '限流策略',
        link: '/availability/rate-limiting',
        activeMatch: '^/availability/rate-limiting',
      },
      {
        text: '降级策略',
        link: '/availability/degradation',
        activeMatch: '^/availability/degradation',
      },
      {
        text: '超时与重试',
        link: '/availability/timeout-retry',
        activeMatch: '^/availability/timeout-retry',
      },
      {
        text: '健康检查机制',
        link: '/availability/health-check',
        activeMatch: '^/availability/health-check',
      },
    ],
  },
  {
    text: '数据一致性篇',
    items: [
      {
        text: '一致性理论',
        link: '/consistency/theory',
        activeMatch: '^/consistency/theory',
      },
      {
        text: '强一致性实现',
        link: '/consistency/strong',
        activeMatch: '^/consistency/strong',
      },
      {
        text: '最终一致性',
        link: '/consistency/eventual',
        activeMatch: '^/consistency/eventual',
      },
      {
        text: '读写分离一致性',
        link: '/consistency/read-write',
        activeMatch: '^/consistency/read-write',
      },
      {
        text: '缓存一致性',
        link: '/consistency/cache',
        activeMatch: '^/consistency/cache',
      },
      {
        text: '分布式事务一致性',
        link: '/consistency/distributed-tx',
        activeMatch: '^/consistency/distributed-tx',
      },
    ],
  },
  {
    text: '并发与协调',
    items: [
      {
        text: '并发控制理论',
        link: '/concurrency/theory',
        activeMatch: '^/concurrency/theory',
      },
      {
        text: '锁机制',
        link: '/concurrency/locking',
        activeMatch: '^/concurrency/locking',
      },
      {
        text: '乐观锁与悲观锁',
        link: '/concurrency/optimistic-pessimistic',
        activeMatch: '^/concurrency/optimistic-pessimistic',
      },
      {
        text: '事务隔离级别',
        link: '/concurrency/isolation',
        activeMatch: '^/concurrency/isolation',
      },
      {
        text: '死锁检测与预防',
        link: '/concurrency/deadlock',
        activeMatch: '^/concurrency/deadlock',
      },
      {
        text: '并发数据结构',
        link: '/concurrency/data-structures',
        activeMatch: '^/concurrency/data-structures',
      },
    ],
  },
  {
    text: '架构演进篇',
    items: [
      {
        text: '从单体到微服务',
        link: '/evolution/monolith-to-microservices',
        activeMatch: '^/evolution/monolith-to-microservices',
      },
      {
        text: '服务拆分策略',
        link: '/evolution/service-decomposition',
        activeMatch: '^/evolution/service-decomposition',
      },
      {
        text: '数据迁移策略',
        link: '/evolution/data-migration',
        activeMatch: '^/evolution/data-migration',
      },
      {
        text: '架构选型原则',
        link: '/evolution/architecture-selection',
        activeMatch: '^/evolution/architecture-selection',
      },
      {
        text: '技术债务管理',
        link: '/evolution/technical-debt',
        activeMatch: '^/evolution/technical-debt',
      },
    ],
  },
  {
    text: '安全架构篇',
    items: [
      {
        text: '认证与授权理论',
        link: '/security/auth',
        activeMatch: '^/security/auth',
      },
      {
        text: '加密与解密',
        link: '/security/encryption',
        activeMatch: '^/security/encryption',
      },
      {
        text: '会话管理',
        link: '/security/session',
        activeMatch: '^/security/session',
      },
      {
        text: 'OAuth 与 OpenID',
        link: '/security/oauth-openid',
        activeMatch: '^/security/oauth-openid',
      },
      {
        text: '安全设计模式',
        link: '/security/patterns',
        activeMatch: '^/security/patterns',
      },
      {
        text: '防御深度原则',
        link: '/security/defense-in-depth',
        activeMatch: '^/security/defense-in-depth',
      },
    ],
  },
  {
    text: '实战分析篇',
    items: [
      {
        text: '知名架构解析',
        link: '/analysis/famous-architectures',
        activeMatch: '^/analysis/famous-architectures',
      },
      {
        text: '故障案例分析',
        link: '/analysis/failure-cases',
        activeMatch: '^/analysis/failure-cases',
      },
      {
        text: '性能调优案例',
        link: '/analysis/optimization-cases',
        activeMatch: '^/analysis/optimization-cases',
      },
      {
        text: '架构迁移案例',
        link: '/analysis/migration-cases',
        activeMatch: '^/analysis/migration-cases',
      },
      {
        text: '极限场景处理',
        link: '/analysis/extreme-scenarios',
        activeMatch: '^/analysis/extreme-scenarios',
      },
    ],
  },
];
