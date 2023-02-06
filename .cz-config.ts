module.exports = {
  types: [
    { value: ':sparkles: feat', name: '✨ feat:\tAdding a new feature' },
    { value: ':bug: fix', name: '🐛 fix:\tFixing a bug' },
    { value: ':construction: wip', name: '🚧 wip:\tWork in progress' },
    {
      value: ':lipstick: style',
      name: '💄 style:\tAdd or update styles, ui or ux',
    },
    {
      value: ':hammer: refactor',
      name: '🔨 refactor:\tCode change that neither fixes a bug nor adds a feature',
    },

    { value: ':memo: docs', name: '📝 docs:\tAdd or update documentation' },
    {
      value: ':zap: perf',
      name: '⚡️ perf:\tCode change that improves performance',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test:\tAdding tests cases',
    },
    { value: ':rewind: revert', name: '⏪️ revert:\tRevert to a commit' },
    {
      value: ':construction_worker: build',
      name: '👷 build:\tAdd or update regards to build process',
    },
    {
      value: ':racehorse: ci',
      name: '🐎 ci:\tAdd or update regards to CI process',
    },
  ],

  scopes: [
    { name: 'all platforms' },
    { name: 'desktop' },
    { name: 'mobile' },
    { name: 'packages' },
    { name: 'unit test' },
    { name: 'settings' },
    { name: 'code convention' },
  ],

  messages: {
    type: "***************** 🎼🎧🎉 Select the type of change that you're committing *****************:",
    scope: '\n😪 Denote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: '🎁 Denote the SCOPE of this change:',
    subject: '🔖 Subject - Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: '📝 Body - Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: '💥 List any BREAKING CHANGES (optional):\n',
    footer: '🔚 List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: '😄 Are you sure you want to proceed with the commit above?',
  },

  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'hotfix' }],
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: [],
  subjectLimit: 100,
}
