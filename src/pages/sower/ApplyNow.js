import { ref, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import { storage } from '../../firebase/config'

function ApplyNow({name, uid, setLoading}) {
    const [file, setFile] = useState(null)
    const [error, setError] = useState("")

    const uploadFile = (e) => {
        e.preventDefault()
        if(file){
            console.log(file.name);
            if(file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.type === "application/pdf" || file.type === "application/msword"){
                setLoading(true)
                const fileRef = ref(storage, `sower/resumes/${uid}-${name}-${file.name}`)
                uploadBytes(fileRef, file).then(()=>{
                    alert("success")
                    window.location.reload() 
                }).catch((error)=>alert(error))
            }else{
                setError("Invalid file type")
            }
        }
    }

    const onFileChange = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0])
        setError("")
    }
  return (
    <div className='apply-now'>
        <h2>Upload your CV</h2>
        <form onSubmit={uploadFile} >
           <input type="file" name="cv" accept="application/pdf, application/msword , application/vnd.openxmlformats-officedocument.wordprocessingml.document " onChange={onFileChange} id="cv" />
           <p className='mess'>Choose *word/*pdf/ files</p>
            <button type='submit'>Upload</button> 
            <p>{error}</p>
        </form>
    </div>
  )
}

export default ApplyNow