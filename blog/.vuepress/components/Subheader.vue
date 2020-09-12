<template>
  <div class='subheader-container'>
    <h3>{{data}}</h3>
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
  .subheader-container
    border-bottom 1px solid #dadada
    margin-bottom 20px

  .subheader-container h3
    margin-bottom 5px
</style>