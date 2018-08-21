<template>
  <Viewer :annotations="annotations" :image-rect="imageRect">
    <header slot="header">Flex Organizer</header>

    <img src="@/assets/FuzzyPlanner.png" ref="annotatedImage">
  </Viewer>
</template>

<script>
import Viewer from "@/components/Viewer";
import ViewerMixin from "@/mixins/Viewer";

export default {
  data() {
    return {
      annotations: [
        {
          text: "New Task",
          pinX: 0.03,
          pinY: 0.36
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
  components: { Viewer },
  mixins: [ViewerMixin]
};
</script>
