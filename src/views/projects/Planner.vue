<template>
  <Viewer>
    <header slot="header">Flex Organizer</header>
    <template slot="left">
      <DetailCard :pin-x="0.035" :pin-y="0.09" :image-rect="imageRect">Drag Handle</DetailCard>
    </template>
    <template slot="image">
      <img src="@/assets/FuzzyPlanner.png" ref="annotatedImage">
    </template>
    <template slot="right">
    </template>
  </Viewer>
</template>

<script>
import Viewer from "@/components/Viewer";
import ViewerMixin from "@/mixins/Viewer";
import DetailCard from "@/components/DetailCard.vue";

export default {
  components: { Viewer, DetailCard },
  mixins: [ViewerMixin]
};
</script>
