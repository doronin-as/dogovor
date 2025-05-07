// utils/docxGenerator.js
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, BorderStyle, AlignmentType, HeadingLevel } from 'docx';

export const downloadDocx = async (htmlContent, fileName) => {
  try {
    // Парсим HTML контент для извлечения данных
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContent, 'text/html');
    
    // Получаем контент договора
    const docElements = [];
    
    // Заголовок договора
    docElements.push(
      new Paragraph({
        text: "Договор о практической подготовке обучающихся",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
      }),
    );
    
    // Извлекаем данные из HTML для формирования документа
    const contractDiv = htmlDoc.querySelector('.contract');
    if (contractDiv) {
      // Обрабатываем заголовок
      const headerDiv = contractDiv.querySelector('.contract-header');
      if (headerDiv) {
        const h1 = headerDiv.querySelector('h1');
        if (h1) {
          docElements.push(
            new Paragraph({
              text: h1.textContent,
              alignment: AlignmentType.CENTER,
              bold: true,
            })
          );
        }
        
        const h2 = headerDiv.querySelector('h2');
        if (h2) {
          docElements.push(
            new Paragraph({
              text: h2.textContent,
              alignment: AlignmentType.CENTER,
              bold: true,
            })
          );
        }
        
        const dateP = headerDiv.querySelector('p');
        if (dateP) {
          docElements.push(
            new Paragraph({
              text: dateP.textContent,
              alignment: AlignmentType.RIGHT,
            })
          );
        }
      }
      
      // Обрабатываем основной текст
      const bodyDiv = contractDiv.querySelector('.contract-body');
      if (bodyDiv) {
        const paragraphs = bodyDiv.querySelectorAll('p');
        paragraphs.forEach(p => {
          docElements.push(
            new Paragraph({
              text: p.textContent,
              alignment: AlignmentType.JUSTIFIED,
            })
          );
        });
        
        // Обрабатываем заголовки разделов
        const h3Elements = bodyDiv.querySelectorAll('h3');
        h3Elements.forEach(h3 => {
          docElements.push(
            new Paragraph({
              text: h3.textContent,
              alignment: AlignmentType.CENTER,
              bold: true,
              spacing: {
                before: 240,
                after: 120,
              },
            })
          );
        });
        
        // Обрабатываем таблицы
        const tables = bodyDiv.querySelectorAll('table');
        tables.forEach(table => {
          const rows = [];
          
          const tableRows = table.querySelectorAll('tr');
          tableRows.forEach(tr => {
            const cells = [];
            const tds = tr.querySelectorAll('th, td');
            
            tds.forEach(td => {
              cells.push(
                new TableCell({
                  children: [
                    new Paragraph({
                      text: td.textContent,
                      alignment: AlignmentType.LEFT,
                    }),
                  ],
                  borders: {
                    top: { style: BorderStyle.SINGLE, size: 1 },
                    bottom: { style: BorderStyle.SINGLE, size: 1 },
                    left: { style: BorderStyle.SINGLE, size: 1 },
                    right: { style: BorderStyle.SINGLE, size: 1 },
                  },
                })
              );
            });
            
            rows.push(new TableRow({ children: cells }));
          });
          
          docElements.push(
            new Table({
              rows: rows,
              borders: {
                top: { style: BorderStyle.SINGLE, size: 1 },
                bottom: { style: BorderStyle.SINGLE, size: 1 },
                left: { style: BorderStyle.SINGLE, size: 1 },
                right: { style: BorderStyle.SINGLE, size: 1 },
              },
            })
          );
        });
        
        // Обрабатываем списки
        const ols = bodyDiv.querySelectorAll('ol');
        ols.forEach(ol => {
          const items = ol.querySelectorAll('li');
          let counter = ol.hasAttribute('start') ? parseInt(ol.getAttribute('start')) : 1;
          
          items.forEach(li => {
            docElements.push(
              new Paragraph({
                text: `${counter}. ${li.textContent}`,
                alignment: AlignmentType.LEFT,
                indent: { left: 720 }, // 0.5 дюйма в твипах
              })
            );
            counter++;
          });
        });
      }
    }
    
    // Создаем документ
    const doc = new Document({
      title: "Договор о практической подготовке",
      description: "Автоматически сгенерированный договор",
      sections: [
        {
          properties: {},
          children: docElements,
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
