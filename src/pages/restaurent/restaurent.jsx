/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

class Restaurent extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "地摊"
  };

  componentWillMount() {}

  componentWillReact() {
    console.log("componentWillReact");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {} = this.props;
    return <View className="cuntainer">我要摆摊页面</View>;
  }
}

export default Restaurent;
