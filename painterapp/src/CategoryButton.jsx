const CategoryButton = ({setCategory}) =>{

    //set cateory useState to drop down value
    function handleChange(e){
        setCategory(e.target.value)
    }

    return (
        <div id="button" >
            <select onChange={handleChange} name="Galleries" id="category">
            <option value="painting">Paintings</option>
            <option value="sculpture">Sculpture</option>
            <option value="personal">Personal</option>
            </select>
        </div>
        
    )
}

export default CategoryButton