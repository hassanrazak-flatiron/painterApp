import { useNavigate } from "react-router-dom"

const Header = () => {
   
    //give value navigate function
    const navigate = useNavigate()
    
    const handleClickPersonal =()=>{
        navigate("/postgallery")
    }

    const handleClickGallery =()=>{
        navigate("/")
    }

    return ( 
        <div>
            <div id = 'header' >
                <h1 className = "font-link">T<span>H</span><span>E</span></h1>
                <h1 className = "font-link">M<span>U</span><span>S</span><span>E</span></h1>
            </div>
            <div id="routebuttons">
                <h2 onClick={handleClickPersonal} className="reroute"> Personal Gallery </h2>
                <h2 onClick={handleClickGallery} className="reroute"> View Galleries </h2>
            </div>
        </div>
     )
}
 
export default Header;