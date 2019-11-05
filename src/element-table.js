/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * https://github.com/wenzhixin/element-table/
 * theme: https://element.eleme.io/
 */

$.extend($.fn.bootstrapTable.defaults, {
  classes: 'table el-table el-table--fit el-table--enable-row-hover el-table--border el-table--group',
  buttonsPrefix: 'el-button',
  buttonsClass: 'default',
  iconsPrefix: '',
  icons: {
    paginationSwitchDown: 'el-icon-arrow-down',
    paginationSwitchUp: 'el-icon-arrow-up',
    refresh: 'el-icon-refresh',
    toggleOff: 'el-icon-turn-off',
    toggleOn: 'el-icon-open',
    columns: 'el-icon-notebook-2',
    detailOpen: 'el-icon-circle-plus-outline',
    detailClose: 'el-icon-remove-outline',
    fullscreen: 'el-icon-full-screen',
    sort: 'el-icon-sort',
    search: 'el-icon-search',
    clearSearch: 'el-icon-delete'
  }
})

$.fn.bootstrapTable.theme = 'element'

$.BootstrapTable = class extends $.BootstrapTable {
  initConstants () {
    this.options.buttonsClass = '-' + this.options.buttonsClass

    super.initConstants()

    this.constants.classes.buttonsGroup = 'el-button-group'
    this.constants.classes.buttonsDropdown = 'el-dropdown'
    this.constants.classes.inputGroup = 'el-input'
    this.constants.classes.inputPrefix = ''
    this.constants.classes.input = 'el-input__inner'
    this.constants.classes.paginationDropdown = 'el-dropdown'
    this.constants.classes.dropdownActive = 'is-active'

    this.constants.html.toolbarDropdown = ['<ul class="el-dropdown-menu el-popper" id="toolbar-columns-id">', '</ul>']
    this.constants.html.toolbarDropdownItem = '<li class="el-dropdown-menu__item"><label>%s</label></li>'
    this.constants.html.pageDropdown = ['<div class="el-menu el-menu--popup">', '</div>'],
    this.constants.html.pageDropdownItem = '<li class="el-menu-item %s"><a href="#">%s</a></li>',
    this.constants.html.toolbarDropdownSeparator = '<div class="el-dropdown-menu__item el-dropdown-menu__item--divided"></div>'
    this.constants.html.dropdownCaret = '<i class="el-icon-arrow-down el-icon--right"></i>'
    this.constants.html.pagination = ['<div class="el-pagination is-background"><ul class="el-pager%s">', '</ul></div>']
    this.constants.html.paginationItem = '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
    this.constants.html.inputGroup = '<div class="el-input el-input-group el-input-group--append">%s%s</div>'
    this.constants.html.searchInput = '<input class="%s%s" type="text" placeholder="%s">'
    this.constants.html.searchButton = '<div class="el-input-group__append"><button class="%s" type="button" name="search" title="%s">%s %s</button></div>'
    this.constants.html.searchClearButton = '<div class="el-input-group__append"><button class="%s" type="button" name="clearSearch" title="%s">%s %s</button></div>'
  }

  initToolbar () {
    super.initToolbar()
    this.handleToolbar()
  }

  handleToolbar () {
    if (this.$toolbar.find('.el-dropdown').length) {
      this._initDropdown()
    }
  }

  initPagination () {
    super.initPagination()
    if (this.options.pagination && !this.options.onlyInfoPagination) {
      this._initDropdown()
    }
  }

  _initDropdown () {
    const $dropdowns = this.$container.find('.el-dropdown')

    $dropdowns.off('click').on('click', e => {
      const $this = $(e.currentTarget)
      e.stopPropagation()
      $dropdowns.not($this).removeClass('active')
      $this.toggleClass('active')
    })

    $(document).off('click.bs.dropdown.element').on('click.bs.dropdown.element', () => {
      $dropdowns.removeClass('active')
    })
  }

  initBody () {
    super.initBody()
    this.$body.addClass('el-table__body')
  }
}
