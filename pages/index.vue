<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />     
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState(["loadedPosts"])
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("@/assets/image/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column !important;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

@media (min-width:850px){
  .featured-posts{
    flex-direction: row !important;
    justify-content: space-around;
  }
}
</style>
