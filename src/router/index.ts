/*
 * @Description:
 * @Date: 2021-09-16 11:28:52
 * @LastEditTime: 2021-09-16 15:26:25
 */

import Tab1 from "../views/tab1";
import Tab2 from "../views/tab2";
interface router {
  path: string;
  component: any;
  children?: Array<router>;
}

const routers: Array<router> = [
  {
    path: "/",
    component: Tab1,
  },
  {
    path: "/tab1",
    component: Tab1,
    children: [],
  },
  {
    path: "/tab1/:id",
    component: Tab1,
    children: [],
  },
  {
    path: "/tab2",
    component: Tab2,
    children: [],
  },
];
export default routers;
