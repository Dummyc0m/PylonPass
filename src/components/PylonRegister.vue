<template>
  <pylon-dialog v-bind:show="show">
    <span slot="title">Register</span>
    <form v-on:submit.prevent="handleSubmit" slot="content">
      <pylon-textfield
        v-bind:invalid="invalid"
        v-on:input="inputEmail"
        error="Please input a proper email address">E-mail Address
      </pylon-textfield>
      <pylon-textfield
        v-bind:invalid="invalid"
        v-on:input="inputUsername"
        error="Please only include english characters, numerals, hyphens, and underscores">Username
      </pylon-textfield>
      <pylon-textfield
        v-bind:invalid="invalid"
        v-on:input="inputPassword"
        error="Please enter a good password longer than 8 characters">Strong Password
      </pylon-textfield>
      <pylon-textfield
        v-bind:invalid="invalid"
        v-on:input="confirmPassword"
        error="The two passwords do not match">Confirm Password
      </pylon-textfield>
      <pylon-submit-button>Register</pylon-submit-button>
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

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
