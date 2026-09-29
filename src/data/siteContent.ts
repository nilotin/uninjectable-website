export const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Modules', href: '#modules' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export const problems = [
  {
    title: 'Ambiguous Capability Identity',
    description:
      "Tool names and raw requests don't always express the exact business capability, authority, and effect an agent is really invoking.",
    icon: 'problem-icons/visibility.png',
  },
  {
    title: 'Stateless Guardrails',
    description:
      'Single-action checks miss previous actions, cumulative limits, session state, sequence, and prior reviews.',
    icon: 'problem-icons/policy.png',
  },
  {
    title: 'Execution Is Not Outcome',
    description:
      'A successful request only proves a call returned. It does not prove the intended business effect actually occurred.',
    icon: 'problem-icons/auditability.png',
  },
  {
    title: 'Probabilistic Control Loops',
    description:
      'When probabilistic agents can change real systems, final execution authority needs explicit, reproducible policy — not another opaque judgment.',
    icon: 'problem-icons/actions.png',
  },
]

export const capabilities = [
  {
    title: 'Resolve',
    description:
      'Resolve attempted actions into canonical capability identities with relevant authority and context.',
    icon: 'solution-icons/observe.png',
  },
  {
    title: 'Enforce',
    description:
      'Apply deterministic, stateful policy using session history, sequence, cumulative effects, and review state.',
    icon: 'solution-icons/control.png',
  },
  {
    title: 'Verify',
    description:
      'Define expected effects with EffectSpec and reconcile authoritative state after dispatch.',
    icon: 'solution-icons/evaluate.png',
  },
  {
    title: 'Trace',
    description:
      'Preserve a causal provenance graph linking sources, actions, decisions, reviews, and outcomes.',
    icon: 'solution-icons/explain.png',
  },
]

export const workflowSteps = [
  'Agent reads data',
  'Agent attempts a capability',
  'Baleena resolves the capability',
  'Stateful policy decides',
  'Human reviews when required',
  'Effect is verified and settled',
]

export const useCases = [
  {
    title: 'Customer Support AI Agents',
    description:
      'Capability-level control over refunds, credits, account changes, and outbound customer messages before they execute.',
    icon: 'use-case-icons/support.png',
  },
  {
    title: 'IT / Cloud Operations',
    description:
      'Explicit, stateful policy before configuration changes, commands, deployments, and other operational actions.',
    icon: 'use-case-icons/cloud.png',
  },
  {
    title: 'Security Operations',
    description:
      'Authority checks, approval routing, and a verified execution trace for AI-assisted triage and response.',
    icon: 'use-case-icons/security.png',
  },
  {
    title: 'Internal Workflow Agents',
    description:
      'Stateful, cumulative constraints on agents that touch the CRM, email, tickets, and internal APIs.',
    icon: 'use-case-icons/workflow.png',
  },
]

export const productModules = [
  {
    title: 'Capability Resolver',
    shortTitle: 'Capability Resolve',
    code: 'CR',
    category: 'identity',
    badgeIcon: 'module-icons/chain.png',
    description:
      'Resolves agent/tool intent into a canonical capability identity and authority context before governance decisions are made.',
  },
  {
    title: 'Stateful Policy Engine',
    shortTitle: 'Stateful Policy',
    code: 'SPE',
    category: 'enforcement',
    badgeIcon: 'module-icons/shield.png',
    description:
      'Applies deterministic policy across session history, action sequence, cumulative effects, provenance, and previous review state.',
  },
  {
    title: 'Provenance Graph',
    shortTitle: 'Provenance Graph',
    code: 'PG',
    category: 'causal trace',
    badgeIcon: 'module-icons/nodes.svg',
    description:
      'Builds a causal graph connecting sources, agent actions, capabilities, decisions, reviews, execution, and observed outcomes.',
  },
  {
    title: 'Effect Verification',
    shortTitle: 'Effect Verify',
    code: 'EV',
    category: 'effect integrity',
    badgeIcon: 'module-icons/target-check.svg',
    description:
      'Uses EffectSpec to declare expected or permitted changes, then reconciles authoritative state to verify what actually happened.',
  },
  {
    title: 'Verifiable Remediation',
    shortTitle: 'Remediation',
    code: 'VR',
    category: 'recovery',
    badgeIcon: 'module-icons/retry.svg',
    description:
      'Returns explicit constraints for a compliant fresh retry and verifies required evidence before execution continues.',
  },
  {
    title: 'Review-Guided Policy Suggestions',
    shortTitle: 'Policy Suggestions',
    code: 'RPS',
    category: 'governance feedback',
    badgeIcon: 'module-icons/checklist.svg',
    description:
      'Uses repeated human-review outcomes to surface candidate explicit policies without silently changing enforcement behavior.',
  },
]

export const deploymentOptions = [
  {
    title: 'Baleena Cloud',
    description:
      'A managed platform for teams that want fast onboarding, automatic updates, and minimal infrastructure work.',
    icon: 'deployment-icons/cloud.png',
  },
  {
    title: 'Private Cloud',
    description:
      'A dedicated environment for organizations that require stronger isolation and enterprise deployment control.',
    icon: 'deployment-icons/private-cloud.png',
  },
  {
    title: 'On-Prem / Self-Hosted',
    description:
      'For regulated teams that need to keep infrastructure, data, and governance workflows inside their own environment.',
    icon: 'deployment-icons/server.png',
  },
]

export const differentiators = [
  {
    title: 'Capability-level governance',
    description:
      'Control every important agent capability, not just conversations or system logs.',
  },
  {
    title: 'Deterministic, stateful policy',
    description:
      'Use explicit, reproducible policy over session state and sequence for allow, review, and block decisions — not LLM judgment alone.',
  },
  {
    title: 'Verifiable causal trail',
    description:
      'See why an action was allowed, reviewed, or blocked, and verify what actually changed once it executed.',
  },
]

export const teamMembers = [
  {
    name: 'Yavuz Selim Yaşar',
    role: 'CEO',
    image: 'team/yavuz.jpg',
    linkedin: 'https://www.linkedin.com/in/yavuz-selim-yaşar-622a2324a/',
    description:
      'Leads company strategy, partnerships, customer discovery, and business development.',
  },
  {
    name: 'Birdem Üstündağ',
    role: 'CTO',
    image: 'team/birdem.jpg',
    linkedin: 'https://www.linkedin.com/in/birdem-üstündağ-a9741a354/',
    description:
      'Leads product architecture, backend, SDK, runtime enforcement, policy infrastructure, and technical validation.',
  },
  {
    name: 'Nilsu Demirağ',
    role: 'COO',
    image: 'team/nilsu.jpg',
    linkedin: 'https://www.linkedin.com/in/nilsu-demira%C4%9F-62aa8925a/',
    description:
      'Leads operations, customer validation, project coordination, pilot process management, and product design direction.',
  },
  {
    name: 'Cansın İsmail Bahçeci',
    role: 'CBO',
    image: 'team/cansin.jpg',
    linkedin: 'https://www.linkedin.com/in/cansın-ismail-bahçeci-81b6a42a3/',
    description:
      'Leads business strategy, commercial partnerships, customer development, and go-to-market positioning.',
  },
  {
    name: 'Arif Emre Kılıç',
    role: 'CFO',
    image: 'team/arif.jpg',
    linkedin: 'https://www.linkedin.com/in/arif-emre-kılıç-2552bb2a5/',
    description:
      'Leads financial planning, budgeting, pricing analysis, investor reporting, and financial operations.',
  },
]
