<template>
  <section class="home">
    <header>
      <span class="underline">
        Annotation<span class="example">viewer</span>
      </span>
    </header>
    <main>
      <p>
        You mentioned in the job description that the perfect candidate would enjoy challenges such as the 
        <a href="https://baymard.com/checkout-usability/benchmark/step-type/cart/3176-ikea-step-1">example page</a> 
        you provided. Well, when I saw that, I immediately though, "I <em>would</em> enjoy that." So I made my own version in Vue.
      </p>
      <p>
        I've included annotations for several past projects. Since annotated images are …less-than-ideal for discussing code, the carousel will focus on design aspects of the projects, with some code discussion. But this is a coding job first and formost, so please <a href="https://github.com/GalanCM/annotation_example">check out the code on Github</a>.

      </p>

      <router-link to="viewer" tag="button">Get Started</router-link>
      
      <p>
        It's still just a prototype, but it does three of <a href="" @click.prevent="showRequirements = !showRequirements">the four things that you asked for</a>{{ showRequirements ? ':' : '.' }}
      </p>
      <ul class="requirements" v-show="showRequirements">
        <li>
          The colored annotation pins overlaid the screenshot, the diagonally drawn lines connecting each pin to a card, and of course the cards placed on both sides of the screenshot — and how these cards position themselves to avoid overlaps, including dynamic repositioning upon opening / closing
        </li>
        <li>
          The modal overlay with a background page which is lazy-loaded. In other words, the background page content is not present in the HTML markup on page load — instead, it is dynamically fetched after the overlaid page has loaded to provide additional page context without slowing down initial page load.
        </li>
        <li>
          How all other pages in the overlay navigation “carousel” are pre-fetched (also in the background) so that when the user begins to navigate through the next / previous page examples, they appear instantaneously rather than having to download first.
        </li>
        <li>
          The overlay invokes URL changes without a page reload, supports native browser back-button behavior, and allows the user to navigate via keyboard controls (next + prev + esc buttons).
        </li>
      </ul>
      <p>
        Prefetching the carousel pages proved to be a biggest challenge, since the images are the biggest part of those pages, and Webpack prefers to not bundle them. I attempted to solve this by loading each image individually on carousel load, but it was hacky: you can see the code on <a href="https://github.com/GalanCM/annotation_example/tree/prefetch-carousel">this branch</a>. I have a few ideas of how to make this work, but they would take a good bit of work, and I don't have the time right now. Please question me on it, though.
      </p>
      <p>
        Hopefully I've caught your attention, and if you want to learn more about me, I've included a couple of links below.
      </p>
      <ul class="more">
        <li>
          <a href="https://www.galan-montgomery.com">My Portfolio</a>
        </li>
        <li>
          <a href="https://github.com/GalanCM">Github Profile</a>
        </li>
        <li>
          <a href="/CV – Galan Montomgery.pdf">CV</a>
        </li>
      </ul>
    </main>
  </section>
</template>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
}
header {
  height: 40px;
  padding: 3px 10px 0;
  font-size: 40px;
  font-weight: 700;
  text-align: left;
  color: #820a0a;
  background-color: #f2f2ff;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1) inset;

  .underline {
    display: inline-block;
    height: 38px;
    padding: 0 10px 0 12px;
    border-bottom: 2px solid #001f3d;
  }
  .example {
    color: #001f3d99;
  }
}

main {
  max-width: 720px;
  margin: auto;
  padding: 0px 20px;
  font-size: 18px;
}

p {
  line-height: 1.5;
  margin: 10px 0;
}

.requirements {
  font-size: 16px;
}

button {
  padding: 5px 10px;
  margin: 25px 0 25px 10px;
  border: none;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 500;
  background-color: rgba(50, 50, 255);
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.more {
  margin: 10px 0 100px;
  padding-left: 0;

  li {
    display: block;
    margin-bottom: 8px;

    a {
      text-decoration: none;
    }
  }
}
</style>

<script>
export default {
  name: "home",
  data() {
    return {
      showRequirements: false
    };
  }
};
</script>
