const CategoryButton = ({setCategory}) =>{

    function handleChange(e){
        setCategory(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div id="button" >
            <select onChange={handleChange} name="Galleries" id="category">
            <option value="paintings">Paintings</option>
            <option value="sculpture">Sculpture</option>
            <option value="personal">Personal</option>
            </select>
        </div>
        
    )
}

export default CategoryButton