<template>
  <div class="about-wrap">
    <i class="el-icon-s-home" @click="goHome"></i>
    <div class="inner">
      <h3>为什么会有这个网站？</h3>
      <p>以前在喜马拉雅上收听了很多大刘的作品，深受震撼。可惜这些音频早就下架了，为了让更多人听到，于是开发了这个网站。</p>
      <p>这些音频是喜马拉雅上的<b>“大屁股老鼠哈哈笑”</b>播讲的，音质浑厚，富有感情，已绝版。</p>
      <h3>想听大刘的长篇小说？</h3>
      <p>
        <a
          href="https://mp.weixin.qq.com/s?__biz=MzU3MTcxNjI4OQ==&mid=2247498730&idx=6&sn=b4a40d2cd91828c30fc0261dc3444605&chksm=fcd95c44cbaed55233563cb71f26505efbba3fcfd5bc83b8af5a9b20b3fc1db4698e11e24a98&scene=21#wechat_redirect"
          target="_blank"
          >球状闪电</a
        >、
        <a
          href="https://mp.weixin.qq.com/s?__biz=MzI3OTA0MDQ4NA==&mid=2455229689&idx=2&sn=522b5a6d5d770367893c1c205fbde8ac&chksm=fceeac72cb9925644d999402d22730b73e374a7df58e466e12e36ab8a6aa2fbdbb1a87e12f63&scene=21#wechat_redirect"
          target="_blank"
          >三体1</a
        >、
        <a
          href="https://mp.weixin.qq.com/s?__biz=MzI3OTA0MDQ4NA==&mid=2455229782&idx=2&sn=03ac53bf484c52b5723c099920133c3c&chksm=fceeadddcb9924cb2aa0c4c71ebe9481e2f811a6a1b9635a1fa7eb251dc5fa91f35e02ec1fab&scene=21#wechat_redirect"
          target="_blank"
          >三体2</a
        >、
        <a
          href="https://mp.weixin.qq.com/s?__biz=MzI3OTA0MDQ4NA==&mid=2455229782&idx=3&sn=3add88ec8fde193dccd9ca5cc43efa1d&chksm=fceeadddcb9924cbee112e680a4f9c483d4ed3e6b9027fa1cc80419780727f9efba7a1e944e3&scene=21#wechat_redirect"
          target="_blank"
          >三体3</a
        >
      </p>
      <h3>本站使用的技术</h3>
      <p><span>Vue 2.x</span>、<span>ElementUI</span>、<span>fetch</span>、<span>Gitee</span></p>
      <h3>关于我</h3>
      <p>一枚爱折腾的前端，专注于开发好玩的应用</p>
      <p>1105843831</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.about-wrap {
  padding: 0 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    h3 {
      margin-bottom: 10px;
    }
    h3:not(:first-child) {
      margin-top: 40px;
    }
    p {
      line-height: 1.8;
      text-align: center;
      color: #444;
      margin-top: 10px;
      a {
        color: #444;
        text-decoration: none;
        border-bottom: 1px solid;
      }
    }
  }
  .el-icon-s-home {
    position: fixed;
    right: 20px;
    top: 20px;
    font-size: 22px;
    color: #666;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
