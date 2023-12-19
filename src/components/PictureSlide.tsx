import { useEffect, useRef, useState } from "react";

export function PictureSlide (props: { imageSources: string[] }) {
    
    const count = useRef(0);
    const [image,setImage] = useState(props.imageSources[count.current])
    
    
    function selectImage() {
        if (count.current < props.imageSources.length-1){
            count.current = count.current +1;
            setImage(props.imageSources[count.current])
        }
        else{
            count.current=0;
            setImage(props.imageSources[count.current])
        }
    }

    useEffect(() => { const interval = 
        setInterval(() => { 
            selectImage();}, 7000);
        return () => clearInterval(interval); 
    }, []);


  return (
    <div style={{marginLeft: 'auto', marginRight: 'auto',display: 'flex', maxWidth: '358px', maxHeight:"220px"}}>
        <img src={image} style={{ width: '100%'}}/>
    </div>
  )
}

