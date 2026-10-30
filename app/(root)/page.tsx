import React from 'react'
import Headerbox from '@/components/ui/Headerbox'
import TotalBalancebox from '@/components/ui/TotalBalancebox'


const Home = () => {

  const loggedIn = {firstName: 'Yehan'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <Headerbox
            type = "greeting"
            title= "Welcome"
            user = {loggedIn?.firstName || 'Guest'} 
            subtext = "Access and manage your account and transactions efficiently"         
          />
          <TotalBalancebox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

      </div>
    </section>
  )
}

export default Home