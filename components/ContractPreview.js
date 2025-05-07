// components/ContractPreview.js
import React from 'react';
import './ContractPreview.css';

export const ContractPreview = ({ contractContent, handleDownload }) => {
  return (
    <div className="contract-preview">
      <div className="preview-header">
        <h2>Предпросмотр договора</h2>
        <button 
          className="btn btn-success" 
          onClick={handleDownload}
        >
          Скачать DOCX
        </button>
      </div>
      
      <div className="preview-content">
        <pre dangerouslySetInnerHTML={{ __html: contractContent }} />
      </div>
    </div>
  );
};