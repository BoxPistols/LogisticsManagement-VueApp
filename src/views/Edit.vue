<template>
<div>
    <h2>Edit</h2>
    <textarea v-model="memo.memoBody" name="memo" class="memo"></textarea>
    <br />
    <button>保存</button>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        memo: function () {
            const id = this.$route.params['id']
            return this.$store.state.momes.find((memo) => memo.id == id)
        },
    },
}
</script>

<style lang="scss" scoped="scoped"></style>
