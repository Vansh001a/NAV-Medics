<template>
  <div class="app-component-container" v-bind:class="rootClassName">
    <input
      type="text"
      :placeholder="textinput_placeholder"
      class="app-component-textinput input"
    />
  </div>
</template>

<script>
export default {
  name: 'AppComponent',
  props: {
    rootClassName: String,
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
}
</script>

<style scoped>
.app-component-container {
  display: flex;
  position: relative;
}
.app-component-textinput {
  align-self: flex-start;
}
.app-component-root-class-name {
  flex: 1;
}
</style>
