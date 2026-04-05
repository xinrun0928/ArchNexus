import { Layout as BasicLayout } from '@rspress/core/theme-original';
import { NavTitle } from './components/NavTitle';
import { TechStackButton } from './components/TechStackButton';

const Layout = () => <BasicLayout beforeNavTitle={<TechStackButton />} />;

export { Layout, NavTitle };
export * from '@rspress/core/theme-original';
