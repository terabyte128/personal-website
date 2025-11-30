import { IconBaguette } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

import { ExternalLink } from "@/helpers/ExternalLink";
import { SuccessMessage } from "@/helpers/Message";
import { TitleWithIcon } from "@/helpers/TitleWithIcon";

import { BreadRecipe, Recipe } from "./recipe";

export const metadata: Metadata = {
  title: "Recipes | Sam Wolfson",
};

export default function Recipes() {
  return (
    <div>
      <TitleWithIcon title="Recipes" icon={IconBaguette} />
      <SuccessMessage>
        If I gave you some dough, see{" "}
        <Link href="/sourdough?party">this page!</Link>
      </SuccessMessage>
      <p>
        This page is mostly a collection of baking recipe notes for my own use.
        There are tons of recipes floating around for the types of
        bread-adjacent food I like to bake, but I always need to remember what
        adjustments I want. So here are the cliff notes:
      </p>
      <BreadRecipe />
      <Recipe
        title="Sourdough pizza"
        ingredients={[
          "60g starter at 100% hydration (30g each)",
          "95g flour",
          "35g water",
          "10g EVOO",
          "3g salt",
        ]}
        notes={
          <>
            <ul className="[&>li]:py-1">
              <li>
                Amounts are for a single pizza. Adjust accordingly. Each pizza
                is 200g, good for 8-10&quot;.
              </li>
              <li>
                Bake at 550°F, on pre-heated pizza steel, top third of the oven.
                For a much easier time, put parchment paper underneath pizza.
              </li>
            </ul>
          </>
        }
      />
      <Recipe
        title="Bagels"
        ingredients={[
          "9g instant yeast",
          "480g bread flour",
          "12g salt",
          "9g barley malt syrup",
          "300g lukewarm water",
        ]}
        notes={
          <div>
            <ul className="[&>li]:py-0.5">
              <li>Makes 10-12 bagels.</li>
              <li>
                Bloom yeast in mixture of water and syrup before adding to
                dough.
              </li>
              <li>Knead with a mixer until very stiff.</li>
              <li>Bulk ferment until puffy, 60-90 min.</li>
              <li>
                Flour well before proof to prevent sticking, and proof on
                greased parchment paper. Divide between two baking sheets to
                avoid crowding. Handle carefully after proof to avoid wrinkles.
              </li>
              <li>
                Water bath in 2 qts water, 28g barley malt syrup, 14g sugar for
                1 minute per side.
              </li>
              <li>Bake 20-25 min. Flip midway through if desired.</li>
            </ul>
            <p>
              Adapted from{" "}
              <ExternalLink href="https://www.kingarthurbaking.com/recipes/bagels-recipe">
                King Arthur&apos;s recipe
              </ExternalLink>
              .
            </p>
          </div>
        }
      />
    </div>
  );
}
