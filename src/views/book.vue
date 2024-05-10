<template>
  <div class="content">
    <i class="el-icon-menu" @click="openMenu"></i>
    <div class="list">
      <div class="item" v-for="(url, i) in list" :key="i">
        <h5>{{ url | genFileName }}</h5>
        <audio :src="url" controls></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "book",
  data() {
    return {
      list: [
        // "https://lubanseven.gitee.io/asset/mp3/liuLangDiQiu/中国太阳_01.mp3",
      ],
    };
  },
  mounted() {
    this.getList(this.$route.query.name, this.$route.query.origin);
  },
  filters: {
    genFileName(link) {
      let pos = link.lastIndexOf("/");
      return link.slice(pos + 1).split(".")[0];
    },
  },
  methods: {
    openMenu() {
      this.$bus.$emit("openDrawer");
    },
    getList(bookName, audioOrigin) {
      // audioOrigin 播放源分为：asset asset2 两个代码仓库
      fetch(`/${audioOrigin}/api/${bookName}.json?time=${Date.now()}`)
        .then((res) => res.json())
        .then((data) => {
          this.list = data;
        });
    },
  },
  watch: {
    $route: {
      handler: function (n, o) {
        // 每次路由中的query变化时，获取音频列表
        this.getList(this.$route.query.name, this.$route.query.origin);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
}
.el-icon-menu {
  position: fixed;
  right: 20px;
  top: 20px;
  font-size: 22px;
  color: #666;
  &:hover {
    cursor: pointer;
  }
}
.list {
  padding: 40px 10px 0;
  .item {
    margin-bottom: 30px;
    h5 {
      margin: 15px 0;
    }
    audio {
      width: 88%;
      max-width: 600px;
    }
  }
}
</style>
