import {ConfigProvider,} from '@nutui/nutui-react-taro'
import Home from "../home";

function Index() {
  const theme = {
    nutuiColorPrimary: '#E54B4B', // // 主要内容用色，常用语常规标题内容、细文浏览、常规按钮文字以及图表引导。
    nutuiButtonDefaultColor: '#fff', // 普通按钮字体颜色
    nutuiButtonDefaultBackgroundColor: '#32B67A', // 普通按钮背景色
  }
  return (
    <ConfigProvider theme={theme}>
      <Home />
    </ConfigProvider>
  )
}

export default Index
