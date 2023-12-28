<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <!-- header -->
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div class="collapse navbar-collapse">
          <router-link
            :to="{ name: 'home' }"
            class="navbar-brand" href="#">
            Navbar
          </router-link>
          <router-link
            class="nav-item"
            to="/">Home</router-link>
          <router-link
            class="nav-item"
            to="/about">About</router-link>
          <router-link
            class="nav-item"
            :to="{ name: 'MyPlayground' }">
            My Playground
          </router-link>
        </div>
      </div>
    </nav>
  </header>

  <!-- content -->
  <div class="mt-5 mb-5 pt-5 container">
    <router-view />
  </div>

  <!-- footer -->
  <footer>
    <div class="container">
      <p class="mt-1">
        this is ma footer
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
header {
  padding: 0;
  position: absolute;
  width: 100%;
  top: 0;

  nav {
    line-height: 1.5;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin: 0 0 1rem 0;
    border-bottom: 1px solid black;

    .nav-item {
      text-decoration: none;
      font-size: 15px;
    }

    a.router-link-exact-active {
      color: var(--color-text);

      :hover {
        background-color: transparent;
      }
    }

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);

      :first-of-type {
        border: 0;
      }
    }
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

footer {
  border-top: 1px solid black;
}
</style>
