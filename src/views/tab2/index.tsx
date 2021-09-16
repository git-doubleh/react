/*
 * @Description:
 * @Date: 2021-09-16 11:31:58
 * @LastEditTime: 2021-09-16 15:24:58
 */

import React from "react";
const Tab1 = (props:any) => {
  const back = () => {
    console.log(props);

    props.history.push('tab1/234');
  };
  return (
    <>
      <div>这是第二标签页</div>
      <button onClick={back}>返回</button>
    </>
  );
};
export default Tab1;
