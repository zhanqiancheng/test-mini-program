<template>
  <div class="gp-none">
    <div class="gp-none-box">
      <img class="gp-none__img" :src="url" mode="aspectFit">
      <h4 v-if="title" class="gp-none__title">{{ title }}</h4>
      <p v-if="text" class="gp-none__text">{{ text }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        default: '这里找不到内容喔～'
      },
      title: String,
      url: {
        type: String,
        default: '/static/images/none.png'
      }
    }
  }
</script>
