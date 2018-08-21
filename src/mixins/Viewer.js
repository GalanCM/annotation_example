export default {
  data() {
    return {
      imageRect: new DOMRect()
    };
  },
  mounted() {
    let updateImageRect = () => {
      this.imageRect = this.$refs.annotatedImage.getBoundingClientRect();
    };
    setTimeout(updateImageRect, 200);

    window.addEventListener("resize", updateImageRect);
  }
};
