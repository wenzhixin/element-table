<template>
  <aside class="sidenav">
    <ul class="sidenav-links">
      <li
        v-for="item in list"
        :key="item.name"
      >
        <a
          :class="{active: parentActive(item)}"
          href="javascript:"
          class="sidenav-link"
          @click="clickParent(item)"
        >
          {{ item.name }}
        </a>
        <ul
          v-if="parentActive(item)"
          class="sidenav-sub-headers"
        >
          <li
            v-for="child of item.list"
            :key="child.title"
            class="sidenav-sub-header"
            @click="onSelect(child)"
          >
            <a
              :class="{active: currentUrl === child.url}"
              class="sidenav-link"
              href="javascript:"
            >
              {{ child.title }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
import BT from '@/assets/BT'
import Constants from '@/constants'
import mixins from '@/mixins'

export default {
  mixins: [
    mixins
  ],
  data () {
    return {
      parent: null
    }
  },
  computed: {
    list () {
      BT.forEach(item => {
        item.list = item.list.filter(it => {
          return !Constants.excludes.includes(it.url.slice(1, -5)) &&
            it.themes.includes('bootstrap4')
        })
      })
      return BT
    },
    currentUrl () {
      return `#${this.$route.params.dir}/${this.$route.params.current}.html`
    }
  },
  mounted () {
    this.autoScrollNavigation()
  },
  methods: {
    onSelect (item) {
      if (this.currentUrl === item.url) {
        return
      }
      this.$router.push('/' + item.url.slice(1, -5))
      this.isSource = false
    },
    parentActive (item) {
      return this.parent === item ||
        !this.parent &&
        item.list.find(it => it.url === this.currentUrl)
    },
    clickParent (item) {
      this.parent = item
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
    line-height: 1.7;
  }

  .sidenav {
    font-size: 16px;
    background-color: #fff;
    width: 20rem;
    position: fixed;
    z-index: 10;
    margin: 0;
    top: 3.6rem;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    border-right: 1px solid #eaecef;
    overflow-y: auto;

    .sidenav-links {
      margin: 0;
      padding: 1.5rem 0;

      a {
        display: inline-block;
        font-size: 1em;
        font-weight: 400;
        display: inline-block;
        color: #2c3e50;
        border-left: 0.25rem solid transparent;
        padding: 0.35rem 1rem 0.35rem 1.25rem;
        line-height: 1.4;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-decoration: none;
      }

      a.sidenav-link.active {
        color: #409eff;
        border-left-color: #409eff;
      }

      > li > a.sidenav-link {
        font-size: 1.1em;
        line-height: 1.7;
        font-weight: bold;
      }

      .sidenav-sub-headers {
        padding-left: 1rem;
        font-size: 0.95em;

         a.sidenav-link {
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          border-left: none;
        }
      }
    }

    > .sidenav-links > li:not(:first-child) {
      margin-top: 0.75rem;
    }
  }
</style>
