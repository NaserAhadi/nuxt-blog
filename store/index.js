import Vuex from "vuex";
import axios from "axios";

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
                return axios.get(process.env.baseUrl + "/posts")
                            .then(res => {
                                vuexContext.commit("SET_POSTS", res.data)
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
                return axios.post(process.env.baseUrl + "/posts", createdPost)
                    .then(res => {
                        vuexContext.commit("ADD_POST", res.data)
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost){
                return axios.put(process.env.baseUrl + "/posts" + editedPost.id, editedPost)
                    .then(res => {
                        vuexContext.commit("EDIT_POST", res.data)
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