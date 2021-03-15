<template>
    <nuxt-link :to="'/posts/' + id"> 
        <article class="post-preview">
          <div 
            class="post-thumbnail" 
            :style="{backgroundImage :'url('+ `${require('@/assets/image/'+thumbnail)}` + ')'}"
        ></div>
          <div class="post-content">
            <h1>{{ title }}</h1>
            <p>{{ previewText }}</p>
          </div>
        </article>
      </nuxt-link>
</template>

<script>
export default {
    name: "PostPreview",
    props:{
        id:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        previewText:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            test:'@/assets/image/tech1.png'
        }
    }
}
</script>

<style scoped>
.post-preview {
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  min-width: 22rem;
  margin: 1rem 0; 
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

@media (min-width:850px){
  .post-preview {
    width: 30rem;
    margin: 1rem;
  }
}
</style>