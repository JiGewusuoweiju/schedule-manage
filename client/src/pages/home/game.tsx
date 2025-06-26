/*
 * @Description: 首页-比赛
 * @Date: 2025-06-26 16:26:33
 */
import { useEffect } from 'react';
import Taro from '@tarojs/taro';
const Game = () => {
  useEffect(() => {
    Taro.cloud.callFunction({
      name: 'login',
      data: {
        userInfo: { /* 传递的用户信息 */ },
      },
    }).then(res => {
      console.log('云函数调用成功:', res.result);
    }).catch(err => {
      console.error('云函数调用失败:', err);
    });
  }, []);
  return (
    <div>
      456
    </div>
  );
};

export default Game;
