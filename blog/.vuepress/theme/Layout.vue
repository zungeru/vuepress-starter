<template>
  <div>
    <header id='header'>
      <div class='header-container'>
        <router-link to='/'>
          <img class='logo' src='../public/logo3.png'>
        </router-link>
        <div class='header-items'>
          <router-link to='/'>
            <img class='header-info' src='../public/layer.png'>
          </router-link>
          <SearchBox/>
        </div>
      </div>
    </header>

    <div class='wrapper'>
      <div class='sidebar'>
        <img v-if='width > 800' class='sidebar-item' src='../public/tech.jpeg'>
        <img  v-else class='sidebar-item' src='../public/banner.png'>
      </div>
      <div class='main'>
        <Content/>
      </div>
    </div>
  
  </div>
</template>

<script>
import SearchBox from '@SearchBox'
export default {
  data() {
    return {
      width: window.innerWidth
    }
  },
  components: { SearchBox },
  methods: {
    getWidth () {
      this.width = window.innerWidth;
    }
  },
  created() {
    window.addEventListener('resize', this.getWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.getWidth);
  }
}

</script>

<style>


 
</style>