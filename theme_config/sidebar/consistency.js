export const consistencySidebar = [
  {
    text: '一致性理论',
    link: '/consistency/theory/',
    items: [
      { text: '一致性的定义', link: '/consistency/theory/definition' },
      { text: 'ACID 与一致性', link: '/consistency/theory/acid' },
      { text: '分布式一致性挑战', link: '/consistency/theory/challenges' },
      { text: '一致性模型选择', link: '/consistency/theory/selection' },
    ],
  },
  {
    text: '强一致性',
    link: '/consistency/strong/',
    items: [
      { text: '线性一致性', link: '/consistency/strong/linearizability' },
      { text: '顺序一致性', link: '/consistency/strong/sequential' },
      { text: '强一致性的实现', link: '/consistency/strong/implementation' },
      { text: '强一致性的代价', link: '/consistency/strong/cost' },
    ],
  },
  {
    text: '最终一致性',
    link: '/consistency/eventual/',
    items: [
      { text: '最终一致性模型', link: '/consistency/eventual/model' },
      { text: '最终一致性的收敛', link: '/consistency/eventual/convergence' },
      {
        text: '读写冲突解决',
        link: '/consistency/eventual/conflict-resolution',
      },
      { text: '最终一致性应用场景', link: '/consistency/eventual/scenarios' },
    ],
  },
  {
    text: '读写分离',
    link: '/consistency/read-write/',
    items: [
      { text: '主从复制原理', link: '/consistency/read-write/replication' },
      { text: '读写分离的一致性', link: '/consistency/read-write/consistency' },
      { text: '从库延迟处理', link: '/consistency/read-write/delay' },
      {
        text: '读写分离的最佳实践',
        link: '/consistency/read-write/best-practices',
      },
    ],
  },
  {
    text: '缓存一致性',
    link: '/consistency/cache/',
    items: [
      { text: 'Cache Aside 模式', link: '/consistency/cache/cache-aside' },
      {
        text: 'Read Through 与 Write Through',
        link: '/consistency/cache/read-write-through',
      },
      { text: 'Write Behind 模式', link: '/consistency/cache/write-behind' },
      { text: '缓存双写问题', link: '/consistency/cache/double-write' },
    ],
  },
  {
    text: '分布式事务',
    link: '/consistency/distributed-tx/',
    items: [
      {
        text: '分布式事务的挑战',
        link: '/consistency/distributed-tx/challenges',
      },
      { text: 'TCC 模式', link: '/consistency/distributed-tx/tcc' },
      { text: '本地消息表', link: '/consistency/distributed-tx/local-message' },
      {
        text: '事务消息',
        link: '/consistency/distributed-tx/transaction-message',
      },
    ],
  },
];
