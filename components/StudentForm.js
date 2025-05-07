// components/StudentForm.js
import React from 'react';
import './StudentForm.css';

export const StudentForm = ({ 
  student, 
  index, 
  handleStudentChange, 
  removeStudent, 
  canRemove 
}) => {
  const handleChange = (field, value) => {
    handleStudentChange(index, field, value);
  };
  
  return (
    <div className="student-form">
      <div className="student-header">
        <h3>Студент #{index + 1}</h3>
        {canRemove && (
          <button 
            type="button" 
            className="btn btn-danger btn-sm" 
            onClick={() => removeStudent(index)}
          >
            Удалить
          </button>
        )}
      </div>
      
      <div className="form-group">
        <label htmlFor={`student-name-${index}`}>ФИО студента:</label>
        <input
          type="text"
          id={`student-name-${index}`}
          value={student.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          required
        />
      </div>
      
      <div className="manager-section">
        <h4>Руководитель от Университета</h4>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`univ-manager-position-${index}`}>Должность:</label>
            <input
              type="text"
              id={`univ-manager-position-${index}`}
              value={student.universityManager.position}
              onChange={(e) => handleChange('universityManager.position', e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`univ-manager-degree-${index}`}>Ученая степень:</label>
            <input
              type="text"
              id={`univ-manager-degree-${index}`}
              value={student.universityManager.academicDegree}
              onChange={(e) => handleChange('universityManager.academicDegree', e.target.value)}
              placeholder="Например: к.т.н., д.э.н. (если нет - оставьте пустым)"
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`univ-manager-name-${index}`}>ФИО:</label>
            <input
              type="text"
              id={`univ-manager-name-${index}`}
              value={student.universityManager.fullName}
              onChange={(e) => handleChange('universityManager.fullName', e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`univ-manager-email-${index}`}>Email:</label>
            <input
              type="email"
              id={`univ-manager-email-${index}`}
              value={student.universityManager.email}
              onChange={(e) => handleChange('universityManager.email', e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="manager-section">
        <h4>Руководитель от Профильной организации</h4>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`company-manager-position-${index}`}>Должность:</label>
            <input
              type="text"
              id={`company-manager-position-${index}`}
              value={student.companyManager.position}
              onChange={(e) => handleChange('companyManager.position', e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`company-manager-degree-${index}`}>Ученая степень:</label>
            <input
              type="text"
              id={`company-manager-degree-${index}`}
              value={student.companyManager.academicDegree}
              onChange={(e) => handleChange('companyManager.academicDegree', e.target.value)}
              placeholder="Например: к.т.н., д.э.н. (если нет - оставьте пустым)"
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor={`company-manager-name-${index}`}>ФИО:</label>
            <input
              type="text"
              id={`company-manager-name-${index}`}
              value={student.companyManager.fullName}
              onChange={(e) => handleChange('companyManager.fullName', e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`company-manager-email-${index}`}>Email:</label>
            <input
              type="email"
              id={`company-manager-email-${index}`}
              value={student.companyManager.email}
              onChange={(e) => handleChange('companyManager.email', e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor={`department-${index}`}>Структурное подразделение:</label>
        <input
          type="text"
          id={`department-${index}`}
          value={student.department}
          onChange={(e) => handleChange('department', e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor={`address-${index}`}>Фактический адрес места проведения практики:</label>
        <input
          type="text"
          id={`address-${index}`}
          value={student.address}
          onChange={(e) => handleChange('address', e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor={`equipment-${index}`}>Используемое оборудование:</label>
        <input
          type="text"
          id={`equipment-${index}`}
          value={student.equipment}
          onChange={(e) => handleChange('equipment', e.target.value)}
          required
        />
      </div>
    </div>
  );
};