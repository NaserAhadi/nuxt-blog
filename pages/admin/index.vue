<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="createNewPost">
                Create Post
            </AppButton>
        </section>
        <section class="existing-posts">
            <h1>Existing Posts</h1>
            <PostList 
                isAdmin
                :posts="loadedPost"
            />
        </section>
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList"
import AppButton from "@/components/UI/AppButton"
export default {
    layout:"admin",
    components:{
        PostList,
        AppButton
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
    },
    methods:{
        createNewPost(){
            this.$router.push('/admin/new-post')
        }
    }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
