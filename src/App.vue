<template>
  <div id="app">
    <b-container fluid>
      <b-jumbotron text-variant="center" class="header">
        <h2>合肥市锦城小学2022年新生分班信息查询</h2>
      </b-jumbotron>
      <b-row>
        <b-col md="4" offset-md="4" class="form-area">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {

};
</script>

<style>
#app {
  height: 100vh;
}
#app::after {
  content: "";
  background-image: url("./assets/bg.webp");
  background-size: cover;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
.form-area {
  background-color: opacity;
  padding: 40px;
  border-radius: 5px;
  opacity: 1;
}
</style>