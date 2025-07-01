import {ConfigProvider,} from '@nutui/nutui-react-taro'
import Home from "../home";

function Index() {
  return (
    <ConfigProvider>
      <Home />
    </ConfigProvider>
  )
}

export default Index
