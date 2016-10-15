<template>
  <div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" v-bind:id="unid" v-on:input="onUsername">
      <label class="mdl-textfield__label" v-bind:for="unid">Username</label>
      <span v-if="invalid" class="error">Please enter the correct username</span>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="password" v-bind:id="pwid" v-on:input="onPassword">
      <label class="mdl-textfield__label" v-bind:for="pwid">Password</label>
      <span v-if="invalid" class="error">Please enter the correct password</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        unid: 'input-un-' + Math.random(),
        pwid: 'input-pw-' + Math.random(),
        invalid: false,
        failed: false
      }
    },
    computed: {
      errors () {
        return this.$vuerify.$errors
      }
    },
    vuerify: {
      username: 'required',
      password: 'required'
    },
    methods: {
      onUsername (event) {
        this.invalid = false
        this.$emit('username', event.target.value)
      },
      onPassword (event) {
        this.invalid = false
        this.$emit('password', event.target.value)
      },
      setInvalid () {
        this.invalid = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: #d50000;
    position: absolute;
    font-size: 12px;
    margin-top: 3px;
    display: block
  }
</style>
