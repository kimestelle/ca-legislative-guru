import NavBar from './NavBar'
import ResourceBar from './ResourceBar'

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
        <div className='container'>
            <NavBar/>
        <div id='homepage-contents' className='contents'> 
        <h1>
            Block 1
        </h1>
        <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum dolor mollitia, praesentium nemo aliquid molestiae nihil non esse! Quam incidunt voluptatum vitae totam illum, quidem vero deleniti reiciendis magni!
        </h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum dolor mollitia, praesentium nemo aliquid molestiae nihil non esse! Quam incidunt voluptatum vitae totam illum, quidem vero deleniti reiciendis magni!
        </p>
        <ResourceBar resources={ resourceMap }/>
        </div>
        </div>
    )
}

export default Block