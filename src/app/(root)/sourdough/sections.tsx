"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

import CollapsingSection from "@/helpers/CollapsingSection";
import { ExternalLink } from "@/helpers/ExternalLink";
import { SuccessMessage, WarningMessage } from "@/helpers/Message";

export const Sections = () => {
  const params = useSearchParams();
  const party = params.has("party");

  const sourdoughPartyScroll = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    sourdoughPartyScroll.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [party]);

  return (
    <div>
      <CollapsingSection title="Caring for your starter">
        <WarningMessage>
          This section assumes that Sam (or someone else) gave you a bit of
          starter.
        </WarningMessage>
        <p>
          If you keep your starter in the fridge, it will need to be fed with
          approximately equal parts by weight flour and water once a week or so.
          It&apos;s not a big deal if you forget a week here and there, as long
          as it&apos;s not moldy.
        </p>
        <p>
          I usually keep just a few tablespoons of starter in a tupperware
          container. I keep the container sealed; no need to leave it open when
          it&apos;s in the fridge. You can totally keep more starter around if
          that’s your thing—there are{" "}
          <ExternalLink href="https://littlespoonfarm.com/24-easy-sourdough-discard-recipes/">
            plenty of recipes
          </ExternalLink>{" "}
          that make use of the &rdquo;discard&rdquo;, i.e., excess starter.
        </p>
        <p>
          Once a week, I discard around 2/3 of my starter and then refill the
          rest with equal parts flour and water. I don&apos;t measure the
          proportions; for such a small quantity, they&apos;re not that
          important.
        </p>
      </CollapsingSection>
      <CollapsingSection title="Helpful tools">
        <p>
          These are not strictly necessary, but they will make your life easier.
          I&apos;ve listed them below in order of how useful I think they are.
          Links are <b>not endorsements</b>, just examples.
        </p>
        <ul className="spaced">
          <li>
            <b>
              <ExternalLink href="https://www.seriouseats.com/best-bench-scrapers-6341995">
                bench scraper
              </ExternalLink>
            </b>
            : extremely helpful and good bang for the buck. Use it to scrape
            bread off the counter or out of bowls. You can get them in metal or
            plastic. Also super helpful for clean-up and general kitchen use
            (like transferring chopped ingredients from a cutting board into a
            pan!) Get one, it will change your life.
          </li>
          <li>
            <b>
              <ExternalLink href="https://www.nytimes.com/wirecutter/reviews/best-kitchen-scale/">
                digital scale
              </ExternalLink>
            </b>
            : instead of needing a measuring cup for everything, you can just
            put your bowl on the scale and dump ingredients into it until you
            get to the right weight for each. A definite time-saver, not very
            expensive, and also useful for other recipes.
          </li>
          <li>
            <b>
              <ExternalLink href="https://www.lodgecastiron.com/product/chef-collection-6-quart-double-dutch-oven?sku=LC6DD">
                dutch oven with oven safe lid
              </ExternalLink>
            </b>
            : for the first stage of your bread bake, you want a really humid
            environment so the crust doesn&apos;t set up before it has a chance
            to rise fully. A Dutch oven traps the bread&apos;s moisture inside
            of it, so you don&apos;t need to find other ways to add steam to
            your oven. You can also use a big pot with an oven-safe lid, or a
            baking sheet plus a pan filled with boiling water. But this is
            easier. I own the one that I linked{" "}
            <i>
              (so I guess this is an endorsement, hey Lodge, send me free
              stuff?)
            </i>{" "}
            and the flat top means I can use it upside down, making it a lot
            easier to transfer the bread.
          </li>
          <li>
            <b>
              <ExternalLink href="https://www.kingarthurbaking.com/blog/2023/01/25/bannetons-brotforms-proofing-baskets">
                proofing baskets (or &ldquo;bannetons&rdquo;)
              </ExternalLink>
            </b>
            : these are those stereotypical baskets that you see bread dough
            online. They&apos;re cool, and give bread the characteristic ridges
            that you see in bakeries. But you can also just use a mixing bowl or
            a colander lined with a towel, if you don&apos;t have the space or
            the inclination to get another{" "}
            <ExternalLink href="https://www.npr.org/sections/thesalt/2015/12/23/460833325/the-unitasker-kitchen-gadgets-alton-brown-loves-to-loathe">
              unitasker
            </ExternalLink>
            .
          </li>
        </ul>
      </CollapsingSection>
      <CollapsingSection
        title="Basic sourdough recipe"
        initiallyCollapsed={!party}
      >
        <p>
          This recipe will make two loaves of bread, approximately 900g apiece.
          I&apos;ve included suggested timelines, but as long as the times
          between each step are similar, the specific times aren&apos;t
          important. They&apos;re just what usually work for me.
        </p>
        <h3>Prep: ingredients</h3>
        <p>
          All you need is flour, water, and salt. Personally, I like King Arthur
          bread flour, but all-purpose flour will work fine too. As you become
          more comfortable, you can also experiment with different types of
          flour, like whole wheat, or buckwheat, or whatever else you find at
          your grocery store!
        </p>
        <h3>Night 1: prepare your starter</h3>
        <p>
          You&apos;ll mix up your starter with a larger amount of flour and
          water and let it sit overnight (or about 12 hours, depending on the
          ambient temperature) so it can begin to ferment. In a medium bowl,
          combine:
        </p>
        <ul>
          <li>a couple tablespoons of starter</li>
          <li>130g flour</li>
          <li>130g water</li>
        </ul>
        <p>
          This mixture is called a &ldquo;levain&rdquo;. It&apos;s a larger
          quantity of &ldquo;refreshed&rdquo; starter that is given flour and
          water to eat and left overnight at room temperature so that it can
          become active and ready for baking.
        </p>
        <p>
          This is also a good opportunity to feed your starter. I usually add my
          entire starter to the levain, and once it&apos;s well-mixed, I add a
          couple tablespoons back to the container and return it to the fridge.
        </p>
        <p>
          Over the next half-day or so, the levain should become nice and
          bubbly, and should approximately double in size. That means it&apos;s
          ready to use!
        </p>
        <h3 ref={sourdoughPartyScroll}>Morning 1: mix up the dough</h3>
        {party && (
          <SuccessMessage>
            If you got dough from one of my events, then it&apos;s already mixed
            up, so I recommend skimming this section and then starting with
            Night 2 (forming loaves).
          </SuccessMessage>
        )}
        <p>
          In a large mixing bowl (like, the biggest one you own, unless you have
          some ridiculous industrial-kitchen sized bowl), combine:
        </p>
        <ul>
          <li>all your levain from the night before</li>
          <li>600g of water</li>
          <li>20g of salt</li>
          <li>1000g of flour</li>
        </ul>
        <p>
          I like to go in order of: levain first, then water, then salt, then
          flour to try and avoid flour getting lost the bottom of the bowl.
          Roughly mix the ingredients together, then let the dough rest for a
          couple minutes.
        </p>
        <WarningMessage>
          This seems ridulous, but letting the dough &ldquo;relax&rdquo; for a
          few minutes every so often will actually make it easier to knead. When
          you knead, you build up gluten fibers within the dough. They give the
          bread structure, but need time to stretch out in their new elongated
          state.
        </WarningMessage>
        <p>
          Now dump your rough dough onto the counter and start kneading it! At
          first it will seem really wet and sticky &mdash; this is OK! Keep at
          it and it will come together eventually. Kneading could take 10
          minutes or more, depending on how good you are at it ;) It&apos;s
          almost impossible to over-knead by hand, so don&apos;t worry about
          that. At the end, the dough should be smooth & elastic. It might still
          be a little sticky, but should generally be more interested in
          sticking to itself than to your hands.
        </p>
        <h4>Tips for kneading</h4>
        <ul>
          <li>
            move quickly and deliberately, to give the dough less of a chance to
            stick to your hands
          </li>
          <li>use as much counter space as you can</li>
          <li>
            periodically &ldquo;un-stick&rdquo; the dough from your counter
            using a bench scraper, if you have one
          </li>
          <li>
            periodically wash your hands; it won&apos;t stick as much if your
            hands aren&apos;t already covered in dough
          </li>
        </ul>
        <p>
          Once you&apos;re done kneading, lightly oil a large bowl (it can be
          the same one as before, but wash it first!) and transfer the dough
          into it. Cover the bowl with plastic wrap and let it sit on the
          counter for 6-12 hours. This is called the &ldquo;bulk ferment&rdquo;.
          In warmer weather, this will happen more quickly. If it&apos;s really
          cold out, putting the dough in the oven <b>with only the light on</b>{" "}
          can help a lot. Be sure to leave a note so that you don&apos;t
          accidentally preheat the oven with the dough inside! You want the
          dough to approximately double in size.
        </p>
        <p>
          If you want, you can{" "}
          <ExternalLink href="https://www.theperfectloaf.com/how-to-stretch-and-fold-sourdough-bread-dough/">
            fold the dough
          </ExternalLink>{" "}
          every hour or so if (I don&apos;t usually bother – this is more
          important for higher hydration, i.e., higher water content, doughs).
        </p>
        <h3>Night 2: form loaves</h3>
        <p>
          Start by getting out your proofing baskets (if you have them) or bowls
          (lined with kitchen towels). Regardless, dust them with flour. Dump
          your dough onto the counter again and use your bench scraper (you did
          get a bench scraper, right?) to evenly divide it in half. You can use
          a scale if you want to be precise, or just eyeball it.
        </p>
        <p>
          Now it&apos;s time to &ldquo;shape&rdquo; your dough into loaves.
          There are{" "}
          <ExternalLink href="https://youtu.be/2FVfJTGpXnU?si=RC4Tl3y6smKkXs2s&t=619">
            lots of techniques
          </ExternalLink>{" "}
          for this, and they&apos;re hard to describe with text, so please look
          up some videos! But the basic idea is to use your hands or a bench
          scraper against the counter to gather the dough up until it’s formed
          into tight little rounds with smooth tops.
        </p>
        <p>
          Once you&apos;re satisfied with shaping, transfer them,{" "}
          <b>upside down</b>, into your proofing baskets or bowls. Cover them
          with something non-porous, like plastic wrap or tin foil, to prevent
          them from drying out. Place them in the fridge to proof overnight (or
          really any amount of time up to 24 hours or so), and pat yourself on
          the back for a job well done. Go to sleep, and dream of bread.
        </p>
        <h3>Anytime day 3: bake!</h3>
        <p>
          Place your dutch oven or pot inside your oven, then pre-heat it to
          500(!!!) ºF.
        </p>
        <p>
          Once the oven is hot, dump a loaf out of its proofing basket and{" "}
          <ExternalLink href="https://youtu.be/2FVfJTGpXnU?si=8enFnA2w9o1g7ZM_&t=857">
            score it
          </ExternalLink>
          . This entails making a series of small cuts on the top of the loaf,
          which encourages it to expand in a controlled way while baking. It
          also looks cool. You can buy (or{" "}
          <ExternalLink href="https://www.printables.com/model/41486-bread-lame">
            3D print
          </ExternalLink>
          )! a special tool called a lame, but a razor blade or a sharp knife
          will also do fine.
        </p>
        <p>
          Transfer your scored loaf into the pre-heated dutch oven or pot, put
          on the lid, and bake, <b>covered</b>, for 30 minutes. The dutch oven
          will capture steam from the bread inside the pot, which will help the
          bread rise.
        </p>
        <p>
          Remove the lid, reduce the temperature to 450º F, and bake for another
          10-15 minutes (depending on your oven and crust darkness preferences).
          You want an internal temperature of around 190º F. An instant-read
          thermometer is handy for this, but you can also tap on the bottom of
          the loaf and try to listen for a hollow sound.
        </p>
        <WarningMessage>
          If you don&apos;t have a dutch oven or a pot, you can bake on a pizza
          stone or cookie sheet at 450º F for 30-50 min. In this case I
          recommend spritzing the loaf heavily with water, and leaving a
          boiling-hot-water-filled baking sheet in the oven alongside the bread.
          This will release steam during the first part of baking and prevent
          the crust from forming too quickly (which would reduce oven spring).
        </WarningMessage>
        <p>
          Once the bread is done, let it cool on a cooling rack, or by leaning
          it against the counter backsplash for an hour.{" "}
          <b>Resist the urge to immediately cut into it!</b> You need to give it
          time to set up, otherwise you&apos;ll get gummy bread and no one wants
          that. I promise it will still be warm after an hour.
        </p>
      </CollapsingSection>
      <CollapsingSection title="Tips & words of encouragement">
        <ul className="spaced">
          <li>
            It might not work perfectly the first time. Sourdough is as much an
            art as it is a science, and since you&apos;re dealing with wild
            yeast, it&apos;s impossible to anticipate exactly how they will
            behave.
          </li>
          <li>
            As you continue to work with dough, you&apos;ll get a better feel
            for it.
          </li>
          <li>
            It can be handy to keep track of your measurements at first so you
            can get an idea of how adjusting things changes the way the dough
            feels. After a while you’ll be able to gain some intuition for it.
          </li>
          <li>
            Once you have a feel for it, you can start experimenting! Try more
            flour, or less! Try more water (in the biz we call this
            &ldquo;higher hydration&rdquo; dough). Use other types of flours,
            mix in some olive oil, add nuts, or olives (but I won&apos;t eat it
            if there are olives, sorry). The possibilities are endless and
            worst-case-scenario, you still have something that will probably be
            pretty tasty.
          </li>
        </ul>
        <p>Here are some examples of my first attempts:</p>
        <Image
          src="/badbread.png"
          width={2180}
          height={362}
          style={{ maxWidth: "100%" }}
          alt="bad bread"
        />
        <p>
          Finally: there are lots of snobs on the Internet that think their
          recipes are The Only Way To Properly Make Bread. But the best way to
          make sourdough is <b>is the way that works for you.</b>
        </p>
      </CollapsingSection>
    </div>
  );
};
