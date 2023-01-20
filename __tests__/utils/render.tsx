import React from 'react'
import { App as Ap, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { Provider } from 'react-redux'
import store from '@/store'

const wrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <Ap>
        <Provider store={store}>{children}</Provider>
      </Ap>
    </ConfigProvider>
  )
}

export default wrapper
