// import React from 'react';
// import { Button } from 'reactstrap';
// import { useState } from 'react';
// // import carousal from './src/components/carousal'
// export default function UploadPic() {
//     const [imageInputState, setImageInputState] = useState('');
//     const [previewSource, setPreviewSource] = useState('');
//     const handleImageInputChange = (e) => {
//         const image = e.target.images[0];
//         previewOfImage(image);
//     }

//     const previewOfImage = (image) => {
//         //FileReader is bult in javascript api used to read files contents
//         const reader = new FileReader();
//         reader.readAsDataURL(image);
//         reader.onloadend = () => {
//             setPreviewSource(reader.result);
//         }
//     } 

//     const handleSubmitImage = (e) =>{
//         console.log("submit")
//         e.preventDefault();
//         if(!previewSource)return;
//        uploadImage(previewSource);
//     }
//     //"base64EncodedImage" is copy and paste code snippet 
//     const uploadImage = async (base64EncodedImage) =>{
//         console.log(base64EncodedImage);
//         try{
//             await fetch('/api/upload',{
//               method:'POST',
//               body: JSON.stringify({data:base64EncodedImage}),
//               headers: {'Content-type':'application/json'},
//             });

//         } catch (error){
//             console.error(error);
//         }

//     }
//     return (
//         <>
//             <h1>Select 3 images for your scrapbook</h1>
//             <form onSubmit={handleSubmitImage} 
//             className="form">
//                 <input type="file" name="image" value={imageInputState} onChange={handleImageInputChange} />
//                 <button color="primary">Submit</button>
//             </form>
//             {previewSource && (
//                 <img
//                     src={previewSource}
//                     alt="selectedImage"
//                     style={{ height: '200px' }}
//                 />
//             )}
//         </>
//     )
// }






























import React, {useState} from 'react';


function Cloudnary() {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState('false')

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch(
            'http://api.cloudnary.com/v1_1/university-of-pennsylvania/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
    }

    return (
        <div className="Cloudnary">
        <h1>Upload Image to Begin making ScrapBook</h1>
        <input type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
        />
        {loading ? (
            <h3>Loading ...</h3>
        ): (
            <img src={image} style={{width: '300px'}} />
        )}
        </div>
    );
}

export default Cloudnary