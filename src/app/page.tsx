"use client";
import { useForm } from "react-hook-form";
import { usePersistedState } from "./usePersistedState";

function NumberInput({ name, props }: { name: string; props: any }) {
  return (
    <>
      <div className="inputBox">
        <label>
          {name}:<br />
          <input type="number" {...props} />
        </label>
      </div>
    </>
  );
}

function TextInput({ name, props }: { name: string; props: any }) {
  return (
    <>
      <div className="inputBox">
        <label>
          {name}:<br />
          <input {...props} />
        </label>
      </div>
    </>
  );
}

function Building({
  buildingProps,
  checkboxProps,
  harvestEffectProps,
}: {
  buildingProps: any;
  checkboxProps: any;
  harvestEffectProps: any;
}) {
  return (
    <>
      <div className="gridBox">
        <label>
          Building:
          <br />
          <input {...buildingProps} />
        </label>
        <label>
          Damaged:
          <br />
          <input type={"checkbox"} {...checkboxProps} />
        </label>
        <label>
          Harvest Effect:
          <br />
          <input {...harvestEffectProps} />
        </label>
      </div>
      <br />
    </>
  );
}

export default function Home() {
  const [buildings, setBuildings] = usePersistedState<any>("sheet", {});
  const { register, handleSubmit } = useForm({ defaultValues: buildings });

  const onSubmit = (data: any) => {
    console.log(data);
    setBuildings(data);
  };

  return (
    <>
      <form onChange={handleSubmit(onSubmit)}>
        <div className="gridHeader">
          <div className="gridBox">
            <TextInput
              name="Settlement Name"
              props={{ ...register("settlement") }}
            />
            <TextInput name="Player Name" props={{ ...register("player") }} />
            <TextInput
              name="Games played"
              props={{ ...register("gamesPlayed") }}
            />
          </div>

          <div className="gridBox">
            <NumberInput name="Fame" props={{ ...register("fame") }} />
            <NumberInput name="Food" props={{ ...register("food") }} />
            <NumberInput
              name="Population"
              props={{ ...register("population") }}
            />
            <NumberInput
              name="Materials"
              props={{ ...register("materials") }}
            />
            <NumberInput name="Wealth" props={{ ...register("wealth") }} />
            <NumberInput name="Defense" props={{ ...register("defense") }} />
          </div>

          <div className="gridBox gridHigh">
            <TextInput name="Features" props={{ ...register("features") }} />
          </div>
        </div>

        <hr />
        <div id="buildings">
          {[...Array(10).keys()].map((key) => (
            <Building
              key={key}
              buildingProps={{ ...register(`building-${key}`) }}
              checkboxProps={{ ...register(`checkbox-${key}`) }}
              harvestEffectProps={{ ...register(`harvestEffect-${key}`) }}
            />
          ))}
        </div>
      </form>
    </>
  );
}
