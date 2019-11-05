import './jquery.js'
import 'bootstrap-table/dist/bootstrap-table.js'
import './element-table.js'
import ElementTable from 'bootstrap-table/dist/bootstrap-table-vue.esm.js'

export default {
  install (Vue) {
    Vue.component('ElementTable', ElementTable)
  }
}
