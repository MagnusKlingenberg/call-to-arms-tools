"use client";

import { TabName } from "./types";
import { Dispatch, SetStateAction } from "react";

function Tab({
  name,
  target,
  setTab,
}: {
  name: string;
  target: TabName;
  setTab: Dispatch<SetStateAction<TabName>>;
}) {
  return <button onClick={() => setTab(target)}>{name}</button>;
}

export default function TopBar({
  setTab,
}: {
  setTab: Dispatch<SetStateAction<TabName>>;
}) {
  return (
    <>
      <h3>Call To arms tools:</h3>
      <Tab name="Settlement Roster"  target={TabName.SETTLEMENT} setTab={setTab}></Tab>
      <Tab name="Party Roster"  target={TabName.PARTY} setTab={setTab}></Tab>
      <hr />
    </>
  );
}
