import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { FastestSecureSection } from "./components/FastestSecureSection/FastestSecureSection";
import { ChooseCrappo } from "./components/ChooseCrappo/ChooseCrappo";
import { CheckHowMuch } from "./components/CheckHowMuch/CheckHowMuch";
import { TradeSecurely } from "./components/TradeSecurely/TradeSecurely";
import { MarketSentiments } from "./components/MarketSentiments/MarketSentiments";
import { DetailedStatistics } from "./components/DetailedStatistics/DetailedStatistics";
import { GrowProfit } from "./components/GrowProfit/GrowProfit";
import { StartMining } from "./components/StartMining/StartMining";
import { Footer } from "./components/Footer/Footer";

// import "../Card/Card.css";

function App() {
  return (
      <>
        <Navigation />
        <FastestSecureSection />
        <ChooseCrappo />
        <CheckHowMuch />
        <TradeSecurely />
        <MarketSentiments />
        <DetailedStatistics />
        <GrowProfit />
        <StartMining />
        <Footer />
      </>
  );
}

export default App;
