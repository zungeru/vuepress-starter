<template>
  <div>
    <header id='header'>
      <div class='header-container'>
          <img class='logo' src='../public/logo3.png'>
      </div>
    </header>

    <div class='blog-body'>
      <div class='left-fixed'>
        <img class='ad' src='../public/tech.jpeg'>
      </div>
      <div class='right-flexed'>
        <Content/>
      </div>
    </div>
    
    
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 18px;
  line-height: 1.6em;

  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: #444549;

  background-color: #F6F6F6;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.header-anchor {
  display: none;
}
  
 #header {
  background-color: #fff;
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
  display: block;
  /*transition: top 0.9s;  Transition effect when sliding down (and up) */
  box-shadow: 0 5px 5px -5px rgba(0,0,0,0.2);
  z-index: 5;
}

.header-container {
  display: flex;
  margin: 5px auto 5px auto;
  max-width: 2048px;
}

.logo {
  display: block;
  width: 175px;
  margin: 5px 20px;
}

.blog-body {
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1250px;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
}

.left-fixed {
  /* width: 175px; */
  height: 75px;
  background: lightgreen;
  text-align: center;
  padding: 15px;
}

.right-flexed {
  flex: 1;
  background: rgb(230, 203, 173);
  padding: 20px;
}

@media only screen and (min-width: 501px) {

  .blog-body {
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1250px;
    background-color: lightblue;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 5px;
  }

  .left-fixed {
    width: 200px;
    height: 200px;
    background: lightgreen;
    padding: 15px;
  }
  .right-flexed {
    flex: 1;
    background: rgb(230, 203, 173);
    padding: 20px;
  }

  .ad {
  width: 150px;
  height: 150px;
  margin: auto;
  
}

}

</style>