export const analysisSidebar = [
  {
    text: '知名架构',
    link: '/analysis/famous-architectures/',
    items: [
      { text: 'Google 演进史', link: '/analysis/famous-architectures/google' },
      { text: 'Netflix 架构', link: '/analysis/famous-architectures/netflix' },
      { text: 'Uber 实时架构', link: '/analysis/famous-architectures/uber' },
      { text: '阿里中台架构', link: '/analysis/famous-architectures/alibaba' },
    ],
  },
  {
    text: '故障案例',
    link: '/analysis/failure-cases/',
    items: [
      { text: '大型故障复盘', link: '/analysis/failure-cases/major-incidents' },
      { text: '故障根因分析', link: '/analysis/failure-cases/root-cause' },
      { text: '故障预防措施', link: '/analysis/failure-cases/prevention' },
      { text: '应急响应流程', link: '/analysis/failure-cases/incident-response' },
    ],
  },
  {
    text: '性能调优',
    link: '/analysis/optimization-cases/',
    items: [
      { text: '数据库调优', link: '/analysis/optimization-cases/database' },
      { text: '缓存调优', link: '/analysis/optimization-cases/cache' },
      { text: 'JVM 调优', link: '/analysis/optimization-cases/jvm' },
      { text: '网络调优', link: '/analysis/optimization-cases/network' },
    ],
  },
  {
    text: '架构迁移',
    link: '/analysis/migration-cases/',
    items: [
      {
        text: '单体拆微服务',
        link: '/analysis/migration-cases/monolith-to-microservices',
      },
      { text: '云原生迁移', link: '/analysis/migration-cases/cloud-native' },
      { text: '技术栈迁移', link: '/analysis/migration-cases/tech-stack' },
      {
        text: '数据迁移实战',
        link: '/analysis/migration-cases/data-migration',
      },
    ],
  },
  {
    text: '极限场景',
    link: '/analysis/extreme-scenarios/',
    items: [
      { text: '秒杀系统设计', link: '/analysis/extreme-scenarios/seckill' },
      {
        text: '高并发抢购',
        link: '/analysis/extreme-scenarios/high-concurrency',
      },
      { text: '海量数据处理', link: '/analysis/extreme-scenarios/big-data' },
      { text: '跨机房多活', link: '/analysis/extreme-scenarios/multi-active' },
    ],
  },
];
