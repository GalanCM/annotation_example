<template>
  <viewer-page :image="image" :description="description" :annotations="annotations"></viewer-page>
</template>

<script>
import ViewerPage from "@/components/ViewerPage";
import Pages from "@/pages.js";

var page = Pages.find(page => page.name === "getloaded-mobile");

export default {
  components: { ViewerPage },
  computed: {
    image() {
      return page.contents.image;
    },
    description() {
      return page.contents.description;
    },
    annotations() {
      return page.contents.annotations;
    }
  }
};
</script>
