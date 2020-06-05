/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import imgUrl from "../../assets/location.png";
import guangtanImg from "../../assets/guangtan.svg";

import "./index.scss";

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      latitude: 35.956471, // 纬度
      longitude: 120.217853, // 经度
      markers: [
        {
          iconPath: imgUrl,
          id: 0, // 标记点 id marker 点击事件回调会返回此 id。建议为每个 marker 设置上 number 类型 id，保证更新 marker 时有更好的性能。
          longitude: 118.763953,
          latitude: 31.978731,
          width: 16, // 标注图标高度
          height: 16 // 标注图标宽度
        },
        {
          iconPath: imgUrl,
          id: 0, // 标记点 id marker 点击事件回调会返回此 id。建议为每个 marker 设置上 number 类型 id，保证更新 marker 时有更好的性能。
          longitude: 118.809043,
          latitude: 32.07456,
          width: 16, // 标注图标高度
          height: 16 // 标注图标宽度
        }
      ]
    };
  }

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "地摊"
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {
    this.handleGetLocation();
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
    Taro.atMessage({
      message: "敬请期待！",
      type: "info"
    });
  };

  // 获取当前定位
  handleGetLocation = () => {
    Taro.getLocation().then(res => {
      console.log(res);
      this.setState({
        latitude: res.latitude,
        longitude: res.longitude
      });
    });
  };

  render() {
    return (
      <View className="cuntainer">
        <Map
          scale="18"
          onClick={this.onTap}
          className="map"
          showLocation
          markers={this.state.markers}
          longitude={this.state.longitude}
          latitude={this.state.latitude}
        />
        <View className="nav-wrapper">
          <View className="nav-tab">
            <View className="tab-item-l" onClick={this.handleGoPage}>
              <View className="tab-btn">我要摆摊</View>
            </View>
            <View className="middle-line"></View>
            <View className="tab-item-r" onClick={this.handleWaiting}>
              <View className="tab-btn">我要逛摊</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
