import { distributedTheorySidebar } from './sidebar/distributed-theory';
import { patternsSidebar } from './sidebar/patterns';
import { systemDesignSidebar } from './sidebar/system-design';
import { performanceJvmSidebar } from './sidebar/performance-jvm';
import { resilienceSidebar } from './sidebar/resilience';
import { observabilitySidebar } from './sidebar/observability';
import { cloudNativeSidebar } from './sidebar/cloud-native';
import { securitySidebar } from './sidebar/security';
import { evolutionCasesSidebar } from './sidebar/evolution-cases';

export const sidebar = {
  '/distributed-theory/': distributedTheorySidebar,
  '/patterns/': patternsSidebar,
  '/system-design/': systemDesignSidebar,
  '/performance-jvm/': performanceJvmSidebar,
  '/resilience/': resilienceSidebar,
  '/observability/': observabilitySidebar,
  '/cloud-native/': cloudNativeSidebar,
  '/security/': securitySidebar,
  '/evolution-cases/': evolutionCasesSidebar,
};
