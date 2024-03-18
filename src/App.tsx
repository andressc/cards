import { Provider } from 'react-redux'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { Typography } from '@/components/ui/typography'
import { Router } from '@/router'
import { store } from '@/services/store'

function App() {
  return (
    <Provider store={store}>
      <Header style={{ justifyContent: 'space-between' }}>
        <Typography variant={'h2'}>SiteLogo</Typography>

        <Button variant={'secondary'}>Sign In</Button>
      </Header>
      <div className={'mainContainer'}>
        <Router />
      </div>
    </Provider>
  )
}

export default App
