export const navItems = [
  {
    label: 'Product',
    href: '#product',
  },
  {
    label: 'Use Cases',
    href: '#use-cases',
  },
  {
    label: 'How It Works',
    href: '#how-it-works',
  },
  {
    label: 'Team',
    href: '#team',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export const problems = [
  {
    title: 'Lack of Visibility',
    description: "You can't secure or improve what you can't see.",
    icon: '◉',
  },
  {
    title: 'Uncontrolled Actions',
    description:
      "AI agents can access tools, data, and workflows in ways teams didn't intend.",
    icon: '⚠',
  },
  {
    title: 'Weak Auditability',
    description:
      'Without clear traces, compliance, debugging, and forensics become difficult.',
    icon: '⌁',
  },
  {
    title: 'Policy Gaps',
    description:
      'Generic monitoring tools do not understand action-level AI governance.',
    icon: '◇',
  },
]

export const capabilities = [
  {
    title: 'Observe',
    description:
      'Capture agent events including source reads, retrievals, tool calls, action attempts, and outcomes.',
    icon: '01',
  },
  {
    title: 'Evaluate',
    description:
      'Score every action using policy rules, source trust, action type, and contextual risk signals.',
    icon: '02',
  },
  {
    title: 'Control',
    description:
      'Allow, review, or block AI actions using deterministic policy checks and human approval workflows.',
    icon: '03',
  },
  {
    title: 'Explain',
    description:
      'Provide human-readable explanations and complete audit trails for every agent decision.',
    icon: '04',
  },
]

export const workflowSteps = [
  'Agent reads data',
  'Agent calls a tool',
  'Uninjectable scores the action',
  'Policy decides',
  'Human reviews when needed',
  'Audit trail is stored',
]

export const useCases = [
  {
    title: 'Customer Support AI Agents',
    description:
      'Review refunds, credits, account changes, escalations, and customer-facing messages before execution.',
    icon: 'CS',
  },
  {
    title: 'IT / Cloud Operations',
    description:
      'Govern infrastructure changes, incident workflows, and operational commands triggered by AI agents.',
    icon: 'IT',
  },
  {
    title: 'Security Operations',
    description:
      'Add approval and traceability to AI-assisted triage, alert handling, and response workflows.',
    icon: 'SO',
  },
  {
    title: 'Internal Workflow Agents',
    description:
      'Control agents that update CRM records, send emails, modify tickets, or interact with internal tools.',
    icon: 'WF',
  },
]

export const deploymentOptions = [
  {
    title: 'Uninjectable Cloud',
    description:
      'A managed platform for teams that want fast onboarding, automatic updates, and minimal infrastructure work.',
    icon: '☁',
  },
  {
    title: 'Private Cloud',
    description:
      'A dedicated environment for organizations that require stronger isolation and enterprise deployment control.',
    icon: '◇',
  },
  {
    title: 'On-Prem / Self-Hosted',
    description:
      'For regulated teams that need to keep infrastructure, data, and governance workflows inside their own environment.',
    icon: '▣',
  },
]

export const differentiators = [
  {
    title: 'Action-level governance',
    description:
      'Control every important agent action, not just conversations or system logs.',
  },
  {
    title: 'Deterministic policy decisions',
    description:
      'Use explicit policy checks for allow, review, and block decisions instead of relying only on LLM judgment.',
  },
  {
    title: 'Explainable audit trail',
    description:
      'Understand why an action was allowed, reviewed, or blocked with complete decision context.',
  },
]

export const teamMembers = [
  {
    name: 'Yavuz Selim Yaşar',
    role: 'CEO',
    description:
      'Leads company strategy, partnerships, customer discovery, and business development.',
  },
  {
    name: 'Birdem Üstündağ',
    role: 'CTO',
    description:
      'Leads product architecture, backend, SDK, risk engine, policy infrastructure, and technical validation.',
  },
  {
    name: 'Nilsu Demirağ',
    role: 'COO',
    description:
      'Leads operations, customer validation, project coordination, and pilot process management.',
  },
]