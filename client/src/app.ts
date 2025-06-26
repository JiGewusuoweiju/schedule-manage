import { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import { CLOUD_SERVICE } from "../config/env";
// 全局样式
import './app.less'

function App(props) {
  // 初始化云开发环境
  useEffect(() => {
    if (!Taro.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      Taro.cloud.init({
        env: CLOUD_SERVICE, // 设置云函数调用环境
        traceUser: true,    // 是否在将用户访问记录到用户管理中，在控制台中可见
      })
    }
  }, [])

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return props.children
}

export default App
