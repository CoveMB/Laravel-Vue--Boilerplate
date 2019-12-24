<template>
  <nav class="navbar bg-white border-bottom navbar-light">
    <router-link
      class="navbar-brand mr-auto"
      active-class="active"
      :to="{name: 'firstcomponent'}"
      exact
    >
      FirstComponent
    </router-link>
  </nav>
</template>
<script>
export default {

};
</script>
