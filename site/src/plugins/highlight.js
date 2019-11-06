import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import vue from 'vue-highlight.js/lib/languages/vue'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

Vue.use(VueHighlightJS, {
  languages: {
    vue
  }
})
