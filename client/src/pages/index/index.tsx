import {ConfigProvider,} from '@nutui/nutui-react-taro'
import zhCN from '@nutui/nutui-react-taro/dist/locales/zh-CN'
import Home from "../home";

function Index() {
  return (
    <ConfigProvider locale={zhCN}>
      <Home />
    </ConfigProvider>
  )
}

export default Index
