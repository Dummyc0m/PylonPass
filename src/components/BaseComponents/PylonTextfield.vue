<template>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" v-bind:id="id" v-on:input="inputValue">
    <label class="mdl-textfield__label" v-bind:for="id">
      <slot></slot>
    </label>
    <span v-if="invalid" class="error">{{ error }}</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: 'input-' + Math.random()
      }
    },
    props: {
      invalid: Boolean,
      error: {
        type: String,
        default: 'Please enter the correct value'
      }
    },
    methods: {
      inputValue (event) {
        this.$emit('input', event.target.value)
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

  .mdl-textfield {
    display: block;
  }
</style>
