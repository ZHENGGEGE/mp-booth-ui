/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";
import { list } from "../../json/policyAdvice.json";
import { restaurentSkillsList } from "../../json/restaurentSkills.json";
import "./restaurent.scss";
import searchUnfocus from '../../assets/searchUnfocus.png'
import policyFocus from '../../assets/policyFocus.png'
import searchfocus from '../../assets/searchfocus.png'
import policyUnFocus from '../../assets/policyUnFocus.png'

class Restaurent extends Component {
  // eslint-disable-next-line react/sort-comp
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }

  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "我要摆摊"
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick = value => {
    console.log(value);

    this.setState({
      current: value
    });
    if (value === 1) {
      // eslint-disable-next-line no-undef
      wx.setNavigationBarTitle({
        title: "摆摊技巧"
      });
    }
    if (value === 0) {
      // eslint-disable-next-line no-undef
      wx.setNavigationBarTitle({
        title: "我要摆摊"
      });
    }
  };

  goToPolicyQuery = data => {
    console.log("跳转", data);
    Taro.navigateTo({
      url: "/pages/restaurent/policyQuery?id=" + data
    });
  };

  render() {
    const {current} = this.state;
    console.log('列表',restaurentSkillsList)
    return <View className='cuntainer'>
      <View class="flex-wrp" style="flex-direction:column;">
      {
      this.state.current == 0 && list ? list.array.map((item) => {
       return <View className='at-col colBody'key={item[0]}>
        <View className='title' onClick={()=>this.goToPolicyQuery(item.content)}>
          <View className='title_header'>
          {item.title}
          </View>
          <View className='title_descripe'>
          {item.source.length>16 ? item.source.substring(0,16)+'...' : item.source}
          </View>
          </View>
        </View>
            })
          : <view>
            {restaurentSkillsList.array.map((item) => {
              return <View className='at-col colBody'key={item[0]} >
              <View className='title' onClick={()=>this.goToPolicyQuery(item.content)}>
                <View className='title_header' >
                {item.title}
                </View>
                <View className='title_descripe'>
                {item.source.length>16 ? item.source.substring(0,16)+'...' : item.source}
                </View>
                </View>
              </View>
            })}
          </view>
          }
    </View>
    
    <AtTabBar
      fixed
      tabList={[
        { title: '政策查询', image: current === 1 ? policyUnFocus : policyFocus },
        { title: '摆摊技巧', image: current === 0 ? searchUnfocus : searchfocus }
      ]}
      onClick={this.handleClick}
      current={this.state.current}
    />
  </View>
  }
}

export default Restaurent;
