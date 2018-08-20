<template>
  <div class="viewer">
    <section class="modal">
      <nav>
        <button>
          <i class="fas fa-chevron-left"></i>
        </button>
        <span>
          Sample #1
        </span>
        <button>
          <i class="fas fa-chevron-right"></i>
        </button>
        <header>
          Flex Organizer
        </header>
        <button class="close">
          <i class="fas fa-times"></i>
        </button>
      </nav>
      <main>
        <aside>
          <DetailCard :pin-x="0.035" :pin-y="0.06" :image-rect="imageRect">Drag Handle</DetailCard>
        </aside>
        <img src="@/assets/FuzzyPlanner.png" ref="annotatedImage">
        <aside></aside>
      </main>
    </section>
  </div>
</template>

<style lang="less" scoped>
.viewer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 95%;
  width: calc(100% - 100px);
  margin: 5%;
  margin: calc(50px);
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

nav {
  display: flex;
  background-color: rgb(230, 230, 240);
  height: 40px;
  padding: 5px;

  > * {
    display: inline-block;
    border: none;
    background-color: transparent;
    margin: auto;
  }
  button {
    height: 100%;
    font-size: 26px;
    padding: 0 15px;
    cursor: pointer;
  }
  header {
    font-size: 20px;
    font-weight: 600;
    flex-grow: 1;
  }
}

main {
  display: flex;
  background-color: white;

  aside {
    min-width: 270px;
  }
  img {
    padding: 5px 10px;
    flex-grow: 1;
    background-color: rgb(220, 220, 230);
  }
}
</style>

<script>
import DetailCard from "@/components/DetailCard.vue";

export default {
  name: "viewer",
  components: { DetailCard },
  data() {
    return {
      imageRect: null
    };
  },
  mounted() {
    let updateImageRect = () => {
      this.imageRect = this.$refs.annotatedImage.getBoundingClientRect();
    };
    updateImageRect();

    window.addEventListener("resize", updateImageRect);
  }
};
</script>
