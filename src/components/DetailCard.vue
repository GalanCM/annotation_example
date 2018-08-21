<template>
  <caption class="detail-card">
    <slot></slot>

    <svg :style="{ left: startX + 'px', top: startY + 'px' }">
      <line x1="0" y1="0" :x2="targetX - startX" :y2="targetY - startY" stroke="black" stroke-width="2px" stroke-dasharray="6 4" />
    </svg>
    </svg>
    <i class="fas fa-map-marker-alt pin" :style="{ left: targetX + 'px', top: targetY + 'px' }"></i>
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
  transform: translate(-50%, -100%);
}

svg {
  position: absolute;
}
</style>


<script>
export default {
  name: "detail-card",
  props: ["pinX", "pinY", "imageRect"],
  data() {
    return {
      rect: new DOMRect()
    };
  },
  computed: {
    startX() {
      return this.rect.left + this.rect.width;
    },
    startY() {
      return this.rect.top + this.rect.height / 2;
    },
    targetX() {
      return this.imageRect.left + this.pinX * this.imageRect.width;
    },
    targetY() {
      return this.imageRect.top + this.pinY * this.imageRect.height;
    }
  },
  mounted() {
    let updateRect = () => {
      this.rect = this.$el.getBoundingClientRect();
    };
    setTimeout(updateRect, 200);

    window.addEventListener("resize", updateRect);
  }
};
</script>
