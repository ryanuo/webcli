/*
 * @Description:
 * @Author: Harry
 * @Date: 2021-12-26 18:14:16
 * @Url: https://u.mr90.top
 * @github: https://github.com/rr210
 * @LastEditTime: 2022-04-13 12:39:00
 * @LastEditors: harry
 */
import {
  Sidebar, Popup, SwipeCell, DropdownMenu, DropdownItem, Divider, PullRefresh, Overlay, Icon, Pagination, Button, Collapse, CollapseItem, Tag, NoticeBar, Swipe, Popover, Tabs, Tab, SwipeItem, Image, Skeleton, Uploader, SidebarItem, Tabbar, TabbarItem, NavBar
} from 'vant'
const vant = function (app) {
  app.use(Sidebar)
  app.use(SidebarItem)
  app.use(Tabbar)
  app.use(TabbarItem)
  app.use(NavBar)
  app.use(SwipeCell)
  app.use(DropdownMenu)
  app.use(DropdownItem)
  app.use(Uploader)
  app.use(Skeleton)
  app.use(Collapse)
  app.use(CollapseItem)
  app.use(Image)
  app.use(Swipe)
  app.use(Icon)
  app.use(Tag)
  app.use(Divider)
  app.use(Tabs)
  app.use(Overlay)
  app.use(Pagination)
  app.use(Tab)
  app.use(Popup)
  app.use(NoticeBar)
  app.use(PullRefresh)
  app.use(Button)
  app.use(Popover)
  app.use(SwipeItem)
}

export default vant
