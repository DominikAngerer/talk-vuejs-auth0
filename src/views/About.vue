<template>
  <div class="about">
  <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="https://a.storyblok.com/f/39898/1024x1024/dea4e1b62d/vue-js_logo-svg.png" width="40" height="40">
        </a>
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <div v-if="$auth.user">
          <img :src="$auth.user.picture" width="30" height="30">
          <span class="text-muted font-weight-light px-2">{{$auth.user.name}}</span>
          <button type="button" class="btn btn-outline-secondary btn-sm" @click="$auth.logout()">Logout</button>
        </div>
      </div>
    </nav>
     <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">This is an about page</h1>
      </div>
    </div>
  </div>
</template>
