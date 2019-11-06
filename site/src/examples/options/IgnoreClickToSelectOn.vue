<template>
  <div>
    <element-table
      ref="table"
      :columns="columns"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        [
          {
            field: 'state',
            checkbox: true
          },
          {
            title: 'ID',
            field: 'id'
          },
          {
            title: 'Item Name',
            field: 'name',
            formatter (value) {
              return `<label><input type="checkbox"> ${value}</label>`
            }
          },
          {
            title: 'Item Price',
            field: 'price',
            formatter (value) {
              return `<button class="el-button el-button--mini">${value}</button>`
            }
          }
        ]
      ],
      options: {
        height: 460,
        clickToSelect: true,
        url: 'json/data1.json',
        ignoreClickToSelectOn (e) {
          return [
            'A',
            'BUTTON',
            'LABEL',
            'INPUT'
          ].includes(e.tagName)
        }
      }
    }
  }
}
</script>
