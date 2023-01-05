const[gallery, setGallery] = useState([])
    const[type,setType] = useState('Paintings')



    
    const fetchArt = async() =>{
        let req = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?medium=${type}&q=${type}`)
        let  res = await req.json()
        setGallery(res.objectIDs.slice(0,10))
        console.log(res)
    }
    
    useEffect(()=>{
        fetchArt()
        
    },[])
    
    
    const fetchSingleObject  = () => {
        
        gallery.map((object)=>{
            return(
             
             fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}`)
            .then(res => res.json())
            .then(res => fetchToLocal(res))
            
            )
        })
    }
fetchSingleObject()


    const fetchToLocal = async (res) =>{
        let req  = await fetch('http://localhost:3000/museum',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: res.title,
            Artist:res.artistDisplayName,
            imageURL:res.primaryImage,
            Date: res.objectDate,
            Description: "",
            category: type

        })
        
    })

        .then(res => res.json())
        .then(res => console.log("Success: ",res))
    }