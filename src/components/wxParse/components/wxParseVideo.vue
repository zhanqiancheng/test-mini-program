<template>
  <!--增加video标签支持，并循环添加-->
  <view :class="node.classStr" :style="node.styleStr">
    <video 
      :id="id"
      :class="node.classStr" 
      class="video-video" 
      :src="node.attr.src"
      :objectFit="node.attr.objectFit || 'contain'"
      :poster="node.attr.poster || ''"
      :controls="node.attr.controls || true"
      @play="onPlay">
    </video>
  </view>
</template>

<script>
const ids = []
let id = 0

export default {
  name: 'wxParseVideo',
  props: {
    node: {}
  },
  computed: {
    id () {
      return this.node.attr.id || id++
    }
  },
  mounted () {
    ids.push(this.id)
  },
  destroyed () {
    ids.some((id, index) => {
      if (id === this.id) {
        ids.splice(index, 1)
        return true
      }
    })
  },
  methods: {
    onPlay () {
      // iOS下在视频暂停时会继续播放背景音频，所以在开始前直接结束掉背景音频
      wx.stopBackgroundAudio()
      this.pauseOtherVideo()
      this.checkWifi()
    },
    checkWifi () {
      wx.getNetworkType({
        success: res => {
          if (res.networkType !== 'wifi') {
            wx.showToast({
              title: '当前处于移动数据网络',
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    },
    pauseOtherVideo () {
      ids.forEach(id => {
        if (id === this.id) return
        const video = wx.createVideoContext(id, this)
        video && video.pause()
      })
    }
  }
};
</script>
