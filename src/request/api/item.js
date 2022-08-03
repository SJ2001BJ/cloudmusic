import service from "@/request";
import data from "bootstrap/js/src/dom/data";

//获取歌单详情页的数据
export function getMusicItemList(data){
    return service({
        method:'get',
        url:`/playlist/detail?id=${data}`
    })
}
//获取歌单的所有歌曲
export function getItemList(data){
    return service({
        method:'get',
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}