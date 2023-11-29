<template>
  <uni-popup ref="twPopup" type="bottom" safeArea backgroundColor="#fff" @change="onChange">
    <div @touchmove.stop.prevent="() => {}">
      <div class="popup-title">
        <span class="popup-title-text">{{ title }}</span>
        <span class="close-btn f-s-32 c-cbcbcb tripwise_fill icon-close_fill" @click="onCancel"></span>
      </div>
      <div class="popup-content">
        <slot></slot>
      </div>
      <div class="popup-btn">
        <slot name="footer">
          <button type="default" class="f-s-32 c-595959" @click="onCancel">{{ cancelText }}</button>
          <button type="primary" class="f-s-32 c-595959" @click="onOk">{{ okText }}</button>
        </slot>
      </div>
    </div>
  </uni-popup>
</template>
<script>
import './index.less';
export default {
  name: 'twPopup',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    okText: {
      type: String,
      default: '确认',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    open: function (val) {
      if (val) {
        this.$refs.twPopup.open();
      } else {
        this.$refs.twPopup.close();
      }
    },
  },
  methods: {
    onCancel() {
      this.$refs.twPopup.close();
    },
    onOk() {
      this.$emit('ok'); // 确认
    },
    onChange(e) {
      this.$emit('change', e.show);
    },
  },
};
</script>
