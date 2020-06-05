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

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props;
    counterStore.incrementAsync();
  };

  onTap = () => {
    Taro.navigateTo({
		  url: '/pages/restaurent/restaurent'
		})
  }

  render() {
    const {} = this.props;
    return (
      <View className="cuntainer">
        <Map onClick={this.onTap} className="map" />
      </View>
    );
  }
}

export default Index;
