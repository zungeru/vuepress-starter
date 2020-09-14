module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    //- Define your variables here
    author: 'Mido eXa',
    foo: 'bar'
  }
}