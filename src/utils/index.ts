/**
 * @param {*} fn 要执行的函数
 * @param {*} delay 延迟时间
 * @returns 
 */
export const debounce = function (fn:Function, delay:number) {
    // 1.定义一个定时器, 保存上一次的定时器
    let timer:any = null
   
    // 2.真正执行的函数
    const _debounce = function () {
      // 取消上一次的定时器
      if (timer) clearTimeout(timer)
      // 延迟执行
      timer = setTimeout(() => {
        // 外部传入的真正要执行的函数
        fn()
      }, delay)
    }
    return _debounce
  }
  export const reFlushWindows = ()=>{
    //  window.location.reload()
  }
  
  export const getRandomString = (length:number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const getVersion = async () => {
  const url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/version.json`;
  // let url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/word/it-privice.docx`;
  const response = await fetch(url);
  const res = await response.json();
  if(res.version !== window.localStorage.getItem("version")){
    window.localStorage.setItem("version",res.version);
    window.location.reload();
  }
  return res;
}

