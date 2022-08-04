import { createStore } from 'vuex'

export default createStore({
  state: {
    playList:[{
      al: {
        id: 146676574,
        name: "Honestly, Nevermind",
        pic: 109951167562954270,
        picUrl: "https://p2.music.126.net/ZKN2QcdhGJO6KZ95BCYpnQ==/109951167562954267.jpg",
        pic_str: "109951167562954267",

    },
      id: 1956743787
    }],
    playListIndex:0,//默认下标为0
    isbtnShow:true,//播放按钮的显示
    detailShow:false,//歌曲详情页的显示
},
  getters: {
  },
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value
    },
    updatePlayList:function(state,value){
      state.playList=value
      console.log(state.playList)
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex=value
    },
    updateDetailShow:function (state) {
      state.detailShow=!state.detailShow
    }
  },
  actions: {
  },
  modules: {
  }
})
