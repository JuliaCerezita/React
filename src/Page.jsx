import Posts from './Posts';
import Stories from './Stories'
import NavBar from './NavBar';


const Page = () => {
    return(<div className="pagewrapper">
                <div className="page">
                    <main>
                        <Stories />
                        <Posts />
                    </main>
                    <NavBar />
               </div>
           </div>
           )
}

export default Page;