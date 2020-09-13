// async function is also supported, too

export default ({ Vue, siteData }) => {
  // ...apply enhancements to the app
  Vue.mixin({
    computed: {
      publishedPosts(){
        let publishedPosts = siteData.pages
          .filter(page => page.frontmatter.publish === 1)
          .sort((a,b) => b.frontmatter.created - a.frontmatter.created)

        return publishedPosts  

      }
    }
  })
}