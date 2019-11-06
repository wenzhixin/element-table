import $ from 'jquery'

export default {
  methods: {
    autoScrollNavigation () {
      this.$nextTick(() => {
        const $wrapper = $('.sidenav')
        const $el = $('.sidenav-sub-header .sidenav-link.active')
        $wrapper.scrollTop(0)

        if ($el.length && $el.offset().top > $(window).height() / 2) {
          $wrapper.scrollTop($el.offset().top - $(window).height() / 2)
        }
      })
    }
  }
}
