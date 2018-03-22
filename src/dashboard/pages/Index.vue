<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <table class="table table-striped">
      <thead>
        <tr>
        <th>Thumb</th>
        <th>Name</th>
        <th>Excerpt</th>
        <th>Author</th>
        <th>Category</th>
        <th>Edit</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="post in fetchPosts()" :key="post.id" @click="editPost(post.id)">
          <td><img :src="post.imageUrl" alt="" width="50" height="50"></td>
          <td>{{post.title}}</td>
          <td>{{post.excerpt}}</td>
          <td>{{post.authorId}}</td>
          <td>{{post.categoryId}}</td>
          <td>edit</td>
        </tr>
      </tbody>
    </table>
      </div>
      <div class="col-12 text-right">
        <router-link to="/dashboard/posts/add" class="btn btn-primary">Add Post</router-link>
      </div>
    </div>
    
    <b-table :data="fetchPosts()" :columns="columns"></b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'title',
                        label: 'Title',
                    },
                    {
                        field: 'excerpt',
                        label: 'Excerpt',
                    },
                    {
                        field: 'categoryId',
                        label: 'Category'
                    },
                    {
                        field: 'authorId',
                        label: 'Author',
                    }
                ]
    }
  },
  created () {
    this.$store.dispatch("fetchPosts")
  },
   methods:{
    fetchPosts() {
      return this.$store.state.posts.posts
    },
    editPost (e) {
      console.log(e)
    }
   }
}
</script>
<style lang="scss">
  tr:hover td{background: #ccc;cursor: pointer;}
</style>
