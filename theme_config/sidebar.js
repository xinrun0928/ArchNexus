import { principlesSidebar } from './sidebar/principles'
import { patternsSidebar } from './sidebar/patterns'
import { systemDesignSidebar } from './sidebar/system-design'
import { performanceSidebar } from './sidebar/performance'
import { availabilitySidebar } from './sidebar/availability'
import { consistencySidebar } from './sidebar/consistency'
import { concurrencySidebar } from './sidebar/concurrency'
import { evolutionSidebar } from './sidebar/evolution'
import { securitySidebar } from './sidebar/security'
import { analysisSidebar } from './sidebar/analysis'

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
}
