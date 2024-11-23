"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePersistedState } from "./usePersistedState";

function SavedInput<T>({ name, initial }: { name: string; initial: T }) {
  const [value, setValue] = usePersistedState(name, initial);

  return (
    <>
      <div className="inputBox">
        <label>
          {name}:<br />
          <input
            type="text"
            onChange={(e) => setValue(e.target.value as T)}
            value={value as string}
          ></input>
        </label>
      </div>
    </>
  );
}

function TextInput({ name, initial }: { name: string; initial: string }) {
  const [value, setValue] = usePersistedState(name, initial);

  return (
    <>
      <div className="inputBox">
        <label>
          {name}:<br />
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>
        </label>
      </div>
    </>
  );
}

function Building({ index, type, effect }: { index: number } & Building) {
  return (
    <>
      <div className="gridBox">
        <label>
          Building:
          <br />
          <input type="text" value={type}></input>
        </label>
        <br />
        <label>
          Harvest Effect:
          <br />
          <input type="text" value={effect}></input>
        </label>
      </div>
      <br />
    </>
  );
}

type Building = {
  key: number;
  type: string;
  effect: string;
};

export default function Home() {
  const [buildings, setBuildings] = usePersistedState<Building[]>("buildings", [
    {
      key: 0,
      type: "Home",
      effect: "something",
    },
    {
      key: 1,
      type: "Other",
      effect: "something else",
    },
  ]);

  return (
    <>
      <div className="gridHeader">
        <div className="gridBox">
          <SavedInput name="Settlement Name" initial="" />
          <SavedInput name="Player Name" initial="" />
          <SavedInput name="Games played" initial="0" />
        </div>

        <div className="gridBox">
          <SavedInput name="Fame" initial="0" />
          <SavedInput name="Food" initial="0" />
          <SavedInput name="Population" initial="0" />
          <SavedInput name="Materials" initial="0" />
          <SavedInput name="Wealth" initial="0" />
          <SavedInput name="Defense" initial="0" />
        </div>

        <div className="gridBox gridHigh">
          <SavedInput name="Features" initial="" />
        </div>
      </div>

      <hr />
      <div id="buildings">
        {buildings.map((value, index) => (
          <Building
            key={index}
            index={value.key}
            type={value.type}
            effect={value.effect}
          />
        ))}
      </div>
    </>
  );
}
