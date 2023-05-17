import '@styles/globals.css'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Nav from '@components/nav/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: "Hommie Shop",
  description: 'Hommie Hommie'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Header />
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout