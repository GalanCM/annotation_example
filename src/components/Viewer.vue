<template>
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
        <slot name="header"></slot>
        <button class="close">
          <i class="fas fa-times"></i>
        </button>
      </nav>
      <main>
        <aside class="sidebar">
          <Annotation 
            v-for="(annotation, index) in leftAnnotations" 
            :key="index"
            :text="annotation.text"
            :pin-x="annotation.pinX" 
            :pin-y="annotation.pinY" 
            :image-rect="imageRect"
            :color="index % 2 === 0 ? 'red' : 'green'"
          ></Annotation>
        </aside>
        <slot></slot>
        <aside class="sidebar">
          <Annotation 
            v-for="(annotation, index) in annotations.filter((annotation) => annotation.pinX >= 0.5)" 
            :key="index"
            :text="annotation.text"
            :pin-x="annotation.pinX"
            :pin-y="annotation.pinY"
            :image-rect="imageRect"
            :color="index % 2 === 0 ? 'red' : 'green'"
          ></Annotation>
        </aside>
      </main>
    </section>
  </div>
</template>

<style lang="less" scoped>
.viewer {
  position: absolute;
  width: 100vw;
  height: 100vh;
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

main {
  display: flex;
  background-color: white;

  .sidebar {
    display: flex;
    flex-direction: column;
    width: 300px;

    & > * {
      margin: 5px;
      height: 100px;
    }
  }
  img {
    flex-grow: 1;
    width: 100%;
    background-color: rgb(220, 220, 230);
  }
}
</style>

<script>
import Annotation from "@/components/Annotation.vue";

function sortAnnotations(a, b) {
  return a.pinY - b.pinY;
}

export default {
  name: "viewer",
  components: { Annotation },
  props: ["annotations", "imageRect"],
  computed: {
    leftAnnotations() {
      return this.annotations.filter((annotation) => annotation.pinX < 0.5).sort(sortAnnotations);
    },
    rightAnnotations() {
      return this.annotations.filter((annotation) => annotation.pinX >= 0.5).sort(sortAnnotations);
    }
  }
};
</script>
