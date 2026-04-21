# 各分类文章要点

## 4.1 分布式理论

**Paxos/Raft 共识算法**：共识算法必要性；Leader选举、日志复制、安全性；线性一致性与Raft；常见误区（脑裂、Raft不是万能）；etcd/ZooKeeper/Consul选型。

**CAP 与 BASE**：CAP三选二与网络分区的真正关系；CP（ZooKeeper）vs AP（Eureka）；BASE放弃强一致性换可用性。

**分布式事务（2PC/3PC/TCC/Saga）**：2PC阻塞与协调者单点；3PC的改进与局限；TCC业务补偿；Saga长活事务编排；选型矩阵；Seata AT模式实战。

**一致性模型**：一致性光谱；线性一致性代价（ZooKeeper不是线性一致）；顺序/因果/最终一致性的关系与适用场景。

## 4.2 架构与设计模式

**微服务架构**：什么时候该用/不该用；六大核心模式；同步（REST/gRPC）vs 异步（MQ）；每个服务独立DB vs 共享DB；K8s服务治理 vs Spring Cloud。

**CQRS 与事件溯源**：读写耦合痛点；Command/Query分离；事件溯源配合；投影实现；什么时候不该用（过度设计的典型症状）。

**六边形架构与整洁架构**：依赖倒置；端口与适配器；整洁架构同心圆；与传统分层的对比。

## 4.3 系统设计核心

**缓存策略（穿透/击穿/雪崩）**：三个问题定义与真实案例；穿透→布隆过滤器；击穿→互斥锁/逻辑过期；雪崩→随机过期/多级缓存；缓存一致性（先删还是先更）；命中率监控。

**负载均衡**：四层（LVS）vs 七层（Nginx/HAProxy）；算法（轮询/加权/最小连接/一致性哈希）；一致性哈希虚拟节点与环迁移；GSLB；Nginx动态upstream。

**消息与流系统（Kafka/Pulsar/RabbitMQ）**：解耦/削峰/异步；三种队列模型；Kafka vs Pulsar选型；顺序保证代价；消费者组与重平衡。

## 4.4 性能与 JVM

**ZGC 深度剖析**：GC演化（Serial→Parallel→CMS→G1→ZGC）；染色指针、读屏障、并发整理；G1 vs ZGC百GB堆停顿对比；ZGC适用场景与陷阱（CPU开销、指针压缩）。

**Java 虚拟线程**：1:1线程模型痛点（C10K）；N:M映射与Continuation；结构化并发；迁移指南；synchronized陷阱与ReentrantLock优势。

**I/O 模型（BIO/NIO/AIO/Netty/零拷贝）**：五种I/O模型；select/poll/epoll/kqueue演进；Netty线程模型；零拷贝（DMA/mmap/sendfile）；ByteBuf泄漏陷阱。

## 4.5 高可用与容错

**熔断器模式**：灵感来源；三态转换；失败阈值/超时窗口/半开请求数配置；Resilience4j实战；与限流/降级/重试的配合；电商大促雪崩案例；Prometheus监控。

**限流算法**：四种算法对比（固定窗口/滑动窗口/漏桶/令牌桶）；令牌桶原理与Java实现；Redis+Lua分布式限流；Guava RateLimiter vs Sentinel；限流粒度（全局/单机/用户级）。

**SLO/SLI/错误预算**：三者区别；有效SLI定义（延迟/可用性/吞吐量）；错误预算（1-SLO）；预算耗尽冻结发布；Prometheus+Alertmanager实战。

## 4.6 可观测性

**OpenTelemetry**：三大支柱割裂问题；SDK/Collector/Exporter组件；Java Agent无侵入接入；手动Span创建；Trace与Log关联；Jaeger/Zipkin/Tempo选型；采样策略坑点。

**链路追踪与分布式上下文**：TraceID/SpanID生成与传播；Baggage vs Tag vs Span Attribute；尾部采样；TraceID串联日志；埋点性能开销。

## 4.7 云原生与基础设施

**Kubernetes Operator**：声明式API；CRD+Controller；Reconcile控制循环；Fabric8实现示例；Operator SDK vs KubeBuilder；Helm/Kustomize够用吗。

**Istio 服务网格**：Sidecar代理本质；流量管理/安全/mTLS/可观测性；VirtualService/DestinationRule配置；Sidecar性能代价；Linkerd/Istio/Consul对比。

## 4.8 安全架构

**零信任架构**：边界防御失效案例；三大原则（永不信任/最小权限/假设被攻破）；微隔离/IAP/SPA；JWT+mTLS实现；在K8s+Istio中落地；遗留系统改造挑战。

**OAuth 2.0 与 OIDC**：四种授权模式；OIDC解决认证问题；JWT结构；Spring Security+OAuth2实战；安全陷阱（授权码截获/CSRF/Redirect URI劫持）；Keycloak。

## 4.9 演进与实战

**绞杀者模式**：大爆炸重写失败原因；逐步替换策略（路由双写/功能开关）；Spring Cloud Gateway动态路由；金融系统演进案例；分布式事务/测试坑点。

**高并发秒杀**：热点商品/高并发写/库存扣减挑战；架构分层；Redis原子操作扣库存；MQ异步下单；分库分表；压测方法；双十一复盘。
