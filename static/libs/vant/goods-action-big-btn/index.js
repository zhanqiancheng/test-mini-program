function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { VantComponent } from '../common/component';
VantComponent({
  props: {
    url: String,
    text: String,
    bindClickEventName: String,
    primary: {
      type: Boolean,
      value: false
    },
    replace: {
      type: Boolean,
      value: false
    }
  },
  methods: {
    onClick: function onClick(event) {
      var bindClickEventName = this.data.bindClickEventName;
      this.$emit('click', _extends({}, event.detail, {
        bindClickEventName: bindClickEventName
      }));
    }
  }
});