function remSize(){
    //拿到设备的宽度，从而设置rem
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if(deviceWidth>=750){
        deviceWidth=750
    }
    if(deviceWidth<=320){
        deviceWidth=320
    }
    //750px-->1rem==100px,
    document.documentElement.style.fontSize=(deviceWidth/7.5)+'px'
    //字体大小 15px
    document.querySelector('body').style.fontSize=0.3+"rem"
}
remSize()
//当窗口发生变化调用
window.onresize=function(){
   remSize()
}