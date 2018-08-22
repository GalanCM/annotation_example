<template>
  <article class="page">
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
    <img :src="image" ref="annotatedImage">
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
  </article>
</template>

<style lang="less" scoped>
.page {
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
  props: ["image", "annotations"],
  data() {
    return {
      imageRect: new DOMRect()
    };
  },
  computed: {
    leftAnnotations() {
      return this.annotations.filter((annotation) => annotation.pinX < 0.5).sort(sortAnnotations);
    },
    rightAnnotations() {
      return this.annotations.filter((annotation) => annotation.pinX >= 0.5).sort(sortAnnotations);
    }
  },
  mounted() {
    let updateImageRect = () => {
      this.imageRect = {
        width: this.$refs.annotatedImage.offsetWidth,
        height: this.$refs.annotatedImage.offsetHeight,
        top: this.$refs.annotatedImage.offsetTop,
        left: this.$refs.annotatedImage.offsetLeft
      };
    };

    setTimeout(updateImageRect, 500);

    window.addEventListener("resize", updateImageRect);
  }
};
</script>
