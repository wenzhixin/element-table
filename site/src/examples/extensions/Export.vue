<template>
  <div>
    <div
      id="toolbar"
      class="select"
    >
      <select class="form-control">
        <option value="">
          Export Basic
        </option>
        <option value="all">
          Export All
        </option>
        <option value="selected">
          Export Selected
        </option>
      </select>
    </div>

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

      ],
      options: {
        showExport: true,
        pagination: true,
        sidePagination: 'server',
        clickToSelect: true,
        toolbar: '#toolbar',
        showToggle: true,
        showColumns: true,
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data'
      }
    }
  }
}
</script>
