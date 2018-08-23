<template>
  <viewer-page :image="image" :annotations="annotations"></viewer-page>
</template>

<script>
import ViewerPage from "@/components/ViewerPage";
import Pages from "@/pages.js";

var page = Pages.find(page => page.name === "case-study");

export default {
  components: { ViewerPage },
  data() {
    return {
      image: null
    };
  },
  computed: {
    annotations() {
      return page.contents.annotations;
    }
  },
  created() {
    console.log("x");
    if (typeof page.contents.image === "function") {
      page.contents
        .image()
        .then(result => fetch(result.default))
        .then(result => result.blob())
        .then(imageBlob => {
          console.log(this, URL.createObjectURL(imageBlob));
          page.contents.image = URL.createObjectURL(imageBlob);
          this.image = page.contents.image;
        });
      // fetch(page.contents.image().default)
      // .then( response => console.log(response))//.blob() )
      // .then( imageBlob => { createImageBitmap(imageBlob) }
      // .then( image => {
      //   console.log(image, 'x');
      // })
      // .then( imageBlob => {
      //   console.log(this, URL.createObjectURL(imageBlob))
      //   page.contents.image = URL.createObjectURL(imageBlob);
      //   this.image = page.contents.image;
      // });
    } else {
      this.image = page.contents.image;
    }

    setTimeout(() => {
      for (let page of Pages) {
        if (typeof page.contents.image === "function") {
          page.contents
            .image()
            .then(result => fetch(result.default))
            .then(result => result.blob())
            .then(imageBlob => {
              console.log(this, URL.createObjectURL(imageBlob));
              page.contents.image = URL.createObjectURL(imageBlob);
            });
        }
      }
    }, 2000);
  }
};
</script>
