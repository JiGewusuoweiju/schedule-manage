/*
 * @Description: 首页
 * @Date: 2025-06-26 14:57:33
 */
import {useState} from 'react';
import HomeTabBar from '../components/tabbar/index';
import { View } from '@tarojs/components'
import AllSchedule from './allSchedule';
import Game from './game';
import User from './user';

import './index.less';
const Home = () => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const changeTab = (data: number) => {
    setTabIndex(data)
  }
  return (
    <View className={'home'}>
      <View className={'home-body'}>
        {
          tabIndex === 0 && <AllSchedule />
        }
        {
          tabIndex === 1 && <Game />
        }
        {
          tabIndex === 2 && <User />
        }
      </View>
      <HomeTabBar changeTab={changeTab} />
    </View>
  );
};

export default Home;
