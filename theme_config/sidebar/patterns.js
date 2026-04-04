export const patternsSidebar = [
    {
        text: '创建型模式',
        link: '/patterns/creational/',
        items: [
            { text: '单例模式', link: '/patterns/creational/singleton' },
            { text: '工厂方法模式', link: '/patterns/creational/factory-method' },
            { text: '抽象工厂模式', link: '/patterns/creational/abstract-factory' },
            { text: '建造者模式', link: '/patterns/creational/builder' },
            { text: '原型模式', link: '/patterns/creational/prototype' }
        ]
    },
    {
        text: '结构型模式',
        link: '/patterns/structural/',
        items: [
            { text: '适配器模式', link: '/patterns/structural/adapter' },
            { text: '装饰器模式', link: '/patterns/structural/decorator' },
            { text: '代理模式', link: '/patterns/structural/proxy' },
            { text: '外观模式', link: '/patterns/structural/facade' },
            { text: '桥接模式', link: '/patterns/structural/bridge' },
            { text: '组合模式', link: '/patterns/structural/composite' },
            { text: '享元模式', link: '/patterns/structural/flyweight' }
        ]
    },
    {
        text: '行为型模式',
        link: '/patterns/behavioral/',
        items: [
            { text: '策略模式', link: '/patterns/behavioral/strategy' },
            { text: '观察者模式', link: '/patterns/behavioral/observer' },
            { text: '责任链模式', link: '/patterns/behavioral/chain-of-responsibility' },
            { text: '命令模式', link: '/patterns/behavioral/command' },
            { text: '模板方法模式', link: '/patterns/behavioral/template-method' },
            { text: '迭代器模式', link: '/patterns/behavioral/iterator' },
            { text: '状态模式', link: '/patterns/behavioral/state' },
            { text: '访问者模式', link: '/patterns/behavioral/visitor' },
            { text: '中介者模式', link: '/patterns/behavioral/mediator' },
            { text: '备忘录模式', link: '/patterns/behavioral/memento' },
            { text: '解释器模式', link: '/patterns/behavioral/interpreter' }
        ]
    },
    {
        text: '并发设计模式',
        link: '/patterns/concurrent/',
        items: [
            { text: '生产者-消费者模式', link: '/patterns/concurrent/producer-consumer' },
            { text: '读写锁模式', link: '/patterns/concurrent/read-write-lock' },
            { text: 'Future 模式', link: '/patterns/concurrent/future' },
            { text: 'Guarded Suspension 模式', link: '/patterns/concurrent/guarded-suspension' },
            { text: 'Balking 模式', link: '/patterns/concurrent/balking' }
        ]
    },
    {
        text: '分布式设计模式',
        link: '/patterns/distributed/',
        items: [
            { text: 'Saga 模式', link: '/patterns/distributed/saga' },
            { text: 'CQRS 模式', link: '/patterns/distributed/cqrs' },
            { text: '事件溯源模式', link: '/patterns/distributed/event-sourcing' },
            { text: 'Sidecar 模式', link: '/patterns/distributed/sidecar' },
            { text: 'Ambassador 模式', link: '/patterns/distributed/ambassador' }
        ]
    },
    {
        text: '架构模式',
        link: '/patterns/architectural/',
        items: [
            { text: '分层架构', link: '/patterns/architectural/layered' },
            { text: '六边形架构', link: '/patterns/architectural/hexagonal' },
            { text: '微内核架构', link: '/patterns/architectural/microkernel' },
            { text: '事件驱动架构', link: '/patterns/architectural/event-driven' },
            { text: 'CQRS 架构', link: '/patterns/architectural/cqrs' },
            { text: 'Serverless 架构', link: '/patterns/architectural/serverless' }
        ]
    }
];
