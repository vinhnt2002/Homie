import "@styles/globals.css";

import Header from "@components/Header";
import Nav from "@components/nav/Nav";
import Provider from "@components/Provider";
import Top from "@components/Top";
import Footer from "@components/footer/Footer";

export const metadata = {
  title: "Hommie Shop",
  description: "Hommie Hommie",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <Provider>
          
        </Provider> */}
        <div className="">
            <div className="" />
          </div>

          <main className="">
            <Header />
            <Top/>
            <Nav />
            {children}
            <Footer />
          </main>
      </body>
    </html>
  );
};

export default RootLayout;
