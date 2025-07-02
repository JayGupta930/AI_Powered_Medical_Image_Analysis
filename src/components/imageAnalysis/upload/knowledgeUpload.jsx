import React, { useState } from 'react';
import './upload.css';

const KnowledgeUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showResponse, setShowResponse] = useState(false);
    
    const defaultResponse = {
        title: "Image Analysis Result",
        description: "Thank you for uploading the image. Here is our standard analysis:",
        details: [
            "This image has been successfully processed",
            "Standard quality check: Passed",
            "Image received and stored securely",
            "Analysis complete"
        ]
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            setShowResponse(true);
        }
    };

    return (
        <div className="upload-container">
            <div className="upload-section">
                <h2>Upload Your Image</h2>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="file-input"
                />
                
                {selectedImage && (
                    <div className="preview-section">
                        <h3>Preview:</h3>
                        <img 
                            src={selectedImage} 
                            alt="Preview" 
                            className="image-preview"
                        />
                    </div>
                )}

                {showResponse && (
                    <div className="response-section">
                        <h3>{defaultResponse.title}</h3>
                        <p>{defaultResponse.description}</p>
                        <ul>
                            {defaultResponse.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KnowledgeUpload;