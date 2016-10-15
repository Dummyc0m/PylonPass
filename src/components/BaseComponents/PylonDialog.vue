<!-- title -->
<template>
  <div class="mdl-dialog-container" v-show="show">
    <div class="mdl-dialog">
      <h4 class="mdl-dialog__title">
        <slot name="title"></slot>
      </h4>
      <div class="mdl-dialog__content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['show']
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
