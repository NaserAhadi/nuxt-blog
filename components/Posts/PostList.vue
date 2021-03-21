<template>
    <section class="post-list">
      <PostPreview 
        id="1"
        :is-admin="isAdmin"
        title="Post One"
        previewText="This is First post"
        thumbnail="tech1.png"
      />
      <PostPreview 
        id="2"
        :is-admin="isAdmin"
        title="Post Two"
        previewText="This is Seconde post"
        thumbnail="tech2.png"
      />
      <PostPreview 
        id="3"
        :is-admin="isAdmin"
        title="Post Three"
        previewText="This is Third post"
        thumbnail="tech3.png"
      />
    </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview"
export default {
  components:{
    PostPreview
  },
  props:{
    isAdmin:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column !important;
}
@media (min-width:850px){
  .post-list{
    flex-direction: row !important;
    justify-content: space-around;
  }
}
</style>