<template>
  <div class='container'>
    <h2 class='title'>Intro to VuePress Blog Theme and Plugin With the Goal Of Increasing the Length</h2>
    <p class='summary'>
      I am just checking this component out for now. How is everything going? But what is love
      baby don't hurt me no more. I don't know, what is love. I gave me my all but I don't care. 
      Whoa, whoa, whoa, whhoa...take you very much!!!!
    </p>
    <div class='date-container'>
      <div class='date-image'>
        <img src='../public/calendar.png'>
      </div>
      <div class='date-item'>24 JAN 2020</div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  .container
    margin-bottom 15px

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

  .date-container
    margin 0 10px 15px 10px
    display flex
    width 105px

  .date-image
    flex 1
    width 13px

  .date-item
    margin-top -2px
    font-size 13px
    color #0F56BF

  hr
    background-color #dadada
    border 0 none
    color #dadada
    height 1px
  
</style>