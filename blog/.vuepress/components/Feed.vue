<template>
  <div>
    <h1 class='header'>Hi Bish</h1>

      <Summary
        v-for='(post, index) in visbilePosts'
        :key='index'
        :data='post'/>

    <div class='pagination'>
       <span class='nav nav-lt' @click='decIndex'>&lt;&lt;</span>
       <span class='page-info curPage'>{{ pageIndex + 1}}</span>
       <span class='page-info'>of</span>
       <span class='page-info'>{{ Math.round(publishedPosts.length / pageSize )}}</span>
       <span class='nav nav-gt' @click='incIndex'>&gt;&gt;</span>
    </div>
  </div>
  
</template>

<script>
  import Summary from './Summary.vue'
  export default {
    data () {
      return {
        pageIndex: 0,
        pageSize: 5
      }
    },
    methods: {
      incIndex () {
        if (this.pageIndex + 1  === (Math.round(this.publishedPosts.length / this.pageSize ))) {
          return
        }
        this.pageIndex++
      },
      decIndex() {
        if (this.pageIndex === 0 ){
          return
        }
        this.pageIndex--
      }
    },
    computed: {
      visbilePosts () {
        let posts = this.publishedPosts.slice(
          this.pageIndex * this.pageSize, 
          this.pageIndex * this.pageSize + this.pageSize
        )
        return posts
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .pagination
    color #999999
    font-size 24px
    margin 25px auto
    width 155px
  
  .nav
    cursor pointer

  .nav-lt
    padding-right 15px
    
  .nav-gt
    padding-left 15px

  .page-info
    font-size 20px

  .curPage
    color #066DC7

  @media only screen and (min-width: 801px)
    // The pagination centering is off in desktop view
    // This is a hack solution as I'm too tired to debug
    .pagination
      padding-right 80px
  
</style>