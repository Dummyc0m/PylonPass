<template>
  <div id="app">
    <!--<img class="logo" src="./assets/logo.png">-->
    <pylon-pass ref="pass"></pylon-pass>
    <pylon-forget ref="forget"></pylon-forget>
    <pylon-register ref="register"></pylon-register>
    <!--<p>-->
    <!--Welcome to your Vue.js app!-->
    <!--</p>-->
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            v-on:click="showPass">Pass
    </button>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            v-on:click="showForget">Forget
    </button>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            v-on:click="showRegister">Register
    </button>

    <!--<p>-->
    <!--To get a better understanding of how this boilerplate works, check out-->
    <!--<a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.-->
    <!--It is also recommended to go through the docs for-->
    <!--<a href="http://webpack.github.io/" target="_blank">Webpack</a> and-->
    <!--<a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.-->
    <!--If you have any issues with the setup, please file an issue at this boilerplate's-->
    <!--<a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.-->
    <!--</p>-->
    <!--<p>-->
    <!--You may also want to checkout-->
    <!--<a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and-->
    <!--<a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.-->
    <!--</p>-->
  </div>
</template>

<script>
  // import PylonPass from './components/PylonPassBackup/PylonPass'
  import PylonPass from './components/PylonPass'
  import PylonForget from './components/PylonForget'
  import PylonRegister from './components/PylonRegister'

  export default {
    components: {
      PylonPass, PylonForget, PylonRegister
    },
    methods: {
      showPass: function () {
        this.$refs.pass.showDialog(true)
      },
      showForget: function () {
        this.$refs.forget.showDialog(true)
      },
      showRegister: function () {
        this.$refs.register.showDialog(true)
      }
    }
  }
</script>

<style>
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }

  .logo {
    width: 100px;
    height: 100px
  }
</style>
