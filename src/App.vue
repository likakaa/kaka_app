<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> 
      <router-link to="/wallpaper">壁纸</router-link> 
      <router-link to="/emoticons">图片</router-link> 
      <router-link to="/avatar">头像</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 // text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
 height: 44px;
  a {
    display: block;
    height: 44px;
    line-height: 44px;
    width: 25%;
    text-align: center;
    font-size:16px;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      border-bottom: 2px solid #42b983;
    }
  }
}
</style>
