import ScrollBar from './ScrollBar';
import CategoryButton from "./CategoryButton"
import Header from './Header';

const Home = ({setPaintings, paintings, setCategory, category})=>{

    return(
        <div>
            <div id = 'heading'>
                <Header />
            </div>
            <CategoryButton setCategory={setCategory}/>
            <ScrollBar setPaintings={setPaintings} category={category} paintings={paintings}/>
        </div>
    )
}

export default Home