export const principlesSidebar = [
  {
    text: 'CAP 与 BASE 理论',
    link: '/principles/cap-base/',
    items: [
      { text: 'CAP 定理详解', link: '/principles/cap-base/cap-theorem' },
      { text: 'BASE 理论', link: '/principles/cap-base/base-theory' },
      {
        text: 'CAP 与 BASE 的权衡',
        link: '/principles/cap-base/cap-base-tradeoff',
      },
    ],
  },
  {
    text: '一致性模型',
    link: '/principles/consistency/',
    items: [
      { text: '强一致性', link: '/principles/consistency/strong' },
      { text: '弱一致性', link: '/principles/consistency/weak' },
      { text: '最终一致性', link: '/principles/consistency/eventual' },
      { text: '因果一致性', link: '/principles/consistency/causal' },
    ],
  },
  {
    text: '分布式算法',
    link: '/principles/algorithms/',
    items: [
      { text: '分布式选举算法', link: '/principles/algorithms/election' },
      { text: '分布式共识算法', link: '/principles/algorithms/consensus' },
      { text: '一致性哈希', link: '/principles/algorithms/consistent-hashing' },
      { text: '向量时钟', link: '/principles/algorithms/vector-clock' },
    ],
  },
  {
    text: 'Paxos 与 Raft',
    link: '/principles/consensus/',
    items: [
      { text: 'Paxos 算法详解', link: '/principles/consensus/paxos' },
      { text: 'Raft 算法详解', link: '/principles/consensus/raft' },
      { text: 'Paxos vs Raft 对比', link: '/principles/consensus/comparison' },
    ],
  },
  {
    text: 'Gossip 协议',
    link: '/principles/gossip/',
    items: [
      { text: 'Gossip 协议原理', link: '/principles/gossip/principle' },
      { text: 'Gossip 的三种模式', link: '/principles/gossip/modes' },
      { text: 'Gossip 的应用场景', link: '/principles/gossip/scenarios' },
    ],
  },
  {
    text: '两阶段与三阶段提交',
    link: '/principles/2pc-3pc/',
    items: [
      { text: '两阶段提交 (2PC)', link: '/principles/2pc-3pc/2pc' },
      { text: '三阶段提交 (3PC)', link: '/principles/2pc-3pc/3pc' },
      { text: '2PC vs 3PC 对比', link: '/principles/2pc-3pc/comparison' },
    ],
  },
  {
    text: '幂等性理论',
    link: '/principles/idempotency/',
    items: [
      { text: '幂等性的定义', link: '/principles/idempotency/definition' },
      {
        text: '如何实现幂等性',
        link: '/principles/idempotency/implementation',
      },
      {
        text: '常见场景的幂等性设计',
        link: '/principles/idempotency/scenarios',
      },
    ],
  },
];
