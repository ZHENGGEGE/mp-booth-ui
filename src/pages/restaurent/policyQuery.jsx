/* eslint-disable react/no-danger */
/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

class PolicyQuery extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "政策查询"
  };

  componentDidMount() {
    console.log('拿到的参数',this.$router.params.id,document.getElementById('html'))
    document.getElementById('html').innerHTML = `<View>${this.$router.params.id}</View>`
  }
  componentWillReact() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {} = this.props;
    return (
      <View id='html'>
        <view dangerouslySetInnerHTML={{__html:this.$router.params.id}}>
          
        </view>
      </View>
    );
  }
}

export default PolicyQuery;
