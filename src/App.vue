<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style = "color : #ffffff">Vuetify</a>
      <div class="collapse navbar-collapse" id="navbarNav" style="margin-left: 1150px;">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" >Popular</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/topRated" class="nav-link">Top rated</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
      <div class="container" style="background-color:#9e9e9e; height:auto">
      <router-view/>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 0px;
}
</style>
