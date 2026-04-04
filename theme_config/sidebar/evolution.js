export const evolutionSidebar = [
    {
        text: '单体到微服务',
        link: '/evolution/monolith-to-microservices/',
        items: [
            { text: '单体架构的特点', link: '/evolution/monolith-to-microservices/monolith' },
            { text: '微服务架构的特点', link: '/evolution/monolith-to-microservices/microservices' },
            { text: '拆分的时机与方式', link: '/evolution/monolith-to-microservices/timing-method' },
            { text: '拆分后的挑战', link: '/evolution/monolith-to-microservices/challenges' }
        ]
    },
    {
        text: '服务拆分',
        link: '/evolution/service-decomposition/',
        items: [
            { text: '按业务拆分', link: '/evolution/service-decomposition/business' },
            { text: '按数据拆分', link: '/evolution/service-decomposition/data' },
            { text: '前后端分离', link: '/evolution/service-decomposition/frontend-backend' },
            { text: '服务粒度控制', link: '/evolution/service-decomposition/granularity' }
        ]
    },
    {
        text: '数据迁移',
        link: '/evolution/data-migration/',
        items: [
            { text: '数据迁移策略', link: '/evolution/data-migration/strategy' },
            { text: '双写方案', link: '/evolution/data-migration/dual-write' },
            { text: '数据校验', link: '/evolution/data-migration/validation' },
            { text: '迁移回滚', link: '/evolution/data-migration/rollback' }
        ]
    },
    {
        text: '架构选型',
        link: '/evolution/architecture-selection/',
        items: [
            { text: '选型原则', link: '/evolution/architecture-selection/principles' },
            { text: '技术栈选型', link: '/evolution/architecture-selection/tech-stack' },
            { text: '中间件选型', link: '/evolution/architecture-selection/middleware' },
            { text: '成本与效益分析', link: '/evolution/architecture-selection/cost-benefit' }
        ]
    },
    {
        text: '技术债务',
        link: '/evolution/technical-debt/',
        items: [
            { text: '技术债务的类型', link: '/evolution/technical-debt/types' },
            { text: '技术债务的度量', link: '/evolution/technical-debt/measurement' },
            { text: '技术债务的偿还', link: '/evolution/technical-debt/repayment' },
            { text: '预防技术债务', link: '/evolution/technical-debt/prevention' }
        ]
    }
];
