import imgUrl from "../../assets/location.svg";

export default {
  iconPath: imgUrl,
  id: 0, // 标记点 id marker 点击事件回调会返回此 id。建议为每个 marker 设置上 number 类型 id，保证更新 marker 时有更好的性能。
  longitude: 118.763953,
  latitude: 31.978731,
  width: 16, // 标注图标高度
  height: 16 // 标注图标宽度
};
