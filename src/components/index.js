/*
 * @Descripttion: 
 * @version: 
 * @Author: zhang zi fang
 * @Date: 2021-01-13 08:54:12
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2021-01-14 15:15:55
 */
import MenuLeft from '@/components/common/MenuLeft'
import TopBar from '@/components/common/TopBar'
import WorkTab from '@/components/common/WorkTab'
import Personality from '@/components/common/Personality'
import TaoTable from '@/components/common/TaoTable'
import TableBar from '@/components/common/TableBar'
import MenuLeftItem from '@/components/common/MenuLeftItem'
export default (Vue)=>{
  Vue.component("menu-left", MenuLeft)
  Vue.component("top-bar", TopBar)
  Vue.component("work-tab", WorkTab)
  Vue.component("personality", Personality)
  Vue.component("tao-table", TaoTable)
  Vue.component("table-bar", TableBar)
  Vue.component("menu-left-ttem", MenuLeftItem)
}