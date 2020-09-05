<template>
  <div class="about">
    <p>Logistics warehouse management system</p>
    <h1>物流倉庫管理システム</h1>
    <h2>コンテナ手配管理</h2>

    <div class="container">
      <section class="section">
        <div class="counter__lay">
          <h3>{{ new Date().getMonth() + 1 }} / {{ new Date().getDate() }}</h3>
          <div class="counter__org">
            <div class="counter__mol">
              <table>
                <th>title</th>
                <th>num</th>
                <tr>
                  <td>コンテナ数</td>
                  <td>{{ mCount }}</td>
                </tr>
                <tr>
                  <td>稼働工数</td>
                  <td>{{ double }}</td>
                </tr>
                <tr>
                  <td>必要人数</td>
                  <td>{{ calcA }}</td>
                </tr>
              </table>
            </div>

            <div class="counter__mol">
              <!-- <span v-show="this.$store.state.count <= 0">未入力</span> -->
              <h4>予定搬入コンテナ数</h4>
              <button @click="decrement" class="count">削減</button>
              <button @click="increment" class="count">搬入コンテナ数量追加</button>
              <p class="att" :class="{ over: on }">0以上で設定してください</p>
            </div>
            <!-- <div class="counter__mol">アイテム数量: {{ mCount }}</div>
            <div class="counter__mol">人数x2: {{ double }}</div>
            <div class="counter__mol">稼働工数: {{ calcA }}</div>-->

            <div class="counter__mol spot">
              <h4>スポット追加予定人数：</h4>
              <input v-model="addCount" type="number" />
            </div>

            <div class="counter__mol">
              <h4>次回入出荷作業の予定人数：{{ resultA }}</h4>
            </div>

            <div class="counter__mol">
              <div class="fx ai-c">
                <div class="title">必要フォークリフト台数：</div>
                <div v-if="resultA <= 5">1台</div>
                <div v-else>{{ Math.floor(resultA / 5) }}台</div>
              </div>
            </div>

            <div class="counter__mol">
              <div class="title">乗務員一覧：</div>
              <select name id>
                <option value disable="disable">選択してください</option>
                <option value>A</option>
                <option value>B</option>
                <option value>C</option>
                <option value>D</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="counter__lay">
          <h3>Area View</h3>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addCount: 0,
      on: false,
      // over: true,
    }
  },
  computed: {
    mCount() {
      return this.$store.state.count
    },
    double() {
      return this.$store.getters.double
    },
    calcA() {
      const gettersDouble = this.$store.getters.double
      const stateCount = this.$store.state.count
      return gettersDouble * stateCount
    },
    resultA() {
      if (this.addCount < 0) {
        return '0以上で入力してください'
      }
      return parseFloat(this.addCount) + this.$store.state.count * this.$store.getters.double
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      this.on = false
    },
    decrement() {
      // this.count = this.count -= 1
      if (this.$store.state.count > 0) {
        this.$store.commit('decrement')
        this.on = false
      } else {
        // alert('0以上で設定してください')
        this.on = true
      }
      // this.$store.commit('decrement')
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/component.styl'

.about
  padding: 24px
  text-align left
  margin auto
  display flex
  flex-direction column
  align-items: center

.container
  background: #234
  color: white
  display inline-flex
  max-width 80vw
  max-height 80vh
  width 100%
  overflow auto
  border-radius 16px
  box-shadow 4px 8px 12px #9d9ca4
  .section
    margin 12px 32px
  h3
    font-size 2rem /* 32/16 */
    border-bottom 1px solid #ccc
  h4
    font-size 1.125rem /* 18/16 */
    margin 8px 0 4px
    font-weight 600
table
  margin-bottom 24px
  border-collapse collapse
  tr, td
    font-size .875rem /* 14/16 */
    min-width 32px
    line-height 2
    padding 4px 12px
    border 1px solid #ccc
  td
    text-align center
.counter
  &__mol
    font-size 20px
    margin-bottom 16px

.spot
  @extends fx

.att
  display: block
  margin 0
  font-size .875rem /* 14/16 */
  transition .3s
  opacity 0
  &.over
    opacity 1
    color crimson


button, input
  min-height 1.5em
  background-color white
  border solid 1px orange
button
  line-height 1.5
  min-width 80px
  padding 4px 12px
  font-size 20px
  margin 0 4px
  color orange
input[type="number"]
  width 80px
  padding 2px 8px
  font-size 20px
  color teal
</style>
