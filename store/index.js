import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations:{
            SET_POSTS:(state, payload) => {
                state.loadedPosts = payload
            },
            ADD_POST:(state, payload) => state.loadedPosts.push(payload),
            EDIT_POST:(state, payload) => {
                const postIndex = state.loadedPosts.findIndex(post => post.id === payload.id)
                state.loadedPosts[postIndex] = payload
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                return context.$axios.$get("/posts")
                            .then(data => {
                                vuexContext.commit("SET_POSTS", data)
                            })
                            .catch(e => context.error(e))
            },
            setPosts(vuexContext, posts){
                vuexContext.commit("SET_POSTS", posts)
            },
            addPost(vuexContext, postData){
                const createdPost = {
                    ...postData,
                    updatedDate:new Date(),
                    id:Math.random().toString().slice(2,12)
                }
                return this.$axios.$post("/posts", createdPost)
                    .then(data => {
                        vuexContext.commit("ADD_POST", data)
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost){
                return this.$axios.$put("/posts/" + editedPost.id, editedPost)
                    .then(data => {
                        vuexContext.commit("EDIT_POST", data)
                    })
                    .catch(e => console.log(e))
            }
        },
        getters:{
            loadedPosts:(state) => state.loadedPosts
        }
    })
}

export default createStore;