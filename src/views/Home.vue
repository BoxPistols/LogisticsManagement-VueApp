<template>
  <div>
    <h2>List</h2>
    <div class="result__lay">
      <div class="result__org">
        <ul v-for="memo in newest" :key="memo.id" class="result__mol">
          <li>
            <router-link to="{name: 'Edit', params:{id: memo.id}}">{{ memo.id }}:
            {{ memo.body }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    newest() {
      return this.$store.state.memos.slice().reverse()
    },
  },
  components: {},
}
</script>

<style lang="stylus" scoped>
@import "../assets/style/component"
</style>

<style lang="scss" scoped>
.result {
  &__org {
    max-width: 800px;
    margin: auto;
  }

  &__mol {
    li {
      border-bottom: 1px solid lightgray;
      font-size: 1.5em;
    }
  }
}
</style>
