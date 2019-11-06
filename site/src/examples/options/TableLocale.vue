<template>
  <div>
    <div class="toolbar">
      <el-select v-model="options.locale">
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
        locale: 'zh-CN',
        height: 460,
        toolbar: '.toolbar',
        search: true,
        showRefresh: true,
        showToggle: true,
        showColumns: true,
        showExport: true,
        pagination: true,
        url: 'json/data1.json'
      }
    }
  }
}
</script>
