<template>
  <div class="edit">
    <h2>Edit</h2>
    <textarea v-model="memo.body" name="memo" id="" cols="30" rows="10"></textarea>
    <button>保存</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    memo() {
      const id = this.$route.state.memos.params['id']
      return this.$store.memos.find((memo) => memo.this.$route.params['id'] == id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
