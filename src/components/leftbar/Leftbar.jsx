import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import "./leftbar.css";
import logo from "../../images/logo.jpeg";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Leftbar = ({ name }) => {
  const [progress, setProgress] = useState(0);
  return (
    <div className="leftbar">
      <LoadingBar
        color="#ef233c"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="leftbarRight">
        <div className="logoContainer">
          <div className="lodoLeft">
            <img src={logo} className="logo" alt="Logo" />
          </div>
          <div className="logoRight">
            <h1>{name}</h1>
            <p>satish@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="leftbarLeft">
        <div className="leftbarLeftTop">
          <h1>MY ACCOUNT</h1>
        </div>
        <div className="leftbarLeftBottom">
          <div className="accountSettings">
            <Settings />
            <h1>
              <Link to="/" onClick={() => setProgress(progress + 100)}>
                Account Settings
              </Link>
            </h1>
          </div>
          <div className="accountSettings">
            <CircleDollarSign />
            <h1>
              <Link
                to="/subscription"
                onClick={() => setProgress(progress + 100)}
              >
                Subscription
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div className="leftbarBottom">
        <hr />
        <div className="leftbarBottomContainer">
          <div className="singOut">
            <LogOut />
            <h1>sign out</h1>
          </div>
          <div className="singOutMore">
            <MoreHorizontal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;