// utils/docxGenerator.js
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, BorderStyle, AlignmentType, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';

export const downloadDocx = async (htmlContent, fileName = 'contract') => {
  try {
    console.log('Начало генерации DOCX...');
    
    // Парсим HTML контент
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContent, 'text/html');
    
    // Создаем простой документ без сложных преобразований для начала
    const doc = new Document({
      title: "Договор о практической подготовке",
      description: "Автоматически сгенерированный договор",
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: "Договор о практической подготовке",
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              text: "Создано в генераторе договоров",
              alignment: AlignmentType.CENTER,
            }),
            // Добавляем простой текст из контракта вместо сложного преобразования
            new Paragraph({
              text: "Данные договора",
              alignment: AlignmentType.LEFT,
            })
          ],
        },
      ],
    });

    console.log('Документ создан, подготовка к скачиванию...');
    
    // Генерируем docx
    const buffer = await Packer.toBuffer(doc);
    
    // Скачиваем файл с помощью FileSaver
    const blob = new Blob([buffer], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    
    // Исправленное имя файла (удаляем недопустимые символы)
    const safeFileName = fileName.replace(/[^\w\s-]/gi, '') || 'contract';
    
    console.log(`Скачивание файла: ${safeFileName}.docx`);
    
    // Скачиваем с помощью FileSaver
    saveAs(blob, `${safeFileName}.docx`);
    
    console.log('Скачивание завершено');
    return true;
  } catch (error) {
    console.error('Ошибка при генерации DOCX файла:', error);
    return false;
  }
};
