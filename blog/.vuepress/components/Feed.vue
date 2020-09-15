<template>
  <div>
    <h1 class='summary-header'>Hi Bish</h1>

    <div class='summary-container'>
      <Summary
        v-for='(post, index) in visbilePosts'
        :key='index'
        :data='post'/>
    </div>

    <div class='summary-pagination'>
      <p>Pagination Goes Here</p>
    </div>

    
  </div>
  
</template>

<script>
  import Summary from './Summary.vue'
  export default {
    data () {
      return {
        currentPage: 0,
        pageSize: 5
      }
    },
    computed: {
      visbilePosts () {
        let posts = this.publishedPosts.slice(
          this.currentPage * this.pageSize, 
          this.currentPage * this.pageSize + this.pageSize
        )
        return posts
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>