<template>
  <div class="content">
    <i class="el-icon-menu" @click="openMenu"></i>
    <h3>《{{ curTitle }}》</h3>
    <audio :src="curUrl" controls id="player"></audio>
    <div class="list">
      <div class="item" v-for="(url, i) in list" :key="i">
        <el-button
          :type="curIndex === i ? 'primary' : ''"
          size="mini"
          @click="play(url, i)"
          >{{ i + 1 }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "book",
  data() {
    return {
      curIndex: "",
      curUrl: "",
      curTitle: "",
      list: [
        // "https://lubanseven.gitee.io/asset/mp3/liuLangDiQiu/中国太阳_01.mp3",
      ],
    };
  },
  mounted() {
    this.getList(this.$route.query.name, this.$route.query.origin);
  },
  methods: {
    openMenu() {
      this.$bus.$emit("openDrawer");
    },
    getList(bookName, audioOrigin) {
      // audioOrigin 播放源分为：asset asset2 两个代码仓库
      // fetch(`/${audioOrigin}/api/${bookName}.json?time=${Date.now()}`)
      let bookUrl = `https://bai-${audioOrigin}.netlify.app/api/${bookName}.json?time=${Date.now()}`;
      fetch(bookUrl)
        .then((res) => res.json())
        .then((data) => {
          this.list = data;
          this.curIndex = "";
          this.curUrl = "";
          this.genBookName();
        });
    },
    genBookName() {
      this.curTitle = this.list[0].split("/").pop().split("_")[0];
    },
    play(url, i) {
      this.curUrl = url;
      this.curIndex = i;
      setTimeout(() => {
        document.querySelector("#player").play();
      }, 2000);
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
  h3 {
    margin-top: 150px;
  }
  audio {
    margin: 30px auto;
  }
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
  padding: 10px 10px 0;
  display: flex;
  width: 300px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  .item {
    margin: 15px;
    .el-button {
      width: 43px;
      text-align: center;
    }
  }
}
</style>
