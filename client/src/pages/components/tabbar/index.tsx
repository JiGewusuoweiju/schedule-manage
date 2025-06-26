/*
 * @Description: 底部tab导航
 * @Date: 2025-06-26 14:40:41
 */
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Hi, Home, User } from '@nutui/icons-react-taro'
const HomeTabBar = () => {
  return (
    <Tabbar>
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="逛" icon={<Hi />} />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  );
};

export default HomeTabBar;
