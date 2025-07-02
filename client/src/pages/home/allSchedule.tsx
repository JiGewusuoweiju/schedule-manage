/*
 * @Description: 首页-全部赛程
 * @Date: 2025-06-26 16:26:33
 */
import './index.less';
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro';
const AllSchedule = () => {
  return (
    <View className={'allScheduleBox'}>
      <View className={'btnList'}>
        <Button className={'oneBtn'} onClick={() => {}}>
          关联赛程
        </Button>
        <Button className={'oneBtn'} onClick={() => {
          Taro.navigateTo({
            url: '/pages/creatSchedule/index',
          });
        }}>
          新建赛程
        </Button>
      </View>

    </View>

  );
};

export default AllSchedule;
