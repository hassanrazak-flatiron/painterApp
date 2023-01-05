import { useState } from "react";
import ScrollBar from "./ScrollBar";
import Header from "./Header";

const Form = ({paintings, setPaintings}) => {
    
    //current date
    const date = new Date();

    let year = date.getFullYear();

    //Post info
    const [postArtist, setPostArtist] = useState("")
    const [postImage, setPostImage] = useState("")
    const [postTitle, setPostTitle] = useState("")
    const [postDescription, setPostDescription] = useState("")

    const data =
                {
                  title : postTitle,
                  Artist: postArtist,
                  imageURL: postImage,
                  Date: year,
                  Description: postDescription,
                  category: "Personal"
                } 

    function handleSubmit(e){

        if(postArtist !== "" && postImage !== "" && postTitle !== ""){
            
            fetch( "http://localhost:3000/museum", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify(data)
            })

        } else {
            window.alert("Make sure atleast `Artist,` `Image,` and `Title,` are filled out.");
        }

    }
    
    return ( 
    <div>
        <div>
            <Header/>
        </div>
        
        <ScrollBar category="personal" paintings={paintings} setPaintings={setPaintings}/>

        <div id = 'form-contact'>
                <form onSubmit={handleSubmit}id = "form">
                    <label className = "formLabel">Artist Name:</label>
                    <input onChange = {(e)=>setPostArtist(e.target.value)} className = "form" type='text' placeholder="Enter Your Name"></input>
                    <label className = "formLabel">Image:</label>
                    <input onChange = {(e)=>setPostImage(e.target.value)} className = "form" type='text' placeholder="Enter Your Art"></input>
                    <label className = "formLabel">Title:</label>
                    <input onChange = {(e)=>setPostTitle(e.target.value)} className = "form" type='text' placeholder="Enter Your Title"></input>
                    <label className = "formLabel">Description:</label>
                    <input onChange = {(e)=>setPostDescription(e.target.value)} className = "form" type='text' placeholder="Enter Your Description"></input>
                    <input className = "formSubmit" type='submit'></input>
                </form>
        </div>
    </div>
     );
}
 
export default Form;