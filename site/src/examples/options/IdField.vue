<template>
  <div>
    <form @click.prevent="submit">
      <el-button type="submit">
        Submit
      </el-button>

      <element-table
        ref="table"
        :columns="columns"
        :options="options"
      />
    </form>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      columns: [
        [
          {
            radio: true
          },
          {
            title: 'ID',
            field: 'id'
          },
          {
            title: 'Item Name',
            field: 'name'
          },
          {
            title: 'Item Price',
            field: 'price'
          }
        ]
      ],
      options: {
        toolbar: '.btn-primary',
        idField: 'id',
        selectItemName: 'id',
        height: 460,
        url: 'json/data1.json'
      }
    }
  },
  methods: {
    submit () {
      this.$alert($('form').serialize(), 'Submit')
    }
  }
}
</script>
