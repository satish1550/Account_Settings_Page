import React, { useEffect } from "react";
import { Sparkles } from "lucide-react";
import "./subscription.css";

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing";
  }, []);
  return (
    <div className="Pricing">
      <div className="pricingHeader">
        <div>
          <h1 className="pricingTop">Subscription</h1>
        </div>
      </div>
      <div className="pricingContent">
        <div className="pricingTopText">
          <p>For a limited time, all our users get complete access for free!</p>
        </div>
        <div className="pricingCenter">
          <div className="cardOne">
            <div className="cardOneTop">Explorer</div>
            <hr className="hr" />
            <p className="free">Free</p>
            <div className="cardOneCenter">
              <ul>
                <li>Resume Search</li>
                <li>Visited jobs dashboard</li>
                <li>1000+ jobs added daily</li>
                <li>Automatic feed updates</li>
                <li>Access to latest features</li>
                <li>~200 matches per resume</li>
                <li>Unlimited history</li>
              </ul>
            </div>
            <div className="cardOneBottom">
              <p>*Features on the free tier are subject to change</p>
            </div>
          </div>
          <div className="adventurer">
            <div className="recomended">
              <h1>Recommended</h1>
              <Sparkles />
            </div>
            <div className="cardTwo">
              <div className="cardTwoTop">Adventurer</div>
              <hr className="hr" />
              <p className="free">25$</p>
              <div className="cardOneCenter">
                <ul>
                  <li>Resume Search</li>
                  <li>Visited jobs dashboard</li>
                  <li>1000+ jobs added daily</li>
                  <li>Automatic feed updates</li>
                  <li>Access to latest features</li>
                  <li>~200 matches per resume</li>
                  <li>Unlimited history</li>
                </ul>
              </div>
              <div className="cardTwoBottom">
                <button className="cardTwoButton">Get Premium</button>
              </div>
            </div>
          </div>
          <div className="cardThree">
            <div className="cardThreeTop">Navigator</div>
            <hr className="hr" />
            <div className="cardThreeCenter">
              <p>Coming Soon.</p>
            </div>
            <div className="cardThreeBottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
