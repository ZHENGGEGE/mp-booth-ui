/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

class PolicyQuery extends Component {
  
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "摆摊技巧"
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
    return <View>
      <view>111111</view>
      {/* <WebView src='http://www.nanjing.gov.cn/njxx/202005/t20200528_1890191.html'  /> */}
    </View>;
  }
}

export default PolicyQuery;
