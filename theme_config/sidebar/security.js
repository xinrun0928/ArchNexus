export const securitySidebar = [
  {
    text: '认证与授权',
    link: '/security/auth/',
    items: [
      {
        text: '认证 vs 授权',
        link: '/security/auth/authentication-authorization',
      },
      { text: 'Session 认证', link: '/security/auth/session' },
      { text: 'JWT 认证', link: '/security/auth/jwt' },
      { text: 'RBAC 与 ABAC', link: '/security/auth/rbac-abac' },
    ],
  },
  {
    text: '加密解密',
    link: '/security/encryption/',
    items: [
      { text: '对称加密', link: '/security/encryption/symmetric' },
      { text: '非对称加密', link: '/security/encryption/asymmetric' },
      { text: '哈希算法', link: '/security/encryption/hash' },
      { text: '密钥管理', link: '/security/encryption/key-management' },
    ],
  },
  {
    text: '会话管理',
    link: '/security/session/',
    items: [
      { text: '会话劫持', link: '/security/session/hijacking' },
      { text: '会话固定攻击', link: '/security/session/fixation' },
      { text: 'CSRF 防护', link: '/security/session/csrf' },
      { text: '会话存储策略', link: '/security/session/storage' },
    ],
  },
  {
    text: 'OAuth 与 OpenID',
    link: '/security/oauth-openid/',
    items: [
      { text: 'OAuth 2.0 原理', link: '/security/oauth-openid/oauth2' },
      { text: 'OpenID Connect', link: '/security/oauth-openid/oidc' },
      { text: 'SSO 单点登录', link: '/security/oauth-openid/sso' },
      { text: 'OAuth 最佳实践', link: '/security/oauth-openid/best-practices' },
    ],
  },
  {
    text: '安全设计模式',
    link: '/security/patterns/',
    items: [
      { text: '防御者思维', link: '/security/patterns/defender-thinking' },
      { text: '最小权限原则', link: '/security/patterns/least-privilege' },
      { text: '纵深防御', link: '/security/patterns/defense-in-depth' },
      { text: '失效安全', link: '/security/patterns/fail-safe' },
    ],
  },
  {
    text: '防御深度',
    link: '/security/defense-in-depth/',
    items: [
      { text: '网络层防护', link: '/security/defense-in-depth/network' },
      { text: '应用层防护', link: '/security/defense-in-depth/application' },
      { text: '数据层防护', link: '/security/defense-in-depth/data' },
      { text: '安全监控与审计', link: '/security/defense-in-depth/monitoring' },
    ],
  },
];
