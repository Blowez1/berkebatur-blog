<template>
  <section id="posts" class="section-m-top">
    <div class="section--title">Gönderiler</div>

    <div class="posts" ref="posts">
      <nuxt-link
        v-for="post in posts"
        :key="post.id"
        :to="`/post/${post.slug}`"
        class="posts-item"
      >
        <div class="posts-item-img">
          <img src="/img/blog-img.jpg" loading="lazy" alt="" />
        </div>
        <div class="posts-item-content">
          <h3>
            {{ post.title }}
          </h3>
          <p>
            {{ post.description }}
          </p>
        </div>
      </nuxt-link>
    </div>
    <div
      class="d-flex justify-content-center mt-4"
      v-if="pages > 1 && pages !== -1"
    >
      <div class="pagination">
        <button
          class="pagination-item"
          v-for="i in pages"
          :class="page === i && 'active'"
          :key="i"
          :disabled="page === i"
          @click="changePage(i)"
        >
          {{ i }}
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState(["posts", "pages", "page"]),
  methods: {
    ...mapActions(["changePage"]),
  },
};
</script>