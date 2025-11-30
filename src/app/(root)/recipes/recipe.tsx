"use client";

import Link from "next/link";
import React, { ReactNode, useState } from "react";

import CollapsingSection from "@/helpers/CollapsingSection";
import { WarningMessage } from "@/helpers/Message";

interface RecipeProps {
  title: string;
  message?: ReactNode;
  notes: ReactNode;
  ingredients: ReactNode[];
  ingredientsExtra?: ReactNode;
}

export const Recipe = (props: RecipeProps) => {
  return (
    <CollapsingSection title={props.title}>
      {props.message && <WarningMessage>{props.message}</WarningMessage>}
      <h3>Ingredients</h3>
      {props.ingredientsExtra}
      <ul className="mb-2 list-disc pl-4 [&>*]:py-1">
        {props.ingredients.map((ingredient) => (
          <li key={ingredient?.toString()}>{ingredient}</li>
        ))}
      </ul>
      <h3>Notes</h3>
      {props.notes}
    </CollapsingSection>
  );
};

export const BreadRecipe = () => {
  const [totalWeight, setTotalWeight] = useState(1800);

  const measurements = {
    starterWater: totalWeight * 0.07,
    starterFlour: totalWeight * 0.07,
    water: totalWeight * 0.32,
    salt: totalWeight * 0.01,
    flour: totalWeight * 0.53,
  };

  const round = (v: number) => v.toFixed(0);

  return (
    <Recipe
      title="Sourdough bread"
      message={
        <>
          For a more thorough overview of my sourdough baking process, see{" "}
          <Link href="/sourdough">here</Link> instead.
        </>
      }
      ingredients={[
        `Starter: ${round(measurements.starterFlour)}g flour, ${round(measurements.starterWater)}g water`,
        `Water: ${round(measurements.water)}g`,
        `Salt: ${round(measurements.salt)}g`,
        `Flour: ${round(measurements.flour)}g`,
      ]}
      ingredientsExtra={
        <div className="font-semibold">
          <label>
            <span>For a total dough weight of</span>
            <input
              name="totalWeight"
              className="mx-2 w-[4em] rounded-md border px-2"
              value={totalWeight}
              type="number"
              onChange={(e) => {
                const numVal = Number.parseInt(e.target.value);

                if (!Number.isNaN(numVal)) {
                  setTotalWeight(Number.parseInt(e.target.value));
                }
              }}
            />
            <span>grams:</span>
          </label>
        </div>
      }
      notes={
        <>
          <ul className="[&>li]:py-0.5">
            <li>
              You can change the total dough weight and the other quantities
              will update automatically!
            </li>
            <li>
              Typical loaf weight for a 9&quot; boule is 900-1000 grams, so
              adjust accordingly.
            </li>
            <li>This recipe&apos;s hydration is 65%.</li>
            <li>Bulk ferment 4-8 hours until about doubled in size.</li>
            <li>Proof overnight or longer in fridge.</li>
            <li>Inner temperature should reach 190°F.</li>
          </ul>
        </>
      }
    />
  );
};
