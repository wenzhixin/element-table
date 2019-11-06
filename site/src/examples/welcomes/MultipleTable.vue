<template>
  <div>
    <div class="multiple-table-item">
      <element-table
        ref="table"
        :columns="columns"
        :options="options"
      />
    </div>

    <div class="multiple-table-item">
      <element-table
        ref="table"
        :columns="columns"
        :options="options"
      />
    </div>

    <div class="multiple-table-item">
      <element-table
        ref="table"
        :columns="columns"
        :options="options"
      />
    </div>

    <div class="multiple-table-item">
      <element-table
        ref="table"
        :columns="columns"
        :options="options"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        [
          {
            title: 'Bookmark 1',
            field: 'github.name',
            formatter (value) {
              return [
                '<div class="left">',
                '<a href="https://github.com/wenzhixin/' + value + '" target="_blank">' + value + '</a>',
                '</div>',
                '<div class="right">',
                '<a class="like" href="javascript:void(0)" title="Like">',
                '<i class="el-icon-star-off"></i>',
                '</a>  ',
                '<a class="remove" href="javascript:void(0)" title="Remove">',
                '<i class="el-icon-delete"></i>',
                '</a>',
                '</div>'
              ].join('')
            },
            events: {
              'click .like' (e, value, row) {
                alert('You click like action, row: ' + JSON.stringify(row))
              },
              'click .remove' (e, value, row) {
                alert('You click remove action, row: ' + JSON.stringify(row))
              }
            }
          }
        ]
      ],
      options: {
        url: 'json/data3.json'
      }
    }
  }
}
</script>

<style lang="scss">
.multiple-table-item {
  margin-bottom: 20px;

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .like {
    margin-right: 10px;
  }
}
</style>
