import { analysisSidebar } from './sidebar/analysis';
import { availabilitySidebar } from './sidebar/availability';
import { concurrencySidebar } from './sidebar/concurrency';
import { consistencySidebar } from './sidebar/consistency';
import { evolutionSidebar } from './sidebar/evolution';
import { patternsSidebar } from './sidebar/patterns';
import { performanceSidebar } from './sidebar/performance';
import { principlesSidebar } from './sidebar/principles';
import { securitySidebar } from './sidebar/security';
import { systemDesignSidebar } from './sidebar/system-design';

export const sidebar = {
  '/principles/': principlesSidebar,
  '/patterns/': patternsSidebar,
  '/system-design/': systemDesignSidebar,
  '/performance/': performanceSidebar,
  '/availability/': availabilitySidebar,
  '/consistency/': consistencySidebar,
  '/concurrency/': concurrencySidebar,
  '/evolution/': evolutionSidebar,
  '/security/': securitySidebar,
  '/analysis/': analysisSidebar,
};
