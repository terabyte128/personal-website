import { FC } from 'react';
import ExternalLink from '../shared-components/ExternalLink';

const Random: FC = () => (
    <p>
        Other things that don't quite fit elsewhere.
        <ul className="list-relaxed">
            <li>
                <ExternalLink href="https://sustainablecapitolhill.org/">
                    Sustainable Capitol Hill
                </ExternalLink>
                : I volunteer at the Tool Library that this organization
                manages. We check out all sorts of useful items &mdash; from
                drills to lawnmowers to coolers! By providing shared resources
                for the community, we reduce the need for individual consumption
                and ensure greater access for those who either can't afford to
                buy their own tools, or don't have the space to store
                seldom-used items.
            </li>
            <li>
                <ExternalLink href="https://www.seattle.gov/seattle-renters-commission">
                    Seattle Renter's Commission
                </ExternalLink>
                : I serve on this city board, which advises the Mayor, City
                Council, and other departments on issues affecting renters in
                Seattle. As someone who loves Seattle and wants to see it
                thrive, I hope to advocate for housing that is affordable,
                welcoming, and plentiful for everyone who wants to live here.
            </li>
            <li>
                <ExternalLink href="https://fixthel8.com/">
                    Fix The L8
                </ExternalLink>
                : I live very close to the 8 bus, and am constantly frustrated
                that such a convenient and popular route is always mired in
                traffic. Tell your councilmembers that this route and its riders
                deserve better!
            </li>
        </ul>
    </p>
);

export default Random;
