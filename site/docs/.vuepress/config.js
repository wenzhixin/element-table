module.exports = {
  title: 'Element Table',
  description: 'An extended table to integration with bootstrap-table and element-ui.',
  themeConfig: {
    repo: 'wenzhixin/element-table',
    editLinks: true,
    docsDir: 'site/docs',
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Bootstrap Table', link: 'https://bootstrap-table.com' }
    ],
    sidebar: {
      '/docs/': [
        '',
        'component'
      ],
      '/examples/': false
    }
  }
}
