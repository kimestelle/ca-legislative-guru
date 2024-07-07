import NavBar from './NavBar'
import TableOfContents from './TableOfContents'

const HomePage = () => {

    return (
        <div className='container'>
            <NavBar/>
        <div id='homepage-contents' className='contents'> 
        <h1>
            Welcome!
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum dolor mollitia, praesentium nemo aliquid molestiae nihil non esse! Quam incidunt voluptatum vitae totam illum, quidem vero deleniti reiciendis magni!
        </p>
        <TableOfContents></TableOfContents>
        </div>
        </div>
    )
}

export default HomePage