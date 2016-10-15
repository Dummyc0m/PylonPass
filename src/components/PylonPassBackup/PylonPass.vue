<template>
  <div class="mdl-dialog-container" v-show="show">
    <div class="mdl-dialog" ref="dialog">
      <!-- Left aligned menu below button -->
      <h4 class="mdl-dialog__title">Pylon Pass</h4>
      <div class="mdl-dialog__content">
        <form v-on:submit.prevent="handleSubmit">
          <pylon-pass-login ref="login" v-on:username="onUsername" v-on:password="onPassword"></pylon-pass-login>
          <pylon-pass-forget v-on:forget="onForget"></pylon-pass-forget>
          <pylon-pass-register v-if="register" v-on:register="onRegister"></pylon-pass-register>
          <div class="mdl-dialog__actions mdl-dialog__actions--full-width">
            <button type="submit" class="mdl-button mdl-js-button">{{ button }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import PylonPassRegister from './PylonPassRegister'
  import PylonPassLogin from './PylonPassLogin'
  import PylonPassForget from './PylonPassForget'

  export default {
    components: {
      PylonPassRegister,
      PylonPassLogin,
      PylonPassForget
    },
    data () {
      return {
        username: '',
        password: '',
        mode: '',
        register: false,
        button: 'Log In/Register/Forget',
        show: false
      }
    },
    vuerify: {
      username: 'required',
      password: 'required'
    },
    methods: {
      show (type) {
        this.$refs.dialog.showModal()
      },
      close () {
        this.$refs.dialog.close()
      },
      onUsername (value) {
        this.username = value
      },
      onPassword (value) {
        this.password = value
      },
      onForget () {

      },
      handleSubmit (event) {
        if (this.$vuerify.check()) {
          this.$http.post('PylonPass/authenticate', {
            username: this.username,
            password: this.password
          }).then((response) => {
            response.text().then((text) => {
              Vue.http.headers.common['Authorization'] = 'Bearer ' + text
              this.$emit('login')
            })
          }, (response) => {
            this.$refs.login.setInvalid()
          })
        } else {
          this.$refs.login.setInvalid()
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mdl-dialog-container {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 10000;
    background: rgba(0, 0, 0, 0.3);
  }

  .mdl-dialog-container .mdl-dialog {
    background-color: white;
    padding: 1em;
    color: black;
    width: initial;
    min-width: 280px;
  }
</style>
