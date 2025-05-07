// utils/docxGenerator.js
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, BorderStyle, AlignmentType, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';

export const downloadDocx = async (htmlContent, fileName) => {
  try {
    // Парсим HTML контент
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContent, 'text/html');
    
    // Конвертируем HTML в элементы docx
    const docElements = convertHtmlToDocx(htmlDoc);
    
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
    
    // Скачиваем файл с помощью FileSaver
    const blob = new Blob([buffer], { 
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
    });
    
    // Исправленное имя файла (удаляем недопустимые символы)
    const safeFileName = (fileName || 'contract').replace(/[^\w\s-]/gi, '');
    
    // Скачиваем с помощью FileSaver
    saveAs(blob, `${safeFileName}.docx`);
    
    return true;
  } catch (error) {
    console.error('Error generating DOCX file:', error);
    return false;
  }
};

// Функция конвертации HTML в элементы docx
const convertHtmlToDocx = (htmlDoc) => {
  const docElements = [];
  const contract = htmlDoc.querySelector('.contract');
  
  if (!contract) {
    return [
      new Paragraph({
        text: "Ошибка при формировании документа",
        alignment: AlignmentType.CENTER,
      })
    ];
  }
  
  // Обработка заголовка договора
  const header = contract.querySelector('.contract-header');
  if (header) {
    const h1 = header.querySelector('h1');
    if (h1) {
      docElements.push(
        new Paragraph({
          text: h1.textContent,
          heading: HeadingLevel.HEADING_1,
          alignment: AlignmentType.CENTER,
        })
      );
    }
    
    const h2 = header.querySelector('h2');
    if (h2) {
      docElements.push(
        new Paragraph({
          text: h2.textContent,
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.CENTER,
        })
      );
    }
    
    const dateP = header.querySelector('p');
    if (dateP) {
      docElements.push(
        new Paragraph({
          text: dateP.textContent,
          alignment: AlignmentType.RIGHT,
        })
      );
    }
  }
  
  // Обработка основной части договора
  const body = contract.querySelector('.contract-body');
  if (body) {
    Array.from(body.children).forEach(element => {
      if (element.tagName === 'P') {
        docElements.push(
          new Paragraph({
            text: element.textContent,
            alignment: AlignmentType.JUSTIFIED,
          })
        );
      } else if (element.tagName === 'H3') {
        docElements.push(
          new Paragraph({
            text: element.textContent,
            heading: HeadingLevel.HEADING_3,
            alignment: AlignmentType.CENTER,
          })
        );
      } else if (element.tagName === 'H4') {
        docElements.push(
          new Paragraph({
            text: element.textContent,
            bold: true,
          })
        );
      } else if (element.tagName === 'OL') {
        processOrderedList(element, docElements);
      } else if (element.tagName === 'UL') {
        processUnorderedList(element, docElements);
      } else if (element.tagName === 'TABLE') {
        docElements.push(processTable(element));
      }
    });
  }
  
  return docElements;
};

// Обработка нумерованного списка
const processOrderedList = (olElement, docElements) => {
  const items = olElement.querySelectorAll('li');
  let startNumber = olElement.getAttribute('start') ? parseInt(olElement.getAttribute('start')) : 1;
  
  items.forEach((item, index) => {
    docElements.push(
      new Paragraph({
        text: `${startNumber + index}. ${item.textContent}`,
        indent: {
          left: 720, // 0.5 inch in twips
        },
      })
    );
  });
};

// Обработка маркированного списка
const processUnorderedList = (ulElement, docElements) => {
  const items = ulElement.querySelectorAll('li');
  
  items.forEach(item => {
    docElements.push(
      new Paragraph({
        text: `• ${item.textContent}`,
        indent: {
          left: 720, // 0.5 inch in twips
        },
      })
    );
  });
};

// Обработка таблицы
const processTable = (tableElement) => {
  const rows = [];
  const tableRows = tableElement.querySelectorAll('tr');
  
  tableRows.forEach(row => {
    const cells = [];
    const tableCells = row.querySelectorAll('th, td');
    
    tableCells.forEach(cell => {
      const isHeader = cell.tagName === 'TH';
      
      cells.push(
        new TableCell({
          children: [
            new Paragraph({
              text: cell.textContent,
              alignment: AlignmentType.LEFT,
            }),
          ],
          shading: isHeader ? {
            fill: "F2F2F2",
          } : undefined,
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
  
  return new Table({
    rows: rows,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1 },
      bottom: { style: BorderStyle.SINGLE, size: 1 },
      left: { style: BorderStyle.SINGLE, size: 1 },
      right: { style: BorderStyle.SINGLE, size: 1 },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1 },
      insideVertical: { style: BorderStyle.SINGLE, size: 1 },
    },
  });
};
