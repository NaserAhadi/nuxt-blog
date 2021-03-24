import Vuex from "vuex";


const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations:{
            SET_POSTS:(state, payload) => state.loadedPosts = payload
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit("SET_POSTS", [
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
                          ])
                        resolve();
                    })
                })
            },
            setPosts(vuexContext, posts){
                vuexContext.commit("SET_POSTS", posts)
            }
        },
        getters:{
            loadedPosts:(state) => state.loadedPosts
        }
    })
}

export default createStore;