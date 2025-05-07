// components/ContractForm.js
import React from 'react';
import { StudentForm } from './StudentForm';
import './ContractForm.css';

export const ContractForm = ({ 
  formData, 
  handleInputChange, 
  handleStudentChange, 
  addStudent, 
  removeStudent, 
  handleSubmit 
}) => {
  return (
    <form onSubmit={handleSubmit} className="contract-form">
      <div className="form-section">
        <h2>Информация о компании</h2>
        
        <div className="form-group">
          <label htmlFor="companyName">Полное наименование компании:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="companyShortName">Краткое наименование компании:</label>
          <input
            type="text"
            id="companyShortName"
            name="companyShortName"
            value={formData.companyShortName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="companyLegalAddress">Юридический адрес:</label>
            <input
              type="text"
              id="companyLegalAddress"
              name="companyLegalAddress"
              value={formData.companyLegalAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="companyPhone">Телефон организации:</label>
            <input
              type="text"
              id="companyPhone"
              name="companyPhone"
              value={formData.companyPhone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="companyEmail">Email организации:</label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="companyINN">ИНН организации:</label>
            <input
              type="text"
              id="companyINN"
              name="companyINN"
              value={formData.companyINN}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="companyOGRN">ОГРН организации:</label>
            <input
              type="text"
              id="companyOGRN"
              name="companyOGRN"
              value={formData.companyOGRN}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="companyKPP">КПП организации:</label>
            <input
              type="text"
              id="companyKPP"
              name="companyKPP"
              value={formData.companyKPP}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h2>Информация о подписанте</h2>
        
        <div className="form-group">
          <label htmlFor="signatoryPosition">Должность подписанта:</label>
          <input
            type="text"
            id="signatoryPosition"
            name="signatoryPosition"
            value={formData.signatoryPosition}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="signatoryPositionGenitive">Должность подписанта (в родительном падеже):</label>
          <input
            type="text"
            id="signatoryPositionGenitive"
            name="signatoryPositionGenitive"
            value={formData.signatoryPositionGenitive}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="signatoryFullName">ФИО подписанта полностью:</label>
          <input
            type="text"
            id="signatoryFullName"
            name="signatoryFullName"
            value={formData.signatoryFullName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="signatoryShortName">ФИО подписанта сокращенно (И.О. Фамилия):</label>
          <input
            type="text"
            id="signatoryShortName"
            name="signatoryShortName"
            value={formData.signatoryShortName}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="signatoryFoundation">Основание для подписи:</label>
          <input
            type="text"
            id="signatoryFoundation"
            name="signatoryFoundation"
            value={formData.signatoryFoundation}
            onChange={handleInputChange}
            required
            placeholder="Например: доверенности № 123 от 01.01.2025, Устава"
          />
        </div>
      </div>
      
      <div className="form-section">
        <h2>Исполнитель от компании</h2>
        
        <div className="form-group">
          <label htmlFor="executorPosition">Должность исполнителя:</label>
          <input
            type="text"
            id="executorPosition"
            name="executorPosition"
            value={formData.executorPosition}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="executorFullName">ФИО исполнителя:</label>
            <input
              type="text"
              id="executorFullName"
              name="executorFullName"
              value={formData.executorFullName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="executorPhone">Телефон исполнителя:</label>
            <input
              type="text"
              id="executorPhone"
              name="executorPhone"
              value={formData.executorPhone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="executorEmail">Email исполнителя:</label>
          <input
            type="email"
            id="executorEmail"
            name="executorEmail"
            value={formData.executorEmail}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="form-section">
        <h2>Информация о практике и образовательной программе</h2>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="directionCode">Код направления подготовки:</label>
            <input
              type="text"
              id="directionCode"
              name="directionCode"
              value={formData.directionCode}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="directionName">Наименование направления подготовки:</label>
            <input
              type="text"
              id="directionName"
              name="directionName"
              value={formData.directionName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="programName">Наименование образовательной программы:</label>
            <input
              type="text"
              id="programName"
              name="programName"
              value={formData.programName}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="programCode">Код образовательной программы:</label>
            <input
              type="text"
              id="programCode"
              name="programCode"
              value={formData.programCode}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="practiceType">Вид/тип практики:</label>
            <input
              type="text"
              id="practiceType"
              name="practiceType"
              value={formData.practiceType}
              onChange={handleInputChange}
              required
              placeholder="Например: Производственная / Преддипломная / Учебно-ознакомительная"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="practiceForm">Форма практики:</label>
            <input
              type="text"
              id="practiceForm"
              name="practiceForm"
              value={formData.practiceForm}
              onChange={handleInputChange}
              required
              placeholder="Например: Дискретная / Непрерывная"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="practiceMethod">Способ проведения практики:</label>
          <input
            type="text"
            id="practiceMethod"
            name="practiceMethod"
            value={formData.practiceMethod}
            onChange={handleInputChange}
            required
            placeholder="Например: Стационарная / Выездная"
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="institute">Институт:</label>
            <input
              type="text"
              id="institute"
              name="institute"
              value={formData.institute}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="highSchool">Высшая школа:</label>
            <input
              type="text"
              id="highSchool"
              name="highSchool"
              value={formData.highSchool}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="course">Курс:</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="educationForm">Форма обучения:</label>
            <input
              type="text"
              id="educationForm"
              name="educationForm"
              value={formData.educationForm}
              onChange={handleInputChange}
              required
              placeholder="Например: Очная / Заочная / Очно-заочная"
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="credits">Объем (в З.Е.):</label>
            <input
              type="text"
              id="credits"
              name="credits"
              value={formData.credits}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="practiceDates">Сроки практики:</label>
            <input
              type="text"
              id="practiceDates"
              name="practiceDates"
              value={formData.practiceDates}
              onChange={handleInputChange}
              required
              placeholder="Например: 01.06.2025-30.06.2025"
            />
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h2>Информация о студентах</h2>
        
        {formData.students.map((student, index) => (
          <StudentForm
            key={index}
            student={student}
            index={index}
            handleStudentChange={handleStudentChange}
            removeStudent={removeStudent}
            canRemove={formData.students.length > 1}
          />
        ))}
        
        <button 
          type="button" 
          className="btn btn-secondary" 
          onClick={addStudent}
        >
          Добавить студента
        </button>
      </div>
      
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Сгенерировать договор
        </button>
      </div>
    </form>
  );
};