<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm 
                :post="loadedPost"
                @submit="onSubmitted"
            />
        </section>
    </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm"
import axios from "axios";

export default {
    layout:"admin",
    components:{
        AdminPostForm
    },
    asyncData(){
        return axios.get(
                        "https://nuxt-blog-426f8-default-rtdb.firebaseio.com/posts/" + 
                            context.params.id + 
                            ".json"
                )
                .then(res => {
                    return {
                        loadedPost : res.data
                    }
                })
                .catch(e => context.error(e))
    },
    methods:{
        onSubmitted(editedPost){
            axios.put("https://nuxt-blog-426f8-default-rtdb.firebaseio.com/posts/" + 
                this.$route.params.id + 
                ".json", editedPost)
                .then(() => this.$router.push("/admin"))
                .catch(e => console.log(e))
        }
    }
}
</script>


<style scoped>
.update-form{
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .update-form{
        width: 500px;
    }
}
</style>