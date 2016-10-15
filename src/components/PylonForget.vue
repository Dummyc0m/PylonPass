<template>
  <pylon-dialog title="Forgot Password" v-bind:show="show">
    <form v-on:submit.prevent="handleSubmit">
      <pylon-textfield
        v-bind:invalid="invalid"
        v-on:input="inputUsername"
        error="Please enter the correct username">Username
      </pylon-textfield>
      <pylon-submit-button>Send Password Reset</pylon-submit-button>
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
