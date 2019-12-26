<template>
  <nav>
    <h2>
      Navbar
    </h2>
    <router-link
      class="nav-link"
      active-class="active"
      :to="{name: 'welcomecomponent'}"
      exact
    >
      WelcomeComponentLink
    </router-link>
  </nav>
</template>
<script>
export default {

};
</script>
<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 20px;
  border-bottom: 1px solid #636b6f;
}
.nav-link {
  text-decoration: none;
  cursor: pointer;
  color: #636b6f;
}
</style>
