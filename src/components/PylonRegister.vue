<template>
  <pylon-dialog title="Register" v-bind:show="show">
    <form v-on:submit.prevent="handleSubmit">
      <pylon-textfield v-bind:invalid="invalid" v-on:input="inputUsername">Username</pylon-textfield>
      <pylon-textfield v-bind:invalid="invalid" v-on:input="inputPassword">Password</pylon-textfield>
      <pylon-submit-button>Register</pylon-submit-button>
    </form>
  </pylon-dialog>
</template>

<script>
  import PylonDialog from './BaseComponents/PylonDialog'
  import PylonTextfield from './BaseComponents/PylonTextfield'
  import PylonSubmitButton from './BaseComponents/PylonSubmitButton'

  export default {
    components: {
      PylonDialog, PylonTextfield, PylonSubmitButton
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
