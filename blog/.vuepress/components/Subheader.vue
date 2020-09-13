<template>
  <div class='subheader-container'>
    <h2>{{data}}</h2>
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

  .subheader-container h2
    margin-bottom 5px
</style>