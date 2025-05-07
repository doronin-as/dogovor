// components/ContractPreview.js
import React, { useState } from 'react';
import './ContractPreview.css';

export const ContractPreview = ({ contractContent, handleDownload }) => {
  // Состояние для отслеживания процесса загрузки
  const [isDownloading, setIsDownloading] = useState(false);
  // Состояние для сообщения о результате загрузки
  const [downloadMessage, setDownloadMessage] = useState(null);

  // Функция для инициирования загрузки с обработкой состояния
  const initiateDownload = async () => {
    // Установка состояния загрузки и сброс сообщения
    setIsDownloading(true);
    setDownloadMessage(null);
    
    try {
      // Вызов функции handleDownload из props и ожидание результата
      const success = await handleDownload();
      
      // Установка соответствующего сообщения в зависимости от результата
      if (success) {
        setDownloadMessage({
          type: 'success',
          text: 'Документ успешно скачан'
        });
      } else {
        setDownloadMessage({
          type: 'error',
          text: 'Ошибка при скачивании документа'
        });
      }
    } catch (error) {
      // Обработка ошибок при скачивании
      console.error('Ошибка при скачивании:', error);
      setDownloadMessage({
        type: 'error',
        text: 'Произошла ошибка: ' + (error.message || 'Не удалось скачать файл')
      });
    } finally {
      // Сброс состояния загрузки независимо от результата
      setIsDownloading(false);
      
      // Автоматическое скрытие сообщения через 5 секунд
      if (downloadMessage) {
        setTimeout(() => {
          setDownloadMessage(null);
        }, 5000);
      }
    }
  };
  
  return (
    <div className="contract-preview">
      <div className="preview-header">
        <h2>Предпросмотр договора</h2>
        
        <div className="download-area">
          <button 
            className={`btn ${isDownloading ? 'btn-secondary' : 'btn-success'}`}
            onClick={initiateDownload}
            disabled={isDownloading}
          >
            {isDownloading ? 'Подготовка файла...' : 'Скачать DOCX'}
          </button>
          
          {downloadMessage && (
            <span className={`message ${downloadMessage.type === 'success' ? 'success-message' : 'error-message'}`}>
              {downloadMessage.text}
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
