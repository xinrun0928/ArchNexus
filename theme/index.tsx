import { Layout as BasicLayout } from '@rspress/core/theme-original';
import { TechStackButton } from './components/TechStackButton';

const Layout = () => (
  <BasicLayout
    /* 导航栏 Logo 左侧区域 */
    beforeNavTitle={<TechStackButton />}
  />
);

export { Layout };
export * from '@rspress/core/theme-original';
