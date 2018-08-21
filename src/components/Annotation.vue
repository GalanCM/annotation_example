<template>
  <caption class="detail-card" :class=" 'color-' + color">
    {{text}}

    <svg
      :height="Math.abs(targetY - startY) + 10"
      :width="Math.abs(targetX - startX)"
      :style="{ left: startX + 'px', top: startY - 5 + 'px', transform: flip }"
    >
      <line x1="0" y1="5" :x2="Math.abs(targetX - startX)" :y2="Math.abs(targetY - startY) + 5" stroke="white"/>
      <line x1="0" y1="5" :x2="Math.abs(targetX - startX)" :y2="Math.abs(targetY - startY) + 5"/>
    </svg>
    <i class="fas fa-map-marker-alt pin" :style="{ left: targetX + 'px', top: targetY + 'px' }"></i>
  </caption>
</template>

<style lang="less" scoped>
caption {
  border: 2px solid rgb(0, 0, 0, 0.8);
  border-radius: 2px;

  &.color-red {
    border-color: red;
    .pin {
      color: red;
    }
    line {
      stroke: red;
    }
  }
  &.color-green {
    border-color: lime;
    .pin {
      color: lime;
    }
    line {
      stroke: lime;
    }
  }
}
.pin {
  position: absolute;
  transform: translate(-50%, -100%);
  font-size: 14px;
  text-shadow: -1px 1px 3px rgba(0, 0, 0, 0.3);
}

svg {
  position: absolute;
  transform-origin: 0 5px;

  line {
    stroke: black;
    stroke-width: 2px;
    stroke-dasharray: 10 6;
    opacity: 0.4;
    filter: drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.2));
  }
}
</style>


<script>
export default {
  name: "detail-card",
  props: ["text", "pinX", "pinY", "imageRect", "color"],
  data() {
    return {
      rect: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      }
    };
  },
  computed: {
    startX() {
      if (this.side === "left") {
        return this.rect.left + this.rect.width;
      } else {
        return this.rect.left;
      }
    },
    startY() {
      return this.rect.top + this.rect.height / 2;
    },
    targetX() {
      return this.imageRect.left + this.pinX * this.imageRect.width;
    },
    targetY() {
      return this.imageRect.top + this.pinY * this.imageRect.height;
    },
    flip() {
      let flip =
        (this.targetY - this.startY < 0 ? "scaleY(-1)" : "") +
        " " +
        (this.targetX - this.startX < 0 ? "scaleX(-1)" : "");
      flip = flip === " " ? "" : flip;

      return flip;
    }
  },
  mounted() {
    this.side = this.pinX < 0.5 ? "left" : "right";

    let updateRect = () => {
      this.rect = {
        width: this.$el.offsetWidth,
        height: this.$el.offsetHeight,
        top: this.$el.offsetTop,
        left: this.$el.offsetLeft
      };
    };
    setTimeout(updateRect, 200);

    window.addEventListener("resize", updateRect);
  }
};
</script>
