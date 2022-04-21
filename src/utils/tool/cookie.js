/*
 * @Description:
 * @Author: Harry
 * @Date: 2021-12-02 22:33:52
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2021-12-18 20:53:35
 * @LastEditors: Harry
 */
const setCookie = function (name, value) {
  const expdate = new Date() // 初始化时间
  expdate.setTime(expdate.getTime() + 30 * 60 * 1000) // 时间单位毫秒
  document.cookie = name + '=' + escape(value) + ';expires=' + expdate.toUTCString() + ';path=/'
  // document.cookie = name + "=" + value + ";path=/";  // 时间默认为当前会话可以不要，但路径要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！
}
const getCookie = function (a) {
  // console.log(a)
  let d
  const b = document.cookie
  const c = b.split(';')
  // console.log(c);
  // console.log(escape('YWRtaW4='));
  for (let e = 0; e < c.length; e++) {
    const f = c[e].split('=')
    if (a === f[0].toString().trim()) {
      d = f[1]
      break
    }
  // eslint-disable-next-line no-void
  } if (void 0 === d || d == null) {
    return ''
  } else {
    const g = unescape(d.trim())
    return g
  }
}
const delCookie = function (a) {
  const b = new Date(0).toUTCString()
  document.cookie = a + '=;expires=' + b + ';path=/'
}
export default {
  setCookie,
  getCookie,
  delCookie
}
