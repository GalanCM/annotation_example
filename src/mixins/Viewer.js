export default {
  data() {
    return {
      imageRect: new DOMRect()
    };
  },
  mounted() {
    let updateImageRect = () => {
      this.imageRect = {
        width: this.$refs.annotatedImage.offsetWidth,
        height: this.$refs.annotatedImage.offsetHeight,
        top: this.$refs.annotatedImage.offsetTop,
        left: this.$refs.annotatedImage.offsetLeft
      };
    };

    setTimeout(updateImageRect, 500);

    window.addEventListener("resize", updateImageRect);
  }
};
