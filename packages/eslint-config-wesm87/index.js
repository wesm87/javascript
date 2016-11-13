module.exports = {
  extends: [
    'eslint-config-wesm87-base',
    'eslint-config-wesm87-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
