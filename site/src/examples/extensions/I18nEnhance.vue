<template>
  <div>
    <div id="toolbar">
      <label>Language:</label>
      <div
        class="btn-group"
        role="group"
        style="margin-bottom: 4px"
      >
        <button
          id="tw_Btn"
          type="button"
          class="btn btn-secondary btn-sm active"
        >
          zh_TW
        </button>
        <button
          id="us_Btn"
          type="button"
          class="btn btn-secondary btn-sm"
        >
          en_US
        </button>
      </div>
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
        [
          {
            title: '&#x4EE3;&#x78BC;',
            field: 'id'
          },
          {
            title: '&#x9805;&#x76EE;&#x540D;&#x7A31;',
            field: 'name'
          },
          {
            title: '&#x9805;&#x76EE;&#x91D1;&#x984D;',
            field: 'price'
          }
        ]
      ],
      options: {
        url: 'json/data1.json',
        pagination: true,
        toolbar: '#toolbar'
      }
    }
  }
}
</script>
