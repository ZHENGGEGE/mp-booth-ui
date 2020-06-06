/* eslint-disable jsx-quotes */
import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";
import { list } from "../../json/3政策资讯.json";
import { restaurentSkillsList } from "../../json/restaurentSkills.json";
import "./restaurent.scss";

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

  componentWillMount() {
    console.log(1111);
  }

  componentWillReact() {
    console.log("componentWillReact");
  }

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
    const {} = this.props;
    console.log("列表", restaurentSkillsList);
    return (
      <View className="cuntainer">
        <View class="flex-wrp" style="flex-direction:column;">
          {this.state.current == 0 && list ? (
            list.array.map(item => {
              return (
                <View className="at-col colBody" key={item[0]}>
                  <View
                    className="title"
                    onClick={() => this.goToPolicyQuery(item.content)}
                  >
                    <View className="title_header">
                      {item.title.length > 20
                        ? item.title.substring(0, 20) + "..."
                        : item.title}
                    </View>
                    <View className="title_descripe">{item.source}</View>
                  </View>
                </View>
              );
            })
          ) : (
            <view>
              {restaurentSkillsList.array.map(item => {
                return (
                  <View className="at-col colBody" key={item[0]}>
                    <View
                      className="title"
                      onClick={() => this.goToPolicyQuery(item.content)}
                    >
                      <View className="title_header">
                        {item.title.length > 20
                          ? item.title.substring(0, 20) + "..."
                          : item.title}
                      </View>
                      <View className="title_descripe">{item.source}</View>
                    </View>
                  </View>
                );
              })}
            </view>
          )}
        </View>

        <AtTabBar
          fixed
          tabList={[
            { title: "政策查询", iconType: "bullet-list" },
            { title: "摆摊技巧", iconType: "folder" }
          ]}
          onClick={this.handleClick}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Restaurent;
