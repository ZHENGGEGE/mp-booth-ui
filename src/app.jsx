import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/index";
import counterStore from "./store/counter";
import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
};

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    pages: [
      "pages/index/index",
      "pages/restaurent/restaurent",
      "pages/restaurent/restaurentSkills",
      "pages/restaurent/policyQuery"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
    // permission: {
    //   "scope.userLocation": {
    //     desc: "你的位置信息将用于小程序地图定位效果展示"
    //   }
    // }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
