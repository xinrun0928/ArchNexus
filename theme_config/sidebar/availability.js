export const availabilitySidebar = [
  {
    text: '可用性理论',
    link: '/availability/theory/',
    items: [
      { text: '可用性等级', link: '/availability/theory/levels' },
      { text: 'SLA 与 SLO', link: '/availability/theory/sla-slo' },
      { text: 'MTTR 与 MTBF', link: '/availability/theory/mttr-mtbf' },
      { text: '高可用设计原则', link: '/availability/theory/principles' },
    ],
  },
  {
    text: '故障模型',
    link: '/availability/failure-models/',
    items: [
      { text: '故障分类', link: '/availability/failure-models/classification' },
      { text: '级联故障', link: '/availability/failure-models/cascading' },
      { text: '雪崩效应', link: '/availability/failure-models/avalanche' },
      { text: '故障注入测试', link: '/availability/failure-models/chaos' },
    ],
  },
  {
    text: '熔断机制',
    link: '/availability/circuit-breaker/',
    items: [
      { text: '熔断器模式', link: '/availability/circuit-breaker/pattern' },
      {
        text: '熔断状态机',
        link: '/availability/circuit-breaker/state-machine',
      },
      { text: '熔断阈值设置', link: '/availability/circuit-breaker/threshold' },
      {
        text: '半开状态的处理',
        link: '/availability/circuit-breaker/half-open',
      },
    ],
  },
  {
    text: '限流策略',
    link: '/availability/rate-limiting/',
    items: [
      { text: '限流算法', link: '/availability/rate-limiting/algorithms' },
      { text: '令牌桶算法', link: '/availability/rate-limiting/token-bucket' },
      { text: '漏桶算法', link: '/availability/rate-limiting/leaky-bucket' },
      {
        text: '固定窗口与滑动窗口',
        link: '/availability/rate-limiting/window',
      },
    ],
  },
  {
    text: '降级策略',
    link: '/availability/degradation/',
    items: [
      { text: '降级原则', link: '/availability/degradation/principles' },
      {
        text: '自动降级 vs 手动降级',
        link: '/availability/degradation/auto-manual',
      },
      { text: '降级粒度控制', link: '/availability/degradation/granularity' },
      { text: '降级恢复策略', link: '/availability/degradation/recovery' },
    ],
  },
  {
    text: '超时与重试',
    link: '/availability/timeout-retry/',
    items: [
      { text: '超时设置原则', link: '/availability/timeout-retry/timeout' },
      { text: '重试策略', link: '/availability/timeout-retry/retry' },
      {
        text: '指数退避',
        link: '/availability/timeout-retry/exponential-backoff',
      },
      {
        text: '重试的副作用',
        link: '/availability/timeout-retry/side-effects',
      },
    ],
  },
  {
    text: '健康检查',
    link: '/availability/health-check/',
    items: [
      { text: '健康检查类型', link: '/availability/health-check/types' },
      { text: '存活探针', link: '/availability/health-check/liveness' },
      { text: '就绪探针', link: '/availability/health-check/readiness' },
      {
        text: '健康检查最佳实践',
        link: '/availability/health-check/best-practices',
      },
    ],
  },
];
