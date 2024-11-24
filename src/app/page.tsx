"use client";

import { useState } from "react";
import SettlementRoster from "./settlementRoster";
import TopBar from "./topBar";
import PartyRoster from "./partyRoster";
import { TabName } from "./types";


export default function Home() {
  const [tab, setTab] = useState(TabName.SETTLEMENT);

  const tabToShow = tab === TabName.SETTLEMENT ? <SettlementRoster /> : <PartyRoster />;


  return (
    <>
      <TopBar setTab={setTab}/>
      {tabToShow}
    </>
  );
}
