<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url("/normalize.css");
</style>


<style lang="less">
#app {
  font-family: "Lato", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(30, 10, 10);
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
header {
  font-family: "Raleway", Helvetica, sans-serif;
}

p {
  margin: 5px;
}
</style>
