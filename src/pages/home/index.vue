<template>
  <div class="gp-home">
    首页
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'test'
    ])
  },
  methods: {
    ...mapActions([
      'setTest'
    ])
  }
}
</script>
