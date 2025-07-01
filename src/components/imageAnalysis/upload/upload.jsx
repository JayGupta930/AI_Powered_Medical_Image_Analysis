import React, { useState } from 'react'
import './upload.css'

const Upload = () => {
  const [image, setImage] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [diagnosis, setDiagnosis] = useState(null)

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

  const handleAnalyze = () => {
    // Simulated diagnosis response - in a real application, this would come from an API
    const diagnosisResponse = {
      condition: "Potential Pneumonia Detected",
      confidence: "85%",
      findings: [
        "Increased opacity in lower right lung field",
        "Slight pleural effusion",
        "No visible bone abnormalities"
      ],
      recommendations: [
        "Further clinical correlation recommended",
        "Consider CT scan for detailed evaluation",
        "Follow-up in 2 weeks"
      ],
      severity: "Moderate",
      additionalNotes: "Patient should be monitored for respiratory symptoms"
    };
    
    setDiagnosis(diagnosisResponse);
  };

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
          <button className="analyze-btn" onClick={handleAnalyze}>Analyze Image</button>
        )}

        {diagnosis && (
          <div className="diagnosis-section">
            <h2>Diagnosis Results</h2>
            <div className="diagnosis-header">
              <span className="condition">{diagnosis.condition}</span>
              <span className="confidence">Confidence: {diagnosis.confidence}</span>
              <span className="severity">Severity: {diagnosis.severity}</span>
            </div>
            
            <div className="diagnosis-details">
              <h3>Key Findings:</h3>
              <ul>
                {diagnosis.findings.map((finding, index) => (
                  <li key={`finding-${index}`}>{finding}</li>
                ))}
              </ul>

              <h3>Recommendations:</h3>
              <ul>
                {diagnosis.recommendations.map((rec, index) => (
                  <li key={`rec-${index}`}>{rec}</li>
                ))}
              </ul>

              <div className="additional-notes">
                <h3>Additional Notes:</h3>
                <p>{diagnosis.additionalNotes}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Upload
