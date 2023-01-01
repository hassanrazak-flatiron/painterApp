const Form = () => {
    return ( 
        <div id = 'form-contact'>
            <div id ='form'>
                <form className = "font-link">
                    <label>Color</label><br></br>
                    <input className = "font-link" type='text' placeholder="Enter a color"></input><br></br>
                    <label>Stencil</label><br></br>
                    <input className = "font-link"placeholder="Enter a stencil"></input><br></br>
                    <label>Brush</label><br></br>
                    <input placeholder="Enter a Brush"></input><br></br>
                    <label className = "font-link">Texture</label><br></br>
                    <input placeholder="Enter Texture"></input><br></br>
                    <input className = "font-link" type='submit'></input>
                </form>
            </div>         
            
            

            <div>
                <p id ='contact' className="font-link"><em>Sebasitan Otaola</em></p>
                <p id ='contact' className="font-link"><em>Hassan Razak</em></p>
                <p id ='contact' className="font-link"><em>Contact Us</em></p>
            </div>
        </div>
     );
}
 
export default Form;