<template>
  <div class="page">
    <Home></Home>
    <div class="viewer" @keydown.esc="close">
      <section class="modal">
        <nav>
          <button @click="pageLeft" :disabled="pageIndex <= 0">
            <i class="fas fa-chevron-left"></i>
          </button>
          <span>
            Sample #{{pageIndex + 1}}
          </span>
          <button @click="pageRight" :disabled="pageIndex >= pageLastIndex">
            <i class="fas fa-chevron-right"></i>
          </button>
          <header>{{ title }}</header>
          <button class="close" @click="close">
            <i class="fas fa-times"></i>
          </button>
        </nav>
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<style lang="less" scoped>
.viewer {
  position: absolute;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 95%;
  width: calc(100% - 100px);
  margin: 5%;
  margin: calc(50px);
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

nav {
  display: flex;
  background-color: rgb(230, 230, 240);
  height: 40px;
  padding: 5px;

  > * {
    display: inline-block;
    border: none;
    background-color: transparent;
    margin: auto;
  }
  button {
    height: 100%;
    font-size: 26px;
    padding: 0 15px;
    cursor: pointer;
  }
  header {
    font-size: 20px;
    font-weight: 600;
    flex-grow: 1;
  }
}
</style>

<script>
import Pages from "@/pages.js";

function keyEventListener(event) {
  if (event.key === "Escape") {
    this.close();
  } else if (event.key === "ArrowLeft") {
    this.pageLeft();
  } else if (event.key === "ArrowRight") {
    this.pageRight();
  }
}

export default {
  components: {
    Home: () => import("@/views/Home.vue")
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    pageIndex() {
      return Pages.map(page => page.name).indexOf(this.$route.name);
    },
    pageLastIndex() {
      return Pages.length - 1;
    },
    title() {
      return Pages[this.pageIndex].title;
    }
  },
  mounted() {
    keyEventListener = keyEventListener.bind(this);
    window.addEventListener("keydown", keyEventListener);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", keyEventListener);
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    pageLeft() {
      if (this.pageIndex > 0) {
        this.$router.push({ name: Pages[this.pageIndex - 1].name });
      }
    },
    pageRight() {
      if (this.pageIndex < this.pageLastIndex) {
        this.$router.push({ name: Pages[this.pageIndex + 1].name });
      }
    },
    close() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
