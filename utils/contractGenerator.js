// utils/contractGenerator.js

export const generateContract = (data) => {
  // Функция для создания строк таблицы студентов
  const generateStudentRows = () => {
    return data.students.map((student, index) => {
      return `
| ${index + 1} | ${student.fullName} | ${student.universityManager.position}, ${student.universityManager.academicDegree || ''} ${student.universityManager.fullName}\\
${student.universityManager.email} | ${student.companyManager.position}, ${student.companyManager.academicDegree || ''} ${student.companyManager.fullName}\\
${student.companyManager.email} | ${student.department}, ${student.address} | ${student.equipment} |`;
    }).join('\n');
  };

  // Форматируем текущую дату для договора
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = today.toLocaleString('ru-RU', { month: 'long' });
  const year = today.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  // Генерация HTML текста договора
  const contract = `
<div class="contract">
  <div class="contract-header">
    <h1>Договор № 24-25 Т / _________</h1>
    <h2>о практической подготовке обучающихся</h2>
    <p>${formattedDate} г. Санкт-Петербург</p>
  </div>

  <div class="contract-body">
    <p>
      Федеральное государственное автономное образовательное учреждение
      высшего образования «Санкт-Петербургский политехнический университет
      Петра Великого», именуемое в дальнейшем <strong>«Организация»</strong>, в лице
      руководителя Дирекции основных образовательных программ Гращенко Надежды
      Юрьевны, действующего на основании доверенности № юр-197/25-д от
      27.02.2025, с одной стороны, и
    </p>
    
    <p>
      ${data.companyName}, именуемое в дальнейшем
      <strong>«Профильная организация»</strong>, в лице ${data.signatoryPositionGenitive}
      ${data.signatoryFullName}, действующего на основании ${data.signatoryFoundation}, с другой
      стороны, совместно именуемые «Стороны», заключили настоящий договор
      (далее -- Договор) о нижеследующем:
    </p>

    <h3>1. ПРЕДМЕТ ДОГОВОРА</h3>
    
    <ol>
      <li>
        Предметом Договора является организация практической подготовки
        обучающихся (далее -- практическая подготовка) по образовательным
        программам высшего и среднего профессионального образования по
        направлениям подготовки:
      </li>
    </ol>

    <table class="direction-table">
      <tr>
        <th>Код направления подготовки</th>
        <th>Наименование направления подготовки</th>
      </tr>
      <tr>
        <td><strong>${data.directionCode}</strong></td>
        <td><strong>${data.directionName}</strong></td>
      </tr>
    </table>

    <ol start="2">
      <li>
        Условия о компонентах образовательной программы, реализуемых в форме
        практической подготовки, количестве обучающихся, осваивающих
        соответствующие компоненты образовательной программы, сроки
        организации практической подготовки,
        а также структурное подразделение, помещения Профильной организации,
        согласуются Сторонами в Приложении № 1, которое является
        неотъемлемой частью Договора.
      </li>
    </ol>

    <h3>2. ПРАВА И ОБЯЗАННОСТИ СТОРОН</h3>
    
    <h4>2.1. Организация обязуется:</h4>
    
    <ol>
      <li>
        Направить обучающихся в «Профильную организацию» для
        освоения Компонентов образовательной программы в форме
        практической подготовки в сроки, предусмотренные Приложением
        № 1 к Договору.
      </li>
      <li>
        Назначить руководителя по практической подготовке от
        «Организации», который:
        <ul>
          <li>обеспечивает организацию образовательной деятельности в форме
              практической подготовки при реализации компонента образовательной
              программы;</li>
          <li>организует участие обучающихся в выполнении определенных видов работ,
              связанных с будущей профессиональной деятельностью;</li>
          <li>оказывает методическую помощь обучающимся при выполнении определенных
              видов работ, связанных с будущей профессиональной деятельностью;</li>
          <li>несет ответственность совместно с ответственным работником
              «Профильной организации» за реализацию Компонентов образовательной
              программы, в форме практической подготовки, за жизнь и здоровье
              обучающихся и работников «Организации», соблюдение ими правил
              противопожарной безопасности, правил охраны труда, техники безопасности
              и санитарно-эпидемиологических правил и гигиенических нормативов.</li>
        </ul>
      </li>
      <li>
        Установить виды учебной деятельности, практики и иные Компоненты
        образовательной программы, осваиваемые обучающимися в форме
        практической подготовки, включая место, продолжительность и период
        их реализации.
      </li>
      <li>
        Оказывать методическую и научно-консультативную помощь обучающимся
        «Организации» и работникам «Профильной организации» в период
        практической подготовки.
      </li>
      <li>
        Оценивать результаты выполнения обучающимися практической
        подготовки.
      </li>
      <li>
        Принимать участие в расследовании комиссии «Профильной организации»
        при возникновении несчастного случая с участием обучающегося во
        время практической подготовки.
      </li>
      <li>
        При смене руководителя по практической подготовке от Организации
        в течение 3 (трех) рабочих дней сообщить об этом Профильной
        организации.
      </li>
    </ol>

    <h4>2.2. Профильная организация обязуется:</h4>
    
    <ol>
      <li>
        Принять обучающихся для реализации практической подготовки
        согласно Приложению № 1 к Договору.
      </li>
      <li>
        Создать условия для реализации Компонентов образовательной
        программы в форме практической подготовки, предоставить
        оборудование и технические средства обучения в объеме,
        позволяющем выполнить определенные виды работ, связанные
        с будущей профессиональной деятельностью обучающихся.
      </li>
      <li>
        Назначить руководителя практической подготовки, соответствующего
        требованиям трудового законодательства Российской Федерации о
        допуске к педагогической деятельности, из числа работников «Профильной
        организации», который обеспечивает организацию реализации
        Компонентов образовательной программы в форме практической
        подготовки со стороны «Профильной организации».
      </li>
      <li>
        Обеспечить безопасные условия реализации Компонентов
        образовательной программы в форме практической подготовки,
        выполнение правил противопожарной безопасности, правил охраны
        труда, техники безопасности и санитарно-эпидемиологических
        правил и гигиенических нормативов.
      </li>
      <li>
        Проводить оценку условий труда на рабочих местах, используемых
        при реализации Компонентов образовательной программы в форме
        практической подготовки, и сообщать руководителю Организации об условиях труда и
        требованиях охраны труда на рабочем месте.
      </li>
      <li>
        Ознакомить обучающихся с правилами внутреннего трудового
        распорядка «Профильной организации» и иными локальными
        нормативными актами «Профильной организации», необходимыми для
        соблюдения пункта 2.2.4.
      </li>
      <li>
        Провести инструктаж обучающихся по охране труда и технике
        безопасности и осуществлять надзор за соблюдением обучающимися правил техники
        безопасности.
      </li>
      <li>
        Предоставить обучающимся и руководителю по практической
        подготовке от «Организации» возможность пользоваться помещениями
        «Профильной организации» согласованными Сторонами (Приложение №
        1), а также находящимися в них оборудованием и техническими
        средствами обучения.
      </li>
      <li>
        О нарушении обучающимся охраны труда, техники безопасности,
        правил противопожарной, промышленной безопасности, правил
        внутреннего трудового распорядка «Профильная организация»
        обязана незамедлительно уведомить руководителя по практической
        подготовке «Организации».
      </li>
      <li>
        Провести расследование несчастного случая, произошедшего
        в «Профильной организации» с участием обучающегося во время
        прохождения практической подготовки, совместно с представителем
        «Организации».
      </li>
    </ol>