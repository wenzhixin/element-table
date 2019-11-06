<template>
  <div>
    <div class="toolbar">
      <el-select
        v-model="options.filterOptions.filterAlgorithm"
        class="form-control"
        name="filterAlgorithm"
      >
        <el-option
          value="and"
          selected
        >
          and
        </el-option>
        <el-option value="or">
          or
        </el-option>
      </el-select>
      <el-button @click="filterBy">
        filterBy
      </el-button>
    </div>

    <element-table
      ref="table"
      :columns="columns"
      :data="data"
      :options="options"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: 'ID',
          field: 'id'
        }, {
          title: 'Item Name',
          field: 'name'
        }, {
          title: 'Item Price',
          field: 'price'
        }
      ],
      data: [
        {
          id: 1,
          name: 'Item 1',
          price: '$1'
        },
        {
          id: 2,
          name: 'Item 2',
          price: '$2'
        },
        {
          id: 3,
          name: 'Item 3',
          price: '$1'
        },
        {
          id: 4,
          name: 'Item 4',
          price: '$4'
        },
        {
          id: 5,
          name: 'Item 5',
          price: '$5'
        }
      ],
      options: {
        toolbar: '.toolbar',
        filterOptions: {
          filterAlgorithm: 'and'
        }
      }
    }
  },
  methods: {
    filterBy () {
      this.$refs.table.filterBy({
        id: 3,
        price: '$1'
      })
    }
  }
}
</script>
