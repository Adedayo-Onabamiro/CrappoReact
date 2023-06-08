import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { FastestSecureSection } from "./components/FastestSecureSection";
import { ChooseCrappo } from "./components/ChooseCrappo";
import { CheckHowMuch } from "./components/CheckHowMuch";
import { TradeSecurely } from "./components/TradeSecurely";
import { MarketSentiments } from "./components/MarketSentiments";
import { DetailedStatistics } from "./components/DetailedStatistics";
import { GrowProfit } from "./components/GrowProfit";
import { StartMining } from "./components/StartMining";
import { Footer } from "./components/Footer";


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
