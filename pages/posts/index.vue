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
  fetch(context){
    if(context.store.state.loadedPosts.length>0){
      return null
    }
    return new Promise((resolve, reject)=> {
      setTimeout(() => {
        resolve({
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
        })
        reject(new Error())
    },1000)
    })
    .then(data => {
      context.store.commit("SET_POSTS", data.loadedPost)
    })
    .catch(e => {
        context.error(e)
      })    
  },
  computed:{
    loadedPost(){
      return this.$store.getters.loadedPosts
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