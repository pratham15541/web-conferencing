import React, { ReactNode } from 'react'
import StreamvideoProvider from '@/providers/StreamClientProvider'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamvideoProvider>
        {children}
        </StreamvideoProvider>
    </main>
  )
}

export default RootLayout