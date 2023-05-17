import "@styles/globals.css";

import Footer from "@components/Footer";
import Header from "@components/Header";
import Nav from "@components/nav/Nav";
import Provider from "@components/Provider";

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
            <Nav />
            {children}
            <Footer />
          </main>
      </body>
    </html>
  );
};

export default RootLayout;
