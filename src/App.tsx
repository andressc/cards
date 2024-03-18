import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { Typography } from '@/components/ui/typography'
import { Router } from '@/router'

function App() {
  return (
    <>
      <Header style={{ justifyContent: 'space-between' }}>
        <Typography variant={'h2'}>SiteLogo</Typography>

        <Button variant={'secondary'}>Sign In</Button>
      </Header>
      <div className={'mainContainer'}>
        <Router />
      </div>
    </>
  )
}

export default App
