import React from "react";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <Wrapper>
    <div className="container m-2 bg-orange">
        <div className="">
          <div className="flex items-center justify-center md:justify-end">
            <div className="">
              <select name="countries" className="">
                <option
                  value="en"
                  data-image="assets/images/eng.png"
                  data-title="English"
                >
                  English
                </option>
                <option
                  value="fn"
                  data-image="assets/images/fn.png"
                  data-title="France"
                >
                  France
                </option>
                <option
                  value="us"
                  data-image="assets/images/us.png"
                  data-title="United States"
                >
                  United States
                </option>
              </select>
            </div>
            <div className="ms-3">
              <select name="countries" className="">
                <option value="USD" data-title="USD">
                  USD
                </option>
                <option value="EUR" data-title="EUR">
                  EUR
                </option>
                <option value="GBR" data-title="GBR">
                  GBR
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
