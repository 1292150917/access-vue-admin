/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-12 09:16:04
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-13 08:48:00
 */
export default (Vue) => {
  // 按钮权限（可见性）
  Vue.directive('allow', {
    inserted: (el, binding, vnode) => {
      let { permission } = vnode.context.$route.meta;

      if (permission && permission.length > 0) {
        let res = permission.filter((item) => {
          return item.permission_mark === binding.value;
        });

        if (res.length === 0) {
          el.parentNode.removeChild(el)
        }
      } else {
        el.parentNode.removeChild(el)
      }
    }
  })

  // table的拖拉
  Vue.directive('table-drag', {
    inserted: (el, binding, vnode) => {
      setTimeout(() => {
        let srcdiv = null;
        let temp = null;
        Array.from(document.querySelectorAll('.el-table__header-wrapper tr th')).map((v, i) => {
          v.setAttribute('targ-key', i + 1)
          v.setAttribute('draggable', true)
          v.style.cursor = 'pointer'
          v.ondragstart = function ($event) {
            temp = this.innerHTML;
            srcdiv = this;
          }
          v.ondragover = function ($event) {
            $event.preventDefault();
          }
          v.ondrop = function ($event) {
            $event.preventDefault();
            if (srcdiv !== this) {
              srcdiv.innerHTML = this.innerHTML;
              this.innerHTML = temp;
              function query(v) {
                return Array.from(document.querySelectorAll(`.el-table__body-wrapper tbody tr td:nth-of-type(${v})`))
              }
              query(srcdiv.getAttribute("targ-key")).map((_v, _i) => {
                var srctd = _v.innerHTML
                _v.innerHTML = query(this.getAttribute("targ-key"))[_i].innerHTML
                query(this.getAttribute("targ-key"))[_i].innerHTML = srctd
              })
              // 移动下方数据
            }
          }
        })
      }, 300)
    }
  })
}