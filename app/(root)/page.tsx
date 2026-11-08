import React from 'react'
import Headerbox from '@/components/ui/Headerbox'
import TotalBalancebox from '@/components/ui/TotalBalancebox'
import RightSidebar from '@/components/ui/RightSidebar'


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

        RECENT TRANSACTION
      </div>

      <RightSidebar 
        user = {loggedIn}
        transactions={[]}
        banks={[{currentBalance: 1250.35}, {currentBalance: 2000.00}]}
      
      />
    </section>
  )
}

export default Home