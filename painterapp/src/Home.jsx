import ScrollBar from './ScrollBar';
import CategoryButton from "./CategoryButton"
import Header from './Header';

const Home = ({setPaintings, paintings, setCategory, category})=>{

    return(
        <div>
            <div id = 'heading'>

            <div id = 'heading'>
                <Header />
            </div>
            <CategoryButton setCategory={setCategory}/>
            <ScrollBar setCategory={setCategory} setPaintings={setPaintings} category={category} paintings={paintings}/>
            </div>
        </div>
    )
}

export default Home