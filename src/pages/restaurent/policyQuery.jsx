/* eslint-disable react/forbid-elements */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import WxParse from "../../components/wxParse/wxParse";

class PolicyQuery extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      data: '',
    }
  }

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "政策查询"
  };

  componentDidMount() {
    const article = this.$router.params.id;
    console.log(article);
    WxParse.wxParse("article", "html", article, this.$scope, 5);
  }
  componentWillReact() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {data} = this.state;
    console.log('渲染',data)
    return (
      <View className="cuntainer">
        <import src="../../components/wxParse/wxParse.wxml" />
        <template is="wxParse" data="{{wxParseData:article.nodes}}" />
      </View>
    );
  }
}

export default PolicyQuery;
