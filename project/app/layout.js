import Header from "@/components/Header/Header"
import Footer from "@components/Footer/Footer"


export const metadata = {
  title: 'TiemHommie',
  description: 'TiemHommie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div className="">
          <div className="" />
        </div>

        <main className="">
          {/* <Header /> */}
          {children}
          {/* <Footer/> */}
        </main>
      </body>
    </html>
  )
}
