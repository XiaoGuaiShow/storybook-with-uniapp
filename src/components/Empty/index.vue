<template>
  <div class="custom-empty">
    <div class="custom-empty__inner">
      <img class="custom-empty__image" :src="imageUrl" />
      <p class="custom-empty__description">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '暂无数据', // 默认的空数据描述
    },
    imageUrl: {
      type: String,
      default: 'https://image.ceekee.com/error/icon_nodata.png', // 默认的空数据图片
    },
  },
};
</script>

<style scoped>
.custom-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #999;
  margin-top: 20rpx;
  padding-bottom: 40rpx;
}

.custom-empty__inner {
  text-align: center;
}
.custom-empty__image {
  width: 250rpx;
  height: 250rpx;
}
.custom-empty__description {
  font-size: 24rpx;
  margin-bottom: 10rpx;
}
</style>
