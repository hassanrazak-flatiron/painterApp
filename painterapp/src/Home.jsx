import ScrollBar from './ScrollBar';
import CategoryButton from "./CategoryButton"

const Home = ({paintings, setCategory, category})=>{
    
    return(
        <div>
            <CategoryButton setCategory={setCategory}/>
            <ScrollBar category={category} paintings={paintings}/>
        </div>
    )
}

export default Home