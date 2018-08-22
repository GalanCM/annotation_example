<template>
  <viewer-page :image="image" :annotations="annotations"></viewer-page>
</template>

<script>
import ViewerPage from "@/components/ViewerPage";

export default {
  components: { ViewerPage },
  data() {
    return {
      title: "Flex Planner",
      image: require("@/assets/FuzzyPlanner.png"),
      annotations: [
        {
          text: "New Task",
          pinX: 0.01,
          pinY: 0.34
        },
        {
          text: "Done",
          pinX: 0.9735,
          pinY: 0.085
        },
        {
          text: "Drag Handle",
          pinX: 0.03,
          pinY: 0.09
        }
      ]
    };
  },
  mounted() {
    this.$emit("change-title", this.title);
  }
};
</script>
