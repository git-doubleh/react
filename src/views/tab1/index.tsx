/*
 * @Description:
 * @Date: 2021-09-16 11:31:58
 * @LastEditTime: 2021-09-16 15:25:58
 */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Tab1 = (props:any) => {
    useEffect(() =>{
        console.log(props.match);
        
    })
  return (
    <>
      <div>这是第一标签页</div>
      <Link to="Tab2">跳转第二页</Link>
    </>
  );
};
export default Tab1;
