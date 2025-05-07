// App.js - Основной компонент приложения
import React, { useState } from 'react';
import { ContractForm } from './components/ContractForm';
import { ContractPreview } from './components/ContractPreview';
import { generateContract } from './utils/contractGenerator';
import { downloadDocx } from './utils/docxGenerator';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    // Компания
    companyName: '',
    companyShortName: '',
    companyLegalAddress: '',
    companyPhone: '',
    companyEmail: '',
    companyINN: '',
    companyOGRN: '',
    companyKPP: '',
    
    // Подписант
    signatoryPosition: '',
    signatoryPositionGenitive: '', // в родительном падеже
    signatoryFullName: '',
    signatoryShortName: '',
    signatoryFoundation: '', // на основании чего действует
    
    // Ответственный исполнитель от компании
    executorPosition: '',
    executorFullName: '',
    executorPhone: '',
    executorEmail: '',
    
    // Информация о практике/образовательной программе
    directionCode: '',
    directionName: '',
    programName: '',
    programCode: '',
    practiceType: '',
    practiceForm: '',
    practiceMethod: '',
    institute: '',
    highSchool: '',
    course: '',
    educationForm: '',
    credits: '',
    practiceDates: '',
    
    // Информация о студентах (массив)
    students: [{
      fullName: '',
      universityManager: {
        position: '',
        academicDegree: '',
        fullName: '',
        email: ''
      },
      companyManager: {
        position: '',
        academicDegree: '',
        fullName: '',
        email: ''
      },
      department: '',
      address: '',
      equipment: 'Персональный компьютер'
    }]
  });
  
  const [generatedContract, setGeneratedContract] = useState(null);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Обработка вложенных свойств (с точечной нотацией)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleStudentChange = (index, field, value) => {
    setFormData(prev => {
      const updatedStudents = [...prev.students];
      
      // Обработка вложенных полей студентов
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        updatedStudents[index] = {
          ...updatedStudents[index],
          [parent]: {
            ...updatedStudents[index][parent],
            [child]: value
          }
        };
      } else {
        updatedStudents[index] = {
          ...updatedStudents[index],
          [field]: value
        };
      }
      
      return {
        ...prev,
        students: updatedStudents
      };
    });
  };
  
  const addStudent = () => {
    setFormData(prev => ({
      ...prev,
      students: [
        ...prev.students,
        {
          fullName: '',
          universityManager: {
            position: '',
            academicDegree: '',
            fullName: '',
            email: ''
          },
          companyManager: {
            position: '',
            academicDegree: '',
            fullName: '',
            email: ''
          },
          department: '',
          address: '',
          equipment: 'Персональный компьютер'
        }
      ]
    }));
  };
  
  const removeStudent = (index) => {
    setFormData(prev => {
      const updatedStudents = [...prev.students];
      updatedStudents.splice(index, 1);
      return {
        ...prev,
        students: updatedStudents
      };
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const contractContent = generateContract(formData);
    setGeneratedContract(contractContent);
  };
  
  const handleDownload = () => {
    if (generatedContract) {
      downloadDocx(generatedContract, `Договор_${formData.companyShortName || 'о_практике'}`);
    }
  };
  
  return (
    <div className="app">
      <header className="app-header">
        <h1>Генератор договоров о практической подготовке</h1>
      </header>
      
      <main className="app-content">
        <div className="form-container">
          <ContractForm 
            formData={formData}
            handleInputChange={handleInputChange}
            handleStudentChange={handleStudentChange}
            addStudent={addStudent}
            removeStudent={removeStudent}
            handleSubmit={handleSubmit}
          />
        </div>
        
        {generatedContract && (
          <div className="preview-container">
            <ContractPreview 
              contractContent={generatedContract}
              handleDownload={handleDownload}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;