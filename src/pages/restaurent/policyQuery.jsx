/* eslint-disable react/forbid-elements */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import WxParse from '../../utils/wxParse/wxParse'

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
    const article = '<div style="color: red">我是HTML代码</div>'
     WxParse.wxParse('article', 'html', article, this.$scope, 5)
    // eslint-disable-next-line no-undef
    console.log('拿到的参数',WxParse.wxParse('article', 'html', article, this.$scope, 5))
    
  }
  componentWillReact() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {data} = this.state;
    console.log('渲染',data)
    return (
      <View>
        {/* <view dangerouslySetInnerHTML={{__html:this.$router.params.id}}>
          {}
        </view> */}
        <View className='iconfont icon-login_ic_phone' style='font-size:30PX;color:red;'></View>
        <import src='../../utils/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}' />
     </View>
    );
  }
}

export default PolicyQuery;
