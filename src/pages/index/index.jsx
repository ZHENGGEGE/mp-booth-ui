/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./index.scss";

class Index extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "地摊"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {
    console.log(this.$router);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 页面跳转
  handleGoPage = () => {
    console.log("页面跳转");
    Taro.navigateTo({
      url: "/pages/restaurent/restaurent"
    });
  };

  // 敬请期待
  handleWaiting = () => {
    console.log("请等待");
  };

  render() {
    const {} = this.props;
    return (
      <View className="cuntainer">
        <Map onClick={this.onTap} className="map" />
        <View className="nav-wrapper">
          <View className="nav-tab">
            <View className="tab-item" onClick={this.handleGoPage}>
              我要摆摊
            </View>
            <View className="middle-line"></View>
            <View className="tab-item" onClick={this.handleWaiting}>
              我要逛摊
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
