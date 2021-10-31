<template>
  <div>
    <LastPosts />
    <Posts />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  head() {
    return {
      titleTemplate: "%s",
      title: "Berke Batur Blog",
    };
  },
  async asyncData({ store, $axios }) {
    const posts = await $axios.$get("http://localhost:3001/posts");
    store.dispatch('setPageCount', posts)
  },
  mounted() {
    this.$store.dispatch('setPosts');
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
