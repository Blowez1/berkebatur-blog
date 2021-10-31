<template>
  <Post />
</template>
<script>
export default {
  async asyncData({ params, $axios, store }) {
    let post = await $axios.$get(
      `http://localhost:3001/posts/?slug=${params.slug}`
    );
    post = post[0]

    store.dispatch("setPostAction", post);
    return { post };
  },
  head() {
    return {
      title: this.$data.post.title,
      meta: [
        {
          hid: "description",
          property: "description",
          name: "description",
          content: this.$data.post.description,
        },
        {
          hid: "og:title",
          property: "og:title",
          name: "og:title",
          content: this.$data.post.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          name: "og:description",
          content: this.$data.post.description,
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          name: "twitter:title",
          content: this.$data.post.title,
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          name: "twitter:description",
          content: this.$data.post.description,
        }
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>