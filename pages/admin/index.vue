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
export default {
    layout:"admin",
    asyncData(context){
        return context.$axios.$get("/posts")
                .then(data => {
                    return {
                        loadedPost:data
                    }
                })
                .catch(e => context.error(e))
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
