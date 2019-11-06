<template>
  <div class="toggle-button">
    <el-tooltip
      effect="dark"
      content="Prev Example"
      placement="left"
    >
      <el-button
        :disabled="currentIndex === 0"
        icon="el-icon-arrow-left"
        circle
        @click="select(-1)"
      />
    </el-tooltip>

    <el-tooltip
      effect="dark"
      content="Next Example"
      placement="left"
    >
      <el-button
        :disabled="currentIndex === list.length - 1"
        icon="el-icon-arrow-right"
        circle
        @click="select(1)"
      />
    </el-tooltip>

    <el-tooltip
      effect="dark"
      :content="isSource ? 'View Example' : 'View Source'"
      placement="left"
    >
      <el-button
        :icon="isSource ? 'el-icon-view' : 'el-icon-document'"
        circle
        @click="toggle"
      />
    </el-tooltip>
  </div>
</template>

<script>
import BT from '@/assets/BT'
import Constants from '@/constants'
import mixins from '@/mixins'

export default {
  mixins: [
    mixins
  ],
  computed: {
    isSource () {
      return this.$route.name === 'view-source'
    },
    list () {
      const list = [
      ]
      BT.forEach(item => {
        list.push(...item.list.filter(it => {
          return !Constants.excludes.includes(it.url.slice(1, -5)) &&
            it.themes.includes('bootstrap4')
        }).map(it => it.url.slice(1, -5)))
      })
      return list
    },
    current () {
      return `${this.$route.params.dir}/${this.$route.params.current}`
    },
    currentIndex () {
      return this.list.indexOf(this.current)
    }
  },
  methods: {
    toggle () {
      this.$router.push(`/${this.current}${this.isSource ? '' : '/view-source'}`)
    },
    select (offset) {
      this.$router.push(`/${this.list[this.currentIndex + offset]}`)
      this.autoScrollNavigation()
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle-button {
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 40px;
  z-index: 1000;

  .el-button+.el-button {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
