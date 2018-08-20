<template>
  <caption class="detail-card">
    <slot></slot>

    <i class="fas fa-map-marker-alt pin" :style="{ left: x + 'px', top: y + 'px' }"></i>
  </caption>
</template>

<style lang="less" scoped>
caption {
  width: 250px;
  margin: 10px;
  border: 1px solid rgb(0, 0, 0, 0.8);
  border-radius: 2px;
}
.pin {
  position: absolute;
}
</style>


<script>
export default {
  name: "detail-card",
  props: ["pinX", "pinY", "imageRect"],
  computed: {
    x() {
      return this.imageRect.left + this.pinX * this.imageRect.width;
    },
    y() {
      return this.imageRect.top + this.pinY * this.imageRect.height;
    }
  }
};
</script>
