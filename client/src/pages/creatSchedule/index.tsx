/*
 * @Description: 创建赛程
 * @Date: 2025-06-30 20:05:09
 */
import { View } from '@tarojs/components'
import { ArrowRightSize6 } from '@nutui/icons-react-taro'
import { HoverButton } from '@nutui/nutui-react-taro'
const CreatSchedule = () => {
  return (
    <View>
      <View>基本信息（参赛队伍名称，）</View>
      <View>第一轮信息（日期，赛事模式，自定义/随机队伍分配）</View>
      <View>第二轮信息</View>
      <HoverButton
        icon={<ArrowRightSize6 />}
        className={'nextStepBtn'}
        onClick={() => {
          console.log("🐡🐟🐠✨️✨️✨️✨️✨️✨️✨️✨️✨️✨️111: ", 111);
      }} />
    </View>
  );
};

export default CreatSchedule;
