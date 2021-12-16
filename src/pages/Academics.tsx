import { FC } from 'react';
import ExternalLink from '../shared-components/ExternalLink';

const Academics: FC = () => (
    <>
        <p>
            I graduated with a master’s degree in{' '}
            <ExternalLink href="https://www.cs.washington.edu">
                computer science
            </ExternalLink>{' '}
            at the{' '}
            <ExternalLink href="http://www.washington.edu">
                University of Washington
            </ExternalLink>{' '}
            in summer 2020.
        </p>
        <p>
            My main academic focus at present is teaching, which I have done
            mainly at the university level. I’ve worked as a TA for these
            courses at UW:
        </p>
        <ul>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse351/17au/">
                    The Hardware/Software Interface, Autumn 2017
                </a>
            </li>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse120/18wi/">
                    Computer Science Principles, Winter 2018
                </a>
            </li>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse351/18sp/">
                    The Hardware/Software Interface, Spring 2018
                </a>
            </li>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse120/19wi/">
                    Computer Science Principles, Winter 2019
                </a>
            </li>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse351/19sp/">
                    The Hardware/Software Interface, Spring 2019
                </a>
            </li>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse401/19au/">
                    Introduction to Compiler Construction, Autumn 2019
                </a>
            </li>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse484/20sp">
                    Computer Security, Spring 2020 (online due to COVID)
                </a>
            </li>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse351/20su/">
                    The Hardware/Software Interface, Summer 2020 (online due to
                    COVID)
                </a>
            </li>
        </ul>
        <p>
            and I have been (or will be) the instructor of record for these
            courses:
        </p>
        <ul>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse351/19su/">
                    The Hardware/Software Interface, Summer 2019
                </a>
            </li>
            <li>
                <a href="https://courses.cs.washington.edu/courses/cse120/20wi/">
                    Computer Science Principles, Winter 2020
                </a>
            </li>
            <li>
                <ExternalLink href="https://courses.cs.washington.edu/courses/cse351/22wi/">
                    The Hardware/Software Interface, Winter 2022
                </ExternalLink>
            </li>
        </ul>
    </>
);

export default Academics;
