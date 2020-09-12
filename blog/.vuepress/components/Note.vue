<template>
  <div class='note'>
    <p> {{ data }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      data: String
    }
  }
</script>

<style lang="stylus" scoped>

  .note
    margin 20px
    background-color #ddeafd
    border-left 7px solid #3274d1
    border-radius 2px
    padding 0.25rem 0.5rem
    font-size 15px

</style>