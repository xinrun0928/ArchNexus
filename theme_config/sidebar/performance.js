export const performanceSidebar = [
    {
        text: '性能指标',
        link: '/performance/metrics/',
        items: [
            { text: 'QPS、TPS、并发数', link: '/performance/metrics/qps-tps' },
            { text: '延迟与响应时间', link: '/performance/metrics/latency' },
            { text: '吞吐量与带宽', link: '/performance/metrics/throughput' },
            { text: '资源利用率', link: '/performance/metrics/utilization' }
        ]
    },
    {
        text: '延迟分析',
        link: '/performance/latency/',
        items: [
            { text: '延迟的来源', link: '/performance/latency/sources' },
            { text: '长尾延迟问题', link: '/performance/latency/tail-latency' },
            { text: '延迟分析方法', link: '/performance/latency/analysis' },
            { text: '延迟优化策略', link: '/performance/latency/optimization' }
        ]
    },
    {
        text: '吞吐量优化',
        link: '/performance/throughput/',
        items: [
            { text: '吞吐量瓶颈分析', link: '/performance/throughput/bottleneck' },
            { text: '连接池优化', link: '/performance/throughput/connection-pool' },
            { text: '批处理优化', link: '/performance/throughput/batching' },
            { text: '异步化处理', link: '/performance/throughput/asynchronous' }
        ]
    },
    {
        text: '并发模型',
        link: '/performance/concurrency-models/',
        items: [
            { text: '线程 vs 协程 vs 异步', link: '/performance/concurrency-models/comparison' },
            { text: '多线程模型', link: '/performance/concurrency-models/multi-threaded' },
            { text: '事件驱动模型', link: '/performance/concurrency-models/event-driven' },
            { text: 'Actor 模型', link: '/performance/concurrency-models/actor' }
        ]
    },
    {
        text: '内存管理',
        link: '/performance/memory/',
        items: [
            { text: '内存分配策略', link: '/performance/memory/allocation' },
            { text: '垃圾回收原理', link: '/performance/memory/gc' },
            { text: '内存泄漏排查', link: '/performance/memory/leak' },
            { text: '对象池技术', link: '/performance/memory/object-pool' }
        ]
    },
    {
        text: 'I/O 模型',
        link: '/performance/io-models/',
        items: [
            { text: 'BIO、NIO、AIO 对比', link: '/performance/io-models/comparison' },
            { text: 'I/O 多路复用', link: '/performance/io-models/multiplexing' },
            { text: '零拷贝技术', link: '/performance/io-models/zero-copy' },
            { text: 'Direct Buffer', link: '/performance/io-models/direct-buffer' }
        ]
    },
    {
        text: 'JIT 编译',
        link: '/performance/jit/',
        items: [
            { text: 'JIT 编译原理', link: '/performance/jit/principle' },
            { text: 'C1 与 C2 编译器', link: '/performance/jit/c1-c2' },
            { text: '分层编译策略', link: '/performance/jit/tiered' },
            { text: 'JIT 优化技巧', link: '/performance/jit/optimization' }
        ]
    }
];
