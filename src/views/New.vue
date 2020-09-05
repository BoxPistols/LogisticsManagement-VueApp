<template>
  <div>
    <h2>New</h2>
    <p>v-model="body" {{ $data }}</p>
    <p>{{ showMsg }}</p>
    <div class="editor__lay">
      <div class="editor__org">
        <div class="editor__mol textarea">
          <textarea class="textarea-edit" name="memo" v-model="body"></textarea>
        </div>
        <div class="editor__mol button">
          <button class="button-save" @click="saveMemo">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      body: 'Hello',
    }
  },
  computed: {
    showMsg() {
      return this.$store.state.msg
    },
  },
  methods: {
    saveMemo() {
      this.$router.push('/')
      // from store .commit save handler
      this.$store.commit('saveMemo', {
        // id: 2,
        body: this.body,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
// components styule
@import "../assets/style/component.styl";

/*
  view design
*/
.editor
  &__lay
    max-width 800px
    margin auto
  &__org
    display flex
    flex-direction column
  &__mol
    display flex
    &.textarea
      .textarea-edit
        bd(gray-base)
        width 100%
        min-height 300px
        margin-bottom 12px
        padding 1em
        font-size 1.5em
        &:active, &:focus
          @extend active-form

    &.button
      justify-content flex-end
      .button-save
        bd(gray-base)
        line-height 1em
        padding 1em 4em
        background-color white
        transition: .3s
        &:hover
          cursor pointer
          background-color #eee
        &:active, &:focus
          @extend active-form
</style>
