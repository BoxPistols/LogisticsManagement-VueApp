<template lang="html">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slot name="slot-title"></slot>
    <slot name="slot-list"></slot>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Slot',
    }
  },
}
</script>

<style scoped lang="stylus"></style>
