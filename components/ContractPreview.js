// components/ContractPreview.js
import React from 'react';
import './ContractPreview.css';

export const ContractPreview = ({ contractContent, handleDownload, downloadStatus }) => {
  const { isDownloading, message, type } = downloadStatus || {};
  
  return (
    <div className="contract-preview">
      <div className="preview-header">
        <h2>Предпросмотр договора</h2>
        
        <div className="download-area">
          <button 
            className={`btn ${isDownloading ? 'btn-secondary' : 'btn-success'}`}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? 'Подготовка файла...' : 'Скачать DOCX'}
          </button>
          
          {message && (
            <span className={`message ${type === 'success' ? 'success-message' : 'error-message'}`}>
              {message}
            </span>
          )}
        </div>
      </div>
      
      <div className="preview-content">
        <div dangerouslySetInnerHTML={{ __html: contractContent }} />
      </div>
    </div>
  );
};
