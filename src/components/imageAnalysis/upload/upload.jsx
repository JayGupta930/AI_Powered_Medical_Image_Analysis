import React, { useState } from 'react'
import './upload.css'

const Upload = () => {
  const [image, setImage] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true)
    } else if (e.type === "dragleave") {
      setIsDragging(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.includes('image')) {
      previewImage(file)
    }
  }

  const handleFileInput = (e) => {
    const file = e.target.files[0]
    if (file) {
      previewImage(file)
    }
  }

  const previewImage = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImage(reader.result)
    }
  }

  return (
    <div className="upload-container">
      <div className="upload-box">
        <h1>X-Ray Image Analysis</h1>
        <div 
          className={`drop-zone ${isDragging ? 'dragging' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {image ? (
            <img src={image} alt="Preview" className="preview-image" />
          ) : (
            <>
              <i className="fas fa-cloud-upload-alt"></i>
              <p>Drag & Drop your X-ray image here</p>
              <span>or</span>
              <label className="file-label">
                Browse File
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileInput}
                  hidden 
                />
              </label>
            </>
          )}
        </div>
        {image && (
          <button className="analyze-btn">Analyze Image</button>
        )}
      </div>
    </div>
  )
}

export default Upload
