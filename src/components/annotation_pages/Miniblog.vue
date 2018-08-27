<template>
  <viewer-page :image="image" :description="description" :annotations="annotations" :url="url" :repository="repository"></viewer-page>
</template>

<script>
import ViewerPage from "@/components/ViewerPage";
import Pages from "@/pages.js";

var page = Pages.find(page => page.name === "miniblog");

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
    },
    url() {
      return page.url;
    },
    repository() {
      return page.repository;
    }
  }
};
</script>
