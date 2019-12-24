<template>
  <div>
    <NavBar />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import NavBar from './components/LayoutComponents/NavBar.vue';
import Footer from './components/LayoutComponents/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
