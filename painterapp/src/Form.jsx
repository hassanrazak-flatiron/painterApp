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
                    <input className = "font-link" placeholder="Enter a Brush"></input><br></br>
                    <label className = "font-link">Texture</label><br></br>
                    <input className = "font-link" placeholder="Enter Texture"></input><br></br>
                    <input className = "font-link" type='submit'></input>
                </form>
            </div>         
            
            

            <div>
                <p id ='contact' className="font-link"><span id='three'><em>Sebasitan Otaola</em></span></p>
                <p id ='contact' className="font-link"><span id='three'><em>Hassan Razak</em></span></p>
                <p id ='contact' className="font-link"><span id = 'three'><em>Contact Us</em></span></p>
            </div>
        </div>
     );
}
 
export default Form;