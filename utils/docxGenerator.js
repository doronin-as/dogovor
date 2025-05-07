// utils/docxGenerator.js
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, BorderStyle, AlignmentType, HeadingLevel } from 'docx';

export const downloadDocx = async (htmlContent, fileName) => {
  try {
    // Здесь должен быть сложный код для преобразования HTML в объекты docx
    // Но для упрощения мы будем использовать библиотеку docx-html
    
    // Это упрощенная реализация - в реальном приложении
    // нужно использовать более сложную логику для конвертации HTML в DOCX
    
    // Создаем простой документ с заголовком
    const doc = new Document({
      title: "Договор о практической подготовке",
      description: "Автоматически сгенерированный договор",
      styles: {
        paragraphStyles: [
          {
            id: "Heading1",
            name: "Heading 1",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
              size: 28,
              bold: true,
            },
            paragraph: {
              spacing: {
                after: 120,
              },
            },
          },
          {
            id: "Heading2",
            name: "Heading 2",
            basedOn: "Normal",
            next: "Normal",
            quickFormat: true,
            run: {
              size: 26,
              bold: true,
            },
            paragraph: {
              spacing: {
                before: 240,
                after: 120,
              },
            },
          },
        ],
      },
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: "Договор о практической подготовке обучающихся",
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              text: "Данный документ был сгенерирован автоматически через систему.",
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              text: "Для получения оригинального документа, пожалуйста, загрузите HTML-версию.",
              alignment: AlignmentType.CENTER,
            }),
          ],
        },
      ],
    });

    // Генерируем docx
    const buffer = await Packer.toBuffer(doc);
    
    // Скачиваем файл
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName || 'contract'}.docx`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    return true;
  } catch (error) {
    console.error('Error generating DOCX file:', error);
    return false;
  }
};

// Заглушка функции для преобразования HTML в объекты docx
// В реальном приложении здесь должен быть сложный парсер HTML
const generateDocxFromHtml = (html) => {
  return [
    new Paragraph({
      text: "Этот документ был сгенерирован автоматически",
      alignment: AlignmentType.CENTER,
    }),
  ];
};

// Примечание: для полной функциональности генерации DOCX из HTML
// рекомендуется использовать специализированные библиотеки, такие как:
// - html-to-docx
// - mammoth.js (в обратном направлении)
// - html-docx-js
// 
// Или использовать серверный компонент для конвертации с помощью
// более мощных инструментов, таких как LibreOffice или MS Office API