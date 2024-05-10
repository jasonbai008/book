<template>
  <el-drawer title="目录" :visible.sync="drawer" direction="ltr" size="280px">
    <ul>
      <li>
        <i class="el-icon-house"></i>
        <span @click="goHome()">首页</span>
      </li>
      <li v-for="(item, i) in menuList" :key="i">
        <img src="gif/play.gif" width="18" v-if="curBook === i">
        <i class="el-icon-headset" v-else></i>
        <span @click="goBook(item.value, item.origin, i)" :class="curBook === i ? 'active' : ''">{{ item.name }}</span>
      </li>
    </ul>
  </el-drawer>
</template>

<script>
export default {
  name: "bookMenu",
  data() {
    return {
      drawer: false,
      curBook: '',
      menuList: [
        // {
        //   value: "zhongGuoTaiYang",
        //   name: "中国太阳",
        // }
      ],
    };
  },
  mounted() {
    this.getMenuData();
    this.$bus.$on("openDrawer", () => {
      this.drawer = true;
    });
  },
  methods: {
    getMenuData() {
      // 最开始从一个代码仓库里获取音频列表
      // fetch(`/asset/api/list.json?time=${Date.now()}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     this.menuList = data;
      //   });

      // 后来一个代码仓库装不下了，就需要从两个代码仓库里获取音频列表
      let menu1 = fetch(`/asset/api/list.json?time=${Date.now()}`).then((res) => res.json());
      let menu2 = fetch(`/asset2/api/list.json?time=${Date.now()}`).then((res) => res.json());
      Promise.all([menu1, menu2]).then((resArr) => {
        this.menuList = resArr.flat(1);
      });
    },
    goHome() {
      this.curBook = ''
      this.$router.push("/");
      this.drawer = false;
    },
    goBook(bookName, origin, i) {
      this.curBook = i
      this.$router.push(`/book?name=${bookName}&origin=${origin}`);
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-drawer__body li {
  list-style-type: none;
  text-align: left;
  margin-bottom: 13px;
  display: flex;
  align-items: center;

  i {
    padding-right: 10px;
  }


  img {
    padding-right: 8px;
  }

  span {
    color: #666;

    &.active {
      font-weight: bold;
      color: #409eff;
    }

    &:hover {
      color: #409eff;
      font-weight: bold;
      cursor: pointer;
    }
  }
}

.el-drawer__wrapper::v-deep .el-drawer__header {
  margin-bottom: 5px;
}
</style>
