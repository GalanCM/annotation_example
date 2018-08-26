<template>
  <caption class="detail-card" :class="[ 'color-' + color, side ]">
    <header>{{ header }}</header>
    <main>{{ explanation }}</main>
    <div class="color-bar"></div>
    <svg
      :height="Math.abs(targetY - startY) + 10"
      :width="Math.abs(targetX - startX)"
      :style="{ left: startX + 'px', top: startY - 5 + 'px', transform: flip }"
      v-show="imageRect.width > 0"
    >
      <line x1="0" y1="5" :x2="Math.abs(targetX - startX)" :y2="Math.abs(targetY - startY) + 5" class="background-stroke"/>
      <line x1="0" y1="5" :x2="Math.abs(targetX - startX)" :y2="Math.abs(targetY - startY) + 5"/>
    </svg>
    <i class="fas fa-map-marker-alt pin" :style="{ left: targetX + 'px', top: targetY + 'px' }" v-show="imageRect.width > 0"></i>
  </caption>
</template>

<style lang="less" scoped>
caption {
  display: grid;
  border-radius: 2px;
  background-color: rgb(240, 240, 240);
  --red: rgb(215, 10, 10);
  --green: rgb(10, 215, 10);

  &.color-red {
    .color-bar {
      background-color: var(--red);
    }
    .pin {
      color: var(--red);
    }
    line {
      stroke: var(--red);
    }
  }
  &.color-green {
    .color-bar {
      background-color: var(--green);
    }
    .pin {
      color: var(--green);
    }
    line {
      stroke: var(--green);
    }
  }

  &.left {
    grid-template-columns: auto 5px;
    grid-template-rows: max-content auto;
    margin-left: 0 !important;
    border-radius: 0 8px 0 0;

    .color-bar {
      grid-column: 2;
    }
  }
  &.right {
    grid-template-columns: 5px auto;
    grid-template-rows: max-content auto;
    margin-right: 0 !important;
    border-radius: 8px 0 0 0;

    .color-bar {
      grid-column: 1;
    }
  }

  header {
    color: white;
    background-color: #aaa;
    font-weight: 700;
    padding: 3px;
  }

  main {
    padding: 4px 10px 8px;
    text-align: left;
    font-size: 15px;
  }

  .color-bar {
    grid-row: ~"1 / 2 span";
    border-radius: inherit;
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
    // filter: drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.2));

    &.background-stroke {
      stroke: white;
      stroke-width: 3px;
      opacity: 0.5;
    }
  }
}
</style>


<script>
export default {
  name: "annotation",
  props: ["header", "explanation", "pinX", "pinY", "imageRect", "color"],
  data() {
    return {
      rect: {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      },
      side: null
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
