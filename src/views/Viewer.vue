<template>
  <div class="page">
    <Home></Home>
    <div class="viewer" @keydown.esc="close">
      <section class="modal">
        <nav>
          <button @click="pageLeft" :disabled="this.pageIndex <= 0">
            <i class="fas fa-chevron-left"></i>
          </button>
          <span>
            Sample #{{pageIndex + 1}}
          </span>
          <button @click="pageRight" :disabled="this.pageIndex >= this.pages.length - 1">
            <i class="fas fa-chevron-right"></i>
          </button>
          <header>{{ title }}</header>
          <button class="close" @click="close">
            <i class="fas fa-times"></i>
          </button>
        </nav>
        <main>
          <planner-page @change-title="changeTitle" v-if="pageName === 'planner'"></planner-page>
          <case-study-page @change-title="changeTitle" v-if="pageName === 'caseStudy'"></case-study-page>
        </main>
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
import PlannerPage from "@/components/annotation_pages/Planner.vue";
import CaseStudyPage from "@/components/annotation_pages/CaseStudy.vue";

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
    Home: () => import("@/views/Home.vue"),
    PlannerPage,
    CaseStudyPage
  },
  data() {
    return {
      title: "",
      pageIndex: 0,
      pages: ["planner", "caseStudy"]
    };
  },
  computed: {
    pageName() {
      return this.pages[this.pageIndex];
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
        this.pageIndex -= 1;
      }
    },
    pageRight() {
      if (this.pageIndex < this.pages.length - 1) {
        this.pageIndex += 1;
      }
    },
    close() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
