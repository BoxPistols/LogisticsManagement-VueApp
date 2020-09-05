<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="menu">Home</router-link>
      <router-link to="/new" class="menu">New</router-link>
      <router-link to="/edit" class="menu">Edit</router-link>
      <router-link to="/about" class="menu">About</router-link>
      <router-link to="/develop" class="menu">Develop</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus">
body
    background: aliceblue
    font-family Andale Mono, sans-serif
#app
    // font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
#nav
    a
        text-decoration none
        color cornflowerblue

.menu
    position relative
    padding 4px 8px 0 15px
    line-height 2
    font-size 20px
    &:not(:last-child)
        &:after
            content '/'
            display block
            position absolute
            left 100%
            right 0
            top 0
</style>
