<template>
  <div class="page">
    <Home></Home>
    <div class="viewer">
      <section class="modal">
        <nav>
          <button>
            <i class="fas fa-chevron-left"></i>
          </button>
          <span>
            Sample #1
          </span>
          <button>
            <i class="fas fa-chevron-right"></i>
          </button>
          <header>{{ title }}</header>
          <button class="close">
            <i class="fas fa-times"></i>
          </button>
        </nav>
        <main>
          <planner-page @change-title="changeTitle"></planner-page>
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
import PlannerPage from "@/components/viewer_pages/Planner.vue";

export default {
  components: { Home: () => import("@/views/Home.vue"), PlannerPage },
  data() {
    return { title: "" };
  },
  methods: {
    changeTitle(title) {
      console.log("title");
      this.title = title;
    }
  }
};
</script>
