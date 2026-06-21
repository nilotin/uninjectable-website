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
    title: 'Lack of Visibility',
    description: "You can't secure or improve what you can't see.",
    icon: 'problem-icons/visibility.png',
  },
  {
    title: 'Uncontrolled Actions',
    description:
      "AI agents can access tools, data, and workflows in ways teams didn't intend.",
    icon: 'problem-icons/actions.png',
  },
  {
    title: 'Weak Auditability',
    description:
      'Without clear traces, compliance, debugging, and forensics become difficult.',
    icon: 'problem-icons/auditability.png',
  },
  {
    title: 'Policy Gaps',
    description:
      'Generic monitoring tools do not understand action-level AI governance.',
    icon: 'problem-icons/policy.png',
  },
]

export const capabilities = [
  {
    title: 'Observe',
    description:
      'Capture agent events including source reads, retrievals, tool calls, action attempts, and outcomes.',
    icon: 'solution-icons/observe.png',
  },
  {
    title: 'Evaluate',
    description:
      'Score every action using policy rules, source trust, action type, and contextual risk signals.',
    icon: 'solution-icons/evaluate.png',
  },
  {
    title: 'Control',
    description:
      'Allow, review, or block AI actions using deterministic policy checks and human approval workflows.',
    icon: 'solution-icons/control.png',
  },
  {
    title: 'Explain',
    description:
      'Provide human-readable explanations and complete audit trails for every agent decision.',
    icon: 'solution-icons/explain.png',
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
    icon: 'use-case-icons/support.png',
  },
  {
    title: 'IT / Cloud Operations',
    description:
      'Govern infrastructure changes, incident workflows, and operational commands triggered by AI agents.',
    icon: 'use-case-icons/cloud.png',
  },
  {
    title: 'Security Operations',
    description:
      'Add approval and traceability to AI-assisted triage, alert handling, and response workflows.',
    icon: 'use-case-icons/security.png',
  },
  {
    title: 'Internal Workflow Agents',
    description:
      'Control agents that update CRM records, send emails, modify tickets, or interact with internal tools.',
    icon: 'use-case-icons/workflow.png',
  },
]

