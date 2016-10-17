<template>
  <pylon-dialog v-bind:show="show">
    <span slot="title">Pass By Pylon</span>
    <form v-on:submit.prevent="handleSubmit" slot="content">
      <pylon-textfield
        v-bind:invalid="invalid"
        v-on:input="inputUsername"
        error="Please input the correct username">Username
      </pylon-textfield>
      <pylon-textfield
        v-bind:invalid="invalid"
        v-on:input="inputPassword"
        error="Please input the correct password">Password
      </pylon-textfield>
      <pylon-submit-button>Log In</pylon-submit-button>
    </form>
  </pylon-dialog>
</template>

<script>
  import PylonDialog from './BaseComponents/PylonDialog'
  import PylonTextfield from './BaseComponents/PylonTextfield'
  import PylonSubmitButton from './BaseComponents/PylonSubmitButton'

  export default {
    props: ['show'],
    components: {
      PylonDialog, PylonTextfield, PylonSubmitButton
    },
    data () {
      return {
        username: '',
        password: '',
        invalid: false
      }
    },
    methods: {
      handleSubmit (event) {
        if (this.username !== '' && this.password !== '') {
          this.$emit('token', 'tokenPlaceholder')
        } else {
          this.invalid = true
        }
      },
      inputUsername (value) {
        this.username = value
        this.invalid = false
      },
      inputPassword (value) {
        this.password = value
        this.invalid = false
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
