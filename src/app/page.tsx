"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePersistedState } from "./usePersistedState";

function NumberInput({ name, initial }: { name: string; initial: number }) {
  const [value, setValue] = usePersistedState(name, initial);

  return (
    <>
      <div className="inputBox">
        <label>
          {name}:<br />
          <input
            type="text"
            onChange={(e) => setValue(Number(e.target.value))}
            value={value}
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

function Building({
  index,
  type,
  checked,
  effect,
}: { index: number } & Building) {
  return (
    <>
      <div className="gridBox">
        <label>
          Building:
          <br />
          <input type="text" value={type} readOnly></input>
        </label>
        <label>
          Damaged:
          <br />
          <input type="checkbox" checked={checked} readOnly></input>
        </label>
        <label>
          Harvest Effect:
          <br />
          <input type="text" value={effect} readOnly></input>
        </label>
      </div>
      <br />
    </>
  );
}

type Building = {
  type: string;
  checked: boolean;
  effect: string;
};

export default function Home() {
  const [buildings, setBuildings] = usePersistedState<Building[]>("buildings", [
    {
      checked: false,
      type: "Home",
      effect: "something",
    },
    {
      checked: true,
      type: "Other",
      effect: "something else",
    },
  ]);

  const zero: number = 0;

  return (
    <>
      <div className="gridHeader">
        <div className="gridBox">
          <TextInput name="Settlement Name" initial="" />
          <TextInput name="Player Name" initial="" />
          <TextInput name="Games played" initial="0" />
        </div>

        <div className="gridBox">
          <NumberInput name="Fame" initial={zero} />
          <NumberInput name="Food" initial={zero} />
          <NumberInput name="Population" initial={zero} />
          <NumberInput name="Materials" initial={zero} />
          <NumberInput name="Wealth" initial={zero} />
          <NumberInput name="Defense" initial={zero} />
        </div>

        <div className="gridBox gridHigh">
          <TextInput name="Features" initial="" />
        </div>
      </div>

      <hr />
      <div id="buildings">
        {buildings.map((value, index) => (
          <Building
            key={index}
            index={index}
            checked={value.checked}
            type={value.type}
            effect={value.effect}
          />
        ))}
      </div>
    </>
  );
}
