import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import CollapsingSection from '../shared-components/CollapsingSection';
import ExternalLink from '../shared-components/ExternalLink';
import Message from '../shared-components/Message';

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
            <h3>ingredients</h3>
            <ul>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ul>
            <h3>notes</h3>
            {props.notes}
        </CollapsingSection>
    );
};

export const Recipes = () => {
    return (
        <>
            <p>
                This page is mostly a collection of baking recipe notes for my
                own use. There are tons of recipes floating around for the types
                of bread-adjacent food I like to bake, but I always need to
                remember what adjustments I want. So here are the cliff notes:
            </p>
            <Recipe
                title="sourdough bread"
                message={
                    <>
                        For a more thorough overview of my sourdough baking
                        process, see <Link to="/sourdough">here</Link> instead.
                    </>
                }
                ingredients={[
                    '260g starter at 100% hydration (130g each)',
                    '600g water',
                    '20g salt',
                    '1000g flour',
                ]}
                notes={
                    <>
                        Bulk ferment 4-8 hours until about doubled in size.
                        Inner temperature should reach 190°F. Proof overnight or
                        longer in fridge.
                    </>
                }
            />
            <Recipe
                title="sourdough pizza"
                ingredients={[
                    '60g starter at 100% hydration (30g each)',
                    '95g flour',
                    '35g water',
                    '10g EVOO',
                    '3g salt',
                ]}
                notes={
                    <>
                        Amounts are for a single pizza. Adjust accordingly. Each
                        pizza is 200g, good for 8-10". Bake at 550°F, on
                        pre-heated pizza steel, top third of the oven. For a
                        much easier time, put parchment paper underneath pizza.
                    </>
                }
            />
            <Recipe
                title="bagels"
                ingredients={[
                    '9g instant yeast',
                    '480g bread flour',
                    '12g salt',
                    '9g barley malt syrup',
                    '300g lukewarm water',
                ]}
                notes={
                    <>
                        Bloom yeast in mixture of water and syrup before adding
                        to dough. Knead with a mixer until very stiff. Bulk
                        ferment until puffy, 60-90 min. Makes 10-12 bagels;
                        divide among 2 baking sheets to avoid crowding. Use
                        greased parchment paper. Flour well before proofing so
                        they don't stick. Handle carefully after proof to avoid
                        wrinkles. Water bath in 2 qts water, 28g barley malt
                        syrup, 14g sugar for 1 minute per side. Bake 20-25 min.
                        Flip midway through if desired. Adapted from{' '}
                        <ExternalLink href="https://www.kingarthurbaking.com/recipes/bagels-recipe">
                            King Arthur's recipe
                        </ExternalLink>
                        .
                    </>
                }
            />
        </>
    );
};
