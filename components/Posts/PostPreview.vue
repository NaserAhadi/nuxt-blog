<template>
    <nuxt-link :to="postLink"> 
        <article class="post-preview">
          <div 
            class="post-thumbnail" 
            :style="{backgroundImage :'url('+ `${require('@/assets/image/'+thumbnail)}` + ')'}"
          />
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
        },
        isAdmin:{
          type:Boolean,
          required:true
        }
    },
    computed:{
      postLink(){
        return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
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
  border-radius: 0.5rem;
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  border-radius: 0.5rem 0.5rem 0 0;
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