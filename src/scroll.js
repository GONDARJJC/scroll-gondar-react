import React, { Component } from "react";
import "./index.scss";

class Scroll extends Component {
  handleScroll = () => {
    const inBox = document.querySelector(".inBox");
    const outBox = document.querySelector(".scrollBox");
    const scrollTop = outBox.scrollTop; //滚动距离
    const clientHeight = outBox.clientHeight; //容器高度
    const totalHeight = inBox.clientHeight; //内容总高度

    const scrolledDistance = scrollTop + clientHeight; //已经滚动的距离
    const customDis = this.props.disToBottom ? this.props.disToBottom : 0;
    const distanceToBottom = totalHeight - scrolledDistance - customDis;

    if (distanceToBottom <= 0) {
      this.props.onReachBottom();
    } else {
      console.log("meidaodi");
    }
  };

  throttle = fn => {
    let timeout = null;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn();
      }, 500);
    };
  };

  render() {
    const throttleFn = this.throttle(this.handleScroll);
    return (
      <div className="scrollBox" onScroll={throttleFn}>
        <div className="scrollContent inBox">{this.props.children}</div>
      </div>
    );
  }
}

export default Scroll;
