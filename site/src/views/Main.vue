<template>
  <div class="main">
    <el-row class="bd-header">
      <el-col :span="14">
        <h1 class="bd-title">
          <span>
            {{ data.title }}
          </span>
        </h1>
        <p
          class="bd-lead"
          v-html="data.description"
        />
      </el-col>
      <el-col :span="10">
        <transition name="fade">
          <Codefund v-if="!hideCodefund" />
        </transition>
      </el-col>
    </el-row>
    <div>
      <div v-if="!isSource">
        <component :is="componentLoader" />
      </div>
      <highlight-code
        v-else
        lang="vue"
      >
        {{ componentSource }}
      </highlight-code>
    </div>
  </div>
</template>

<script>
import registry from '@/registry'
import Codefund from '@/components/Codefund'
import BT from '@/assets/BT'

export default {
  components: {
    Codefund
  },
  props: {
    dir: {
      type: String,
      default: ''
    },
    current: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      hideCodefund: false
    }
  },
  computed: {
    isSource () {
      return this.$route.name === 'view-source'
    },
    component () {
      const name = this.current.replace(/^(\w)|-(\w)/g, ($0, $1, $2) => {
        return $1 && $1.toUpperCase() || $2 && $2.toUpperCase()
      })
      return registry[this.dir].find(it => it.name === name)
    },
    componentLoader () {
      return this.component && this.component.default
    },
    componentSource () {
      return this.component && this.component.source.default
    },
    data () {
      const list = [

      ]
      for (const row of BT) {
        list.push(...row.list)
      }
      const data = list.find(it => it.url.slice(1, -5) === this.dir + '/' + this.current)
      data.description = data.description.replace(/\\'/g, '\'')
      return data
    }
  },
  watch: {
    dir () {
      this.updateCodefund()
    },
    current () {
      this.updateCodefund()
    },
    isSource () {
      this.updateCodefund()
    }
  },
  methods: {
    updateCodefund () {
      this.hideCodefund = true
      setTimeout(() => {
        this.hideCodefund = false
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    padding-top: 5rem;
    padding-left: 23.6rem;
    padding-right: 3.6rem;

    .bd-header {
      min-height: 150px;
    }
  }
</style>
