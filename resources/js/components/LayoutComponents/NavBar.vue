<template>
  <nav class="navbar bg-white border-bottom navbar-light">
    <p
      class="navbar-brand mr-auto"
    >
      Navbar
    </p>
    <router-link
      class="btn nav-btn"
      active-class="active"
      :to="{name: 'welcomecomponent'}"
      exact
    >
      FirstComponentLink
    </router-link>
  </nav>
</template>
<script>
export default {

};
</script>
