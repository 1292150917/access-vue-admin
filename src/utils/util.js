// import { listData } from './moveData'
import {Message} from "element-ui";

// 退出登录
export function logOut() {
  localStorage.removeItem('token')
}

// 上传文件校验
export function uploadFileCheck(file, optionFiles, imageMaxSize) {
  let fileSize = file.size / 1024; // kb
  let imgList = ['.jpg', '.png', '.jpeg']
  let type = file.name.substring(file.name.lastIndexOf("."))

  if(optionFiles.indexOf(type) == -1) {
    Message.error('文件格式不符合文件上传规范！');
    return false
  }

  // 图片大小限制
  if(imgList.indexOf(type) !== -1 && fileSize > imageMaxSize) {
    Message.error(`图片容量超过最大限制，当前图片${parseInt(fileSize)}kb，最大${imageMaxSize}kb`);
    return false;
  }
}

// 滚动到某个地方
export function toScrollTop(elementDom) {
  document.querySelector(elementDom).scrollIntoView(true)
}

// 全屏
export function fullScreen(){
  let el = document.documentElement;
  let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

  if (rfs) {
    rfs.call(el);
  }else if (typeof window.ActiveXObject !== "undefined") {
    //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
    let wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}

//退出全屏
export function exitScreen(){
  let el = document;
  let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;

  if (cfs) {
    cfs.call(el);
  }
  else if (typeof window.ActiveXObject !== "undefined") {
    //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
    let wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}