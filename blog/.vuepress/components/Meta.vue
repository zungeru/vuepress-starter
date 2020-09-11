<template>
  <div class="container">
    <div class='date-container'>
      <div class='date-image'>
        <img src='../public/calendar.png'>
      </div>
      <div class='date-item'>{{ date }}</div>
    </div>
    <div class='tags-container'>
      <div class='tags-image'>
        <img src='../public/info.png'>
      </div>
      <div class='tag-item' v-for='(tag, index) in tags'>
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      date: String,
      tags: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    display flex
    justify-content: flex-start;
    color #999999
    // background-color yellow

  .date-container
    margin 10px 25px 10px 10px
    display flex
    width 105px
    // background-color green

  .date-image
    flex 1
    width 10px

  .date-item
    margin-top -2px
    font-size 13px

  .tags-container
    margin 8px 20px 10px 10px
    display flex

  .tags-image
    flex 1
    width 10px
    margin-right 15px

  .tag-item
    display inline-block
    margin-top -2px
    padding-right 8px
    font-size 14px

</style>