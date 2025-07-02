/*
 * @Description: 底部tab导航
 * @Date: 2025-06-26 14:40:41
 */
import { Tabbar } from '@nutui/nutui-react-taro'
import { Hi, Home, User } from '@nutui/icons-react-taro'
import './index.less'
const HomeTabBar = (props: any) => {
  const { changeTab } = props;

  return (
    <Tabbar fixed onSwitch={(value) => {changeTab(value)}} className={'homeTabBar'}>
      <Tabbar.Item title="全部赛程" icon={<Home />} />
      <Tabbar.Item title="比赛" icon={<Hi />} />
      <Tabbar.Item title="我的" icon={<User />} value={8} />
    </Tabbar>
  );
};

export default HomeTabBar;
