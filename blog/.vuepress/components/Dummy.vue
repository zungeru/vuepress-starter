<template>
  <div class='container'>
    <h2 class='title'>{{$site.pages[2].frontmatter.title }}</h2>
    <p class='summary'>{{$site.pages[2].frontmatter.summary }}</p>
    
    <Meta date='24 Jan 2014' :tags='$site.pages[2].frontmatter.tags'/>
    <hr>
  </div>
</template>

<script>
  import Meta from './Meta.vue'
  export default {
    components: {
      Meta
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    margin-bottom 20px

  .title
    margin 0 10px 10px 10px
    font-family 'Noto Sans JP'
    font-size 20px
    line-height 1.30em
    letter-spacing 1px

  .summary
    margin 0 10px 15px 10px
    font-size 15px
    color #6d6c6c

  hr
    background-color #dadada
    border 0 none
    color #dadada
    height 1px

  @media only screen and (min-width: 801px)
    .container
      margin-right 125px
  
</style>