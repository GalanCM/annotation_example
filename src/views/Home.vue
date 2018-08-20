<template>
  <section class="home">
    <header>
      <span class="underline">
        Annotation<span class="example">example</span>
      </span>
    </header>
    <main>
      <p>
        This is a quick reproduction of the 
        <a href="https://baymard.com/checkout-usability/benchmark/step-type/cart/3176-ikea-step-1">example page</a> 
        provided by Baymard in there job description for their Front-End Developer job position. It's intended to show that I can 
        do the level of work they're asking for. 
      </p>
      <p>
        It's by no means a finished product. I'll attempt to fix any bugs that I catch and keep the code clean, but I can't 
        promise to put in the work necessary to make it production ready.
      </p>
      <p>
        <em>With those caveats in mind:</em>
      </p>
      <router-link to="viewer" tag="button">Get Started</router-link>
    </main>
    <router-view/>
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
  color: rgba(200, 50, 50, 0.7);
  background-color: rgb(230, 230, 240);
  -webkit-text-stroke: 2px rgba(200, 30, 30, 0.8);

  .underline {
    display: inline-block;
    height: 38px;
    padding: 0 10px 0 12px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.9);
  }
  .example {
    -webkit-text-stroke: 0px;
    color: rgba(50, 50, 100, 0.7);
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
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-size: 24px;
  font-weight: 500;
  background-color: rgba(50, 50, 255);
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>

<script>
export default {
  name: "home"
};
</script>
