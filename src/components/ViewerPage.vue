<template>
  <article class="page">
    <span class="links" v-if="url !== ''">
      <a :href="url">Website</a>
      | 
      <a :href="repository">Code</a>
    </span>
    <summary class="description" v-html="paragraphs( escape(description) )"></summary>
    <aside class="sidebar left">
      <annotation 
        v-for="(annotation, index) in leftAnnotations" 
        :key="index"
        :header="annotation.header"
        :explanation="annotation.explanation"
        :pin-x="annotation.pinX" 
        :pin-y="annotation.pinY" 
        :image-rect="imageRect"
        :color="index % 2 === 0 ? 'red' : 'green'"
      ></annotation>
    </aside>
    <img :src="image" ref="annotatedImage">
    <aside class="sidebar right">
      <annotation 
        v-for="(annotation, index) in annotations.filter((annotation) => annotation.pinX >= 0.5)" 
        :key="index"
        :header="annotation.header"
        :explanation="annotation.explanation"
        :pin-x="annotation.pinX"
        :pin-y="annotation.pinY"
        :image-rect="imageRect"
        :color="index % 2 === 0 ? 'red' : 'green'"
      ></annotation>
    </aside>
  </article>
</template>

<style lang="less" scoped>
.page {
  display: grid;
  grid-template-columns: 300px auto 300px;
  background-color: white;

  .links {
    margin: 15px 50px 0;
    font-size: 20px;
    background-color: white;

    a {
      text-decoration: none;
      font-weight: 700;
    }
  }

  .description {
    grid-column: ~"1 / 4";
    display: flex;
    padding: 10px 25px 10px;
    line-height: 1.5;
  }

  .sidebar {
    display: flex;
    flex-direction: column;

    &.left {
      margin-right: 3px;
      border-radius: 0 10px 0 0;
      box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.2) inset;
    }
    &.right {
      margin-left: 3px;
      border-radius: 10px 0 0 0;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2) inset;
    }

    & > * {
      margin: 5px;
    }
  }
  img {
    width: 100%;
    background-color: rgb(220, 220, 230);
  }
}
</style>

<style>
.description > p {
  /* for dynamically generated content */
  flex: 1;
  margin: 0 25px 25px;
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
  props: ["image", "description", "annotations", "url", "repository"],
  data() {
    return {
      imageRect: new DOMRect()
    };
  },
  computed: {
    leftAnnotations() {
      return this.annotations
        .filter(annotation => annotation.pinX < 0.5)
        .sort(sortAnnotations);
    },
    rightAnnotations() {
      return this.annotations
        .filter(annotation => annotation.pinX >= 0.5)
        .sort(sortAnnotations);
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
  },
  methods: {
    escape(text) {
      return text.replace(/[&"<>]/g, function(c) {
        return {
          "&": "&amp;",
          '"': "&quot;",
          "<": "&lt;",
          ">": "&gt;"
        }[c];
      });
    },
    paragraphs(text) {
      var wrappedText = "";
      for (let line of text.split("\n")) {
        wrappedText += "<p>" + line.trim() + "</p>";
      }

      return wrappedText;
    }
  }
};
</script>
