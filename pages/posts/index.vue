<template>
    <div class="posts-page">
        <PostList 
          :posts="loadedPost"
        /> 
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList"
export default {
  components:{
    PostList
  },
  data(){
    return {
        loadedPost:[
        {
          id:"1",
          title:"First Post",
          previewText:"This is First post",
          thumbnail:"tech1.png"
        },
        {
          id:"2",
          title:"Seconde Post",
          previewText:"This is seconde post",
          thumbnail:"tech2.png"
        },
        {
          id:"3",
          title:"Third Post",
          previewText:"This is third post",
          thumbnail:"tech3.png"
        }
      ]
    }
  }
}
</script>

<style scoped>
.posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>