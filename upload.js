import React from './node_modules/react';
import { Button } from 'reactstrap';
import { useState } from 'react';
import carousal from './src/components/carousal'
export default function UploadPic() {
    const [imageInputState, setImageInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const handleImageInputChange = (e) => {
        const image = e.target.images[0];
        previewOfImage(image);
    }

    const previewOfImage = (image) => {
        //FileReader is bult in javascript api used to read files contents
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    } 

    const handleSubmitImage = (e) =>{
        console.log("submit")
        e.preventDefault();
        if(!previewSource)return;
       uploadImage(previewSource);
    }
    //"base64EncodedImage" is copy and paste code snippet 
    const uploadImage = async (base64EncodedImage) =>{
        console.log(base64EncodedImage);
        try{
            await fetch('/api/upload',{
              method:'POST',
              body: JSON.stringify({data:base64EncodedImage}),
              headers: {'Content-type':'application/json'},
            });

        } catch (error){
            console.error(error);
        }

    }
    return (
        <>
            <h1>Select 3 images for your scrapbook</h1>
            <form onSubmit={handleSubmitImage} 
            className="form">
                <input type="file" name="image" value={imageInputState} onChange={handleImageInputChange} />
                <Button color="primary">Submit</Button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="selectedImage"
                    style={{ height: '200px' }}
                />
            )}
        </>
    )
}