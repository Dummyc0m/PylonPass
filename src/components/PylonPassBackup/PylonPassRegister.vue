<template>
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="pwid">
    <label class="mdl-textfield__label" for="pwid">Email</label>
    <span class="error">Please enter the correct password</span>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    methods: {
      register () {
        this.$http.post('PylonPass/register', {
          username: this.username,
          password: this.password
        }).then((response) => {
          response.text().then((text) => {
            Vue.http.headers.common['Authorization'] = 'Bearer ' + text
            this.$emit('register')
          })
        }, (response) => {
          this.invalid = true
        })
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
