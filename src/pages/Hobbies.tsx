import { FC } from 'react';
import { Link } from 'react-router-dom';
import CollapsingSection from '../shared-components/CollapsingSection';
import ExternalLink from '../shared-components/ExternalLink';
import funImage from '../img/fun.jpeg';

const Hobbies: FC = () => (
    <div>
        <p>
            What I like to do in my spare time, when I'm not working on{' '}
            <Link to="/projects">projects</Link>.
        </p>
        <CollapsingSection title="sourdough breadmaking">
            <p>
                I studied abroad in Rome in autumn 2018, and got really into
                baking sourdough bread. I even{' '}
                <ExternalLink href="http://breadcrumbs.samwolfson.com">
                    wrote a blog about it!
                </ExternalLink>{' '}
                I love the “magic” of the yeast in the starter creating gas
                bubbles in the gluten that allow the bread to rise and become
                soft and airy. The whole process is a crazy coincidence of
                trapping the byproducts of a couple microorganisms into a
                material that just so happens to have the right amount of
                elasticity to flex while still being strong enough not to break.
            </p>
        </CollapsingSection>
        <CollapsingSection title="running">
            <p>
                Ah, running. Does anyone <em>really</em> like to run? I started
                with cross-country in high school and have more-or-less kept up
                with it ever since, including with the{' '}
                <ExternalLink href="https://dawgs.run">
                    Husky Running Club
                </ExternalLink>{' '}
                when I was in college. It's a good way to keep in shape without
                really needing the type of coordination that most sports
                require. I've run in a few races:
                <ul>
                    <li>Dawg Dash (5k in 2016 and 2017, 10k in 2019)</li>
                    <li>Mt. Si Relay (2016, 2017, 2019)</li>
                    <li>Beat The Bridge (2019)</li>
                </ul>
                I think that running is a great way to escape for a little
                while. I also run to explore new places. When I visit a city I
                like to find places to run and see if I can navigate my way
                around without using a map. This has had mixed results. I've
                gotten (temporarily) lost both in Santa Clara and in Rome. In
                the former incident, I inadvertantly ran close to a
                half-marathon. I was pretty sore the next day.
            </p>
        </CollapsingSection>
        <CollapsingSection title="music">
            <p>
                I've been playing the guitar since middle school, though I've
                only taken lessons sporadically. I like to jam with my friends,
                and occasionally we make{' '}
                <ExternalLink href="https://youtu.be/ZfStaEsxl7I">
                    fun videos
                </ExternalLink>{' '}
                of us playing.
            </p>
        </CollapsingSection>
        <CollapsingSection title="outdoors">
            <div className="flex-container-wrapping">
                <p className="flex-text-left">
                    I like to hike, and have been on a number of backpacking
                    trips. My{' '}
                    <ExternalLink href="https://www.wta.org/@@backpacks/scrnm-wolfson">
                        WTA
                    </ExternalLink>{' '}
                    page has a (non-exhaustive) list of places that I've been.
                    Some notable trips are:
                    <ul>
                        <li>
                            Hidden Lake Lookout (2016, 2019, both overnight)
                        </li>
                        <li>Marmot Pass (2017, 2 nights)</li>
                        <li>Spray Park Loop (2018, 3 nights)</li>
                        <li>Camp Muir from Paradise (2019, day trip)</li>
                        <li>Spider Gap Loop (2020, 4 nights)</li>
                        <li>Seven Lakes Basin Loop (2021, 3 nights)</li>
                    </ul>
                </p>
                <img
                    src={funImage}
                    style={{ height: '250px' }}
                    className="rounded-image flex-photo-right"
                    alt="grimacing in the rain while backpacking"
                />
            </div>
        </CollapsingSection>
    </div>
);

export default Hobbies;
