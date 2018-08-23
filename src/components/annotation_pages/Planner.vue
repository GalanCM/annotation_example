<template>
  <viewer-page :image="image" :annotations="annotations"></viewer-page>
</template>

<script>
import ViewerPage from "@/components/ViewerPage";
import Pages from "@/pages.js";

var page = Pages.find( page => page.name === "planner" );

export default {
  components: { ViewerPage },
  computed: {
    image() {
      return page.contents.image;
    },
    annotations() {
      return page.contents.annotations;
    }
  }
};
</script>
