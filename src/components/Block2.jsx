import ResourceBar from './ResourceBar'

import building from '../assets/legislature-building.jpg'

const senate = [
    ['CA Legislative Information', 'https://leginfo.legislature.ca.gov/'], 
    ['CA Senate', 'https://www.senate.ca.gov/']
]

const assembly = [
    ['CA Legislative Information', 'https://leginfo.legislature.ca.gov/'], 
    ['CA Assembly', 'https://www.senate.ca.gov/']
]

const Block = () => {
    const resourceMap = new Map();

    resourceMap.set('Senate', senate);
    resourceMap.set('Assembly', assembly);

    return (
        <div id='homepage-contents' className='contents'> 
        <h1>
            Introduction to the Legislature
        </h1>
        <h5>
            Now that you know your goal and what you are diving into, let’s go through how it will process. The legislative process is a process that most bills go through and goes relatively smoothly. Here is a basic overview of the process, throughout the rest of this course, you will delve into further details not covered in this brief.
        </h5>

        <h3>Overview</h3>
        <ul>
            <li>
            The legislative process involves considering and enacting bills into laws.
            </li>
            <li>
            The California State Legislature consists of two houses: the Senate (40 Senators) and the Assembly (80 Assembly Members).
            </li>
            <li>
            A legislative calendar outlines important dates during the two-year session.
            </li>
        </ul>
        <h3>Process Steps</h3>
        <ol>
            <h4>1. Idea</h4>
            <ul>
                <li>
                    Legislation starts as an idea or concept from various sources.
                </li>
                <li>
                   A Senator or Assembly Member authors the bill.
                </li>
            </ul>

            <h4>2. The Author</h4>
            <ul>
                <li>
                    The idea is sent to the Legislative Counsel for drafting into a bill.
                </li>
                <li>
                    If authored by a Senator, the bill is introduced in the Senate; if by an Assembly Member, it is introduced in the Assembly.
                </li>
            </ul>

            <h4>3. First Reading/Introduction</h4>
            <ul>
                <li>
                    The bill is read for the first time, and the bill number, author’s name, and title are announced.
                </li>
                <li>
                    The bill is sent to the Office of State Printing.
                </li>
                <li>
                    No action on the bill for 30 days after introduction.
                </li>
            </ul>

            <h4>4. Committee Hearings</h4>
            <ul>
                <li>The bill goes to the Rules Committee for assignment to the appropriate policy committee.</li>
                <li>Bills are assigned based on their subject matter (e.g., health bills go to the Senate Health and Human Services Committee).</li>
                <li>Fiscal bills must also be heard by the Appropriations Committee.</li>
                <li>During hearings, the bill’s author presents the bill, and testimony is heard.</li>
                <li>The committee votes to pass, amend, or defeat the bill.</li>
                <li>Letters of support or opposition are important and should be sent before hearings.</li>
                <li>A majority vote is needed to pass the bill out of committee.</li>
            </ul>

            <h4>5. Second and Third Reading</h4>
            <ul>
                <li>Passed bills are read a second time on the floor and assigned to third reading.</li>
                <li>Bill analyses are prepared before the third reading.</li>
                <li>During the third reading, the bill is explained, discussed, and voted on by roll call.</li>
                <li>Vote requirements:
                    <ul>
                        <li>Appropriation or immediate effect bills: 27 votes in the Senate, 54 in the Assembly.</li>
                        <li>Other bills: 21 votes in the Senate, 41 in the Assembly.</li>
                    </ul>
                </li>
                <li>Defeated bills can be reconsidered for another vote.</li>
            </ul>

            <h4>6. Repeat Process in the Other House</h4>
            <ul><li>The approved bill proceeds to the other house where the process is repeated.</li></ul>

            <h4>7. Resolution of Differences</h4>
            <ul>
                <li>If amended in the second house, the bill returns to the house of origin for concurrence.</li>
                <li>Unresolved differences are handled by a two-house conference committee (3 Senate members, 3 Assembly members).</li>
                <li>If a compromise is reached, the bill returns to both houses for a vote.</li>
            </ul>

            <h4>8. Governor</h4>
            <ul>
                <li>Approved bills are sent to the Governor, who can:
                    <ul>
                        <li>Sign the bill into law.</li>
                        <li>Allow it to become law without a signature.</li>
                        <li>Veto the bill (veto can be overridden by a two-thirds vote in both houses).</li>
                    </ul>
                </li>
                <li>Most bills become law on January 1 of the next year; urgency measures take effect immediately.</li>
            </ul>

            <h4>9. California Law</h4>
            <ul>
                <li>Passed bills are assigned a chapter number by the Secretary of State and become part of the California Codes.</li>
                <li>The California Constitution outlines fundamental state laws and is amended through voter-approved amendments.</li>
            </ul>
        </ol>

        <ResourceBar resources={ resourceMap }/>
        </div>
    )
}

export default Block