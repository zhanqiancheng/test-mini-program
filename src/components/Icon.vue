<template>
  <i :class="className"></i>
</template>

<script>
  export default {
    props: {
      type: String
    },
    computed: {
      className () {
        return `gp-icon gp-icon__${this.type}`
      }
    }
  }
</script>