import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledJsxRegistry from '@/config/RegisterStyled'
import StyledComponentsRegistry from '@/config/AntdRegistry'
import { Button, ConfigProvider } from 'antd';
import theme from '@/config/themeConfig'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rostami-ui-clones',
  description: 'building ui clones',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
    //dir='rtl'
    lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <StyledJsxRegistry>
            <ConfigProvider theme={theme}>
              {children}
            </ConfigProvider>
          </StyledJsxRegistry>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
