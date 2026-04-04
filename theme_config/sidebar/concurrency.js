export const concurrencySidebar = [
    {
        text: '并发控制',
        link: '/concurrency/theory/',
        items: [
            { text: '并发控制理论', link: '/concurrency/theory/basics' },
            { text: '乐观并发控制', link: '/concurrency/theory/optimistic' },
            { text: '悲观并发控制', link: '/concurrency/theory/pessimistic' },
            { text: '并发控制策略选择', link: '/concurrency/theory/selection' }
        ]
    },
    {
        text: '锁机制',
        link: '/concurrency/locking/',
        items: [
            { text: '锁的基本概念', link: '/concurrency/locking/basics' },
            { text: '互斥锁与读写锁', link: '/concurrency/locking/mutex-rwlock' },
            { text: '自旋锁与自适应锁', link: '/concurrency/locking/spin-adaptive' },
            { text: '可重入锁与公平锁', link: '/concurrency/locking/reentrant-fair' }
        ]
    },
    {
        text: '乐观与悲观锁',
        link: '/concurrency/optimistic-pessimistic/',
        items: [
            { text: '乐观锁的实现', link: '/concurrency/optimistic-pessimistic/optimistic' },
            { text: '悲观锁的实现', link: '/concurrency/optimistic-pessimistic/pessimistic' },
            { text: 'CAS 原理与 ABA 问题', link: '/concurrency/optimistic-pessimistic/cas-aba' },
            { text: '乐观锁与悲观锁的选择', link: '/concurrency/optimistic-pessimistic/selection' }
        ]
    },
    {
        text: '事务隔离',
        link: '/concurrency/isolation/',
        items: [
            { text: '事务隔离级别', link: '/concurrency/isolation/index' },
            { text: '脏读、不可重复读、幻读', link: '/concurrency/isolation/anomalies' },
            { text: 'MVCC 原理', link: '/concurrency/isolation/mvcc' },
            { text: '隔离级别选择', link: '/concurrency/isolation/selection' }
        ]
    },
    {
        text: '死锁处理',
        link: '/concurrency/deadlock/',
        items: [
            { text: '死锁的四个条件', link: '/concurrency/deadlock/conditions' },
            { text: '死锁预防策略', link: '/concurrency/deadlock/prevention' },
            { text: '死锁避免算法', link: '/concurrency/deadlock/avoidance' },
            { text: '死锁检测与恢复', link: '/concurrency/deadlock/detection' }
        ]
    },
    {
        text: '并发数据结构',
        link: '/concurrency/data-structures/',
        items: [
            { text: '并发队列', link: '/concurrency/data-structures/queue' },
            { text: '并发集合', link: '/concurrency/data-structures/collection' },
            { text: '原子类', link: '/concurrency/data-structures/atomic' },
            { text: 'CopyOnWrite 机制', link: '/concurrency/data-structures/copy-on-write' }
        ]
    }
];
