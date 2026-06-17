export const navItems = [
  'Product',
  'Use Cases',
  'How It Works',
  'Team',
  'Contact',
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