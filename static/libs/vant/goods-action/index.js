import { VantComponent } from '../common/component';
VantComponent({
  classes: ['icon-class'],
  props: {
    btnList: Array
  },
  methods: {
    onClick: function onClick(event) {
      var bindClickEventName = event.detail.bindClickEventName;

      if (bindClickEventName) {
        this.$emit('click', event.detail);
      }
    }
  }
});