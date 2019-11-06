<template>
  <div>
    <div class="select">
      <el-select
        v-model="options.locale"
        style="width: 100%"
      >
        <el-option value="af-ZA">
          af-ZA
        </el-option>
        <el-option value="ar-SA">
          ar-SA
        </el-option>
        <el-option value="ca-ES">
          ca-ES
        </el-option>
        <el-option value="cs-CZ">
          cs-CZ
        </el-option>
        <el-option value="da-DK">
          da-DK
        </el-option>
        <el-option value="de-DE">
          de-DE
        </el-option>
        <el-option value="el-GR">
          el-GR
        </el-option>
        <el-option value="en-US">
          en-US
        </el-option>
        <el-option value="es-AR">
          es-AR
        </el-option>
        <el-option value="es-CL">
          es-CL
        </el-option>
        <el-option value="es-CR">
          es-CR
        </el-option>
        <el-option value="es-ES">
          es-ES
        </el-option>
        <el-option value="es-MX">
          es-MX
        </el-option>
        <el-option value="es-NI">
          es-NI
        </el-option>
        <el-option value="es-SP">
          es-SP
        </el-option>
        <el-option value="et-EE">
          et-EE
        </el-option>
        <el-option value="eu-EU">
          eu-EU
        </el-option>
        <el-option value="fa-IR">
          fa-IR
        </el-option>
        <el-option value="fi-FI">
          fi-FI
        </el-option>
        <el-option value="fr-BE">
          fr-BE
        </el-option>
        <el-option value="fr-FR">
          fr-FR
        </el-option>
        <el-option value="he-IL">
          he-IL
        </el-option>
        <el-option value="hr-HR">
          hr-HR
        </el-option>
        <el-option value="hu-HU">
          hu-HU
        </el-option>
        <el-option value="id-ID">
          id-ID
        </el-option>
        <el-option value="it-IT">
          it-IT
        </el-option>
        <el-option value="ja-JP">
          ja-JP
        </el-option>
        <el-option value="ka-GE">
          ka-GE
        </el-option>
        <el-option value="ko-KR">
          ko-KR
        </el-option>
        <el-option value="ms-MY">
          ms-MY
        </el-option>
        <el-option value="nb-NO">
          nb-NO
        </el-option>
        <el-option value="nl-NL">
          nl-NL
        </el-option>
        <el-option value="pl-PL">
          pl-PL
        </el-option>
        <el-option value="pt-BR">
          pt-BR
        </el-option>
        <el-option value="pt-PT">
          pt-PT
        </el-option>
        <el-option value="ro-RO">
          ro-RO
        </el-option>
        <el-option value="ru-RU">
          ru-RU
        </el-option>
        <el-option value="sk-SK">
          sk-SK
        </el-option>
        <el-option value="sv-SE">
          sv-SE
        </el-option>
        <el-option value="th-TH">
          th-TH
        </el-option>
        <el-option value="tr-TR">
          tr-TR
        </el-option>
        <el-option value="uk-UA">
          uk-UA
        </el-option>
        <el-option value="ur-PK">
          ur-PK
        </el-option>
        <el-option value="uz-Latn-UZ">
          uz-Latn-UZ
        </el-option>
        <el-option value="vi-VN">
          vi-VN
        </el-option>
        <el-option value="zh-CN">
          zh-CN
        </el-option>
        <el-option value="zh-TW">
          zh-TW
        </el-option>
      </el-select>
    </div>

    <div id="toolbar">
      <el-button
        :disabled="deleteDisabled"
        @click="remove"
      >
        <i class="el-icon-delete" /> Delete
      </el-button>
    </div>
    <div class="index">
      <element-table
        ref="table"
        :columns="columns"
        :options="options"
        @on-check="onSelect"
        @on-uncheck="onSelect"
        @on-check-all="onSelect"
        @on-uncheck-all="onSelect"
      />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'bootstrap-table/dist/bootstrap-table-locale-all'
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['en-US'])

export default {
  data () {
    return {
      selections: [
      ],
      deleteDisabled: true,
      columns: [
        [
          {
            field: 'state',
            checkbox: true,
            rowspan: 2,
            align: 'center',
            valign: 'middle'
          },
          {
            title: 'Item ID',
            field: 'id',
            rowspan: 2,
            align: 'center',
            valign: 'middle',
            sortable: true,
            footerFormatter: () => {
              return 'Total'
            }
          },
          {
            title: 'Item Detail',
            colspan: 3,
            align: 'center'
          }
        ],
        [
          {
            field: 'name',
            title: 'Item Name',
            sortable: true,
            footerFormatter: data => {
              return data.length
            },
            align: 'center'
          },
          {
            field: 'price',
            title: 'Item Price',
            sortable: true,
            align: 'center',
            footerFormatter: data => {
              return '$' + data.map(row => {
                return +row.price.substring(1)
              }).reduce((sum, i) => {
                return sum + i
              }, 0)
            }
          },
          {
            field: 'operate',
            title: 'Item Operate',
            align: 'center',
            clickToSelect: false,
            events: {
              'click .like': (e, value, row) => {
                alert('You click like action, row: ' + JSON.stringify(row))
              },
              'click .remove': (e, value, row) => {
                this.$refs.table.remove({
                  field: 'id',
                  values: [
                    row.id
                  ]
                })
              }
            },
            formatter: () => {
              return [
                '<a class="like" href="javascript:void(0)" title="Like">',
                '<i class="el-icon-star-off"></i>',
                '</a>  ',
                '<a class="remove" href="javascript:void(0)" title="Remove">',
                '<i class="el-icon-delete"></i>',
                '</a>'
              ].join('')
            }
          }
        ]
      ],
      options: {
        locale: 'en-US',
        toolbar: '#toolbar',
        search: true,
        showRefresh: true,
        showToggle: true,
        showFullscreen: true,
        showColumns: true,
        showColumnsToggleAll: true,
        detailView: true,
        showExport: true,
        clickToSelect: true,
        detailFormatter: (index, row) => {
          const html = [
          ]
          for (const key in row) {
            if (row[key]) {
              html.push('<p><b>' + key + ':</b> ' + row[key] + '</p>')
            }
          }
          return html.join('')
        },
        minimumCountColumns: 2,
        showPaginationSwitch: true,
        pagination: true,
        idField: 'id',
        pageList: '[10, 25, 50, 100, all]',
        showFooter: true,
        sidePagination: 'server',
        url: 'https://examples.wenzhixin.net.cn/examples/bootstrap_table/data',
        responseHandler: res => {
          for (const row of res.rows) {
            row.state = this.selections.includes(row.id)
          }
          return res
        }
      }
    }
  },
  methods: {
    onSelect () {
      this.selections = this.$refs.table.getSelections().map(row => row.id)
      this.deleteDisabled = !this.selections.length
    },
    remove () {
      this.$refs.table.remove({
        field: 'id',
        values: this.selections
      })
      this.selections = [
      ]
    }
  }
}
</script>

<style>
.index .like {
  margin-right: 10px;
}
</style>
