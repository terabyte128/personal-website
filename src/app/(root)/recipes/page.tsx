import CollapsingSection from "@/helpers/CollapsingSection";
import { ExternalLink } from "@/helpers/ExternalLink";
import { Message } from "@/helpers/Message";
import { TitleWithIcon } from "@/helpers/TitleWithIcon";
import { IconBaguette } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipes | Sam Wolfson",
};

interface RecipeProps {
  title: string;
  message?: ReactNode;
  notes: ReactNode;
  ingredients: ReactNode[];
}

const Recipe = (props: RecipeProps) => {
  return (
    <CollapsingSection title={props.title}>
      {props.message && <Message>{props.message}</Message>}
      <h3>Ingredients</h3>
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

export default function Recipes() {
  return (
    <div>
      <TitleWithIcon title="Recipes" icon={IconBaguette} />
      <p>
        This page is mostly a collection of baking recipe notes for my own use.
        There are tons of recipes floating around for the types of
        bread-adjacent food I like to bake, but I always need to remember what
        adjustments I want. So here are the cliff notes:
      </p>
      <Recipe
        title="Sourdough bread"
        message={
          <>
            For a more thorough overview of my sourdough baking process, see{" "}
            <Link href="/sourdough">here</Link> instead.
          </>
        }
        ingredients={[
          "260g starter at 100% hydration (130g each)",
          "600g water",
          "20g salt",
          "1000g flour",
        ]}
        notes={
          <>
            <ul className="[&>li]:py-0.5">
              <li>Makes 2 loaves of around 930g each.</li>
              <li>Bulk ferment 4-8 hours until about doubled in size.</li>
              <li>Proof overnight or longer in fridge.</li>
              <li>Inner temperature should reach 190°F.</li>
            </ul>
          </>
        }
      />
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