export const productModules = [
  {
    title: 'Shadow Agent Discovery',
    shortTitle: 'Shadow Discovery',
    code: 'SAD',
    category: 'Visibility',
    description:
      'Makes AI agents, automations, tool usage flows, and uncontrolled agent behavior visible across the organization.',
  },
  {
    title: 'Agent Studio',
    shortTitle: 'Agent Studio',
    code: 'AS',
    category: 'Build',
    description:
      'Provides secure templates, scaffold structures, and governance-ready starting flows for enterprise agent use cases.',
  },
  {
    title: 'Runtime Policy Engine',
    shortTitle: 'Policy Engine',
    code: 'RPE',
    category: 'Control',
    description:
      'Evaluates agent actions in real time through deterministic policy rules and produces allow, review, or block decisions.',
  },
  {
    title: 'Why Chain',
    shortTitle: 'Why Chain',
    code: 'WC',
    category: 'Explainability',
    description:
      'Creates a traceable decision chain that explains why each risk score, policy decision, and agent action occurred.',
  },
  {
    title: 'Deterministic DLP',
    shortTitle: 'DLP',
    code: 'DLP',
    category: 'Security',
    description:
      'Detects sensitive data leakage risks through deterministic controls and monitors PII, customer data, financial data, and confidential content flows.',
  },
  {
    title: 'Usage & Cost Observability',
    shortTitle: 'Usage Observability',
    code: 'UCO',
    category: 'Observability',
    description:
      'Makes agent usage volume, tool calls, action counts, and cost impact visible across teams and workflows.',
  },
  {
    title: 'Usage Budgets',
    shortTitle: 'Usage Budgets',
    code: 'UB',
    category: 'Cost Control',
    description:
      'Defines usage limits by agent, team, customer, or workflow and helps control budget overrun risks early.',
  },
  {
    title: 'Notification Outbox',
    shortTitle: 'Notification Outbox',
    code: 'NO',
    category: 'Alerts',
    description:
      'Provides a centralized notification queue for risky actions, policy violations, review-required events, and system alerts.',
  },
  {
    title: 'Channel Configuration',
    shortTitle: 'Channels',
    code: 'CC',
    category: 'Configuration',
    description:
      'Enables notification channels such as Slack, email, webhook, or dashboard to be configured according to enterprise needs.',
  },
  {
    title: 'Run Ledger',
    shortTitle: 'Run Ledger',
    code: 'RL',
    category: 'Audit',
    description:
      'Maintains an auditable ledger of agent sessions, tool calls, action attempts, action results, and approval flows.',
  },
  {
    title: 'Soft Undo Receipts',
    shortTitle: 'Undo Receipts',
    code: 'SUR',
    category: 'Safety',
    description:
      'Generates undo receipts for reversible or compensable agent actions, supporting operational safety and accountability.',
  },
  {
    title: 'Adaptive Policy Learning',
    shortTitle: 'Policy Learning',
    code: 'APL',
    category: 'Improvement',
    description:
      'Uses policy decisions, review outcomes, and human approvals to support continuous improvement of governance rules over time.',
  },
  {
    title: 'MCP Governance Posture',
    shortTitle: 'MCP Posture',
    code: 'MCP',
    category: 'Posture',
    description:
      'Assesses MCP servers, tools, and connectors from the perspective of security, access, data flow, and policy compliance.',
  },
  {
    title: 'Red-Team Scenario Validation',
    shortTitle: 'Red-Team Validation',
    code: 'RTV',
    category: 'Validation',
    description:
      'Tests agent security against scenarios such as prompt injection, data exfiltration, unauthorized actions, and policy bypass attempts.',
  },
  {
    title: 'Dashboard & Control Center',
    shortTitle: 'Control Center',
    code: 'DCC',
    category: 'Dashboard',
    description:
      'Provides a centralized control panel for risk scores, agent activity, policy decisions, usage metrics, and review workflows.',
  },
  {
    title: 'Broker Pilot Hardening',
    shortTitle: 'Pilot Hardening',
    code: 'BPH',
    category: 'Pilot',
    description:
      'Strengthens logging, policy tuning, review flows, and production-readiness controls for real-world pilot customer scenarios.',
  },
]

export const deploymentOptions = [
  {
    title: 'Uninjectable Cloud',
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
    image: 'team/yavuz.png',
    linkedin: 'https://www.linkedin.com/in/yavuz-selim-yaşar-622a2324a/',
    description:
      'Leads company strategy, partnerships, customer discovery, and business development.',
  },
  {
    name: 'Birdem Üstündağ',
    role: 'CTO',
    image: 'team/birdem.png',
    linkedin: 'https://www.linkedin.com/in/birdem-üstündağ-a9741a354/',
    description:
      'Leads product architecture, backend, SDK, risk engine, policy infrastructure, and technical validation.',
  },
  {
    name: 'Nilsu Demirağ',
    role: 'COO',
    image: 'team/nilsu.png',
    linkedin: 'https://www.linkedin.com/in/nilsu-demirağ-62aa8925a/',
    description:
      'Leads operations, customer validation, project coordination, and pilot process management.',
  },
  {
    name: 'Cansın İsmail Bahçeci',
    role: 'CBO',
    image: 'team/cansin.png',
    linkedin: 'https://www.linkedin.com/in/cansın-ismail-bahçeci-81b6a42a3/',
    description:
      'Leads business strategy, commercial partnerships, customer development, and go-to-market positioning.',
  },
  {
    name: 'Arif Emre Kılıç',
    role: 'CFO',
    image: 'team/arif.png',
    linkedin: 'https://www.linkedin.com/in/arif-emre-kılıç-2552bb2a5/',
    description:
      'Leads financial planning, budgeting, pricing analysis, investor reporting, and financial operations.',
  },
]