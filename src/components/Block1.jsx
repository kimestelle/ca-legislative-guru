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
            Your first step in converting your idea into legislation is to know what field you are going into. This is similar to cooking your favorite food; you need to know what exactly you want to cook along with the proper ingredients and measurements of each. This section will provide you with all the necessary information for you to become a legislation pro.
        </h5>

        <h3>What is legislation?</h3>
        <p>
            Legislation refers to laws that are enacted by a government body. It governs various aspects in our lives such as public health, environmental sustainability, public safety, and education policy. As impactful as legislation is, the lengthy and arduous process reflects its significance. The formal process, which is often spearheaded by elected representatives, include drafting, lobbying, amending, and enacting the bill. Anyone can start the process of creating an impactful bill!
        </p>
        <h3>What is the legislature?</h3>
        <p>
            The Legislature in California consists of two houses: the California State Assembly and the California State Senate. The elected representatives of both houses are responsible for making state laws. The Assembly is the lower house, with 80 members serving two-year terms, while the Senate is the upper house, with 40 members serving four-year terms. Together, they debate, propose, and vote on legislation, ensuring that the laws passed are in the best interest of California&apos;s diverse population.
        </p>
        <h3>What are bills?</h3>
        <p>
            Bills are proposals for new laws or amendments (revisions) to existing laws that are introduced in the California Legislature. A bill can be proposed to a respective member of the legislature by anyone, including you! The introduced bill can then be introduced by any member of the Legislature, a legislative committee, or the Governor. If a bill passes both houses, it is sent to the Governor, who can sign it into law or veto it. This rigorous process ensures that only well-vetted bills become laws.
        </p>
        <div>
        <div className="white-overlay"/>
        <img src={building}></img>
        </div>
        <h3>How do laws affect us?</h3>
        <p>
            Bills, once enacted into law, have a significant impact on the daily lives of Californians. They can shape public policy on healthcare, education, environmental protection, and civil rights. For example, California&apos;s Clean Air Act has been instrumental in reducing air pollution and improving public health. The California Consumer Privacy Act (CCPA) has given residents greater control over their personal data. Legislation affecting minimum wage laws, housing regulations, and public safety measures all directly influence the quality of life in California.
        </p>
        <ResourceBar resources={ resourceMap }/>
        </div>
    )
}

export default Block