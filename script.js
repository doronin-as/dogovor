document.addEventListener('DOMContentLoaded', function() {
    // Получаем форму и контейнер предпросмотра
    const contractForm = document.getElementById('contractForm');
    const previewContainer = document.getElementById('previewContainer');
    const previewContent = document.getElementById('previewContent');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Обработчик отправки формы
    contractForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем стандартную отправку формы
        
        // Получаем данные из формы
        const formData = new FormData(contractForm);
        const data = {};
        
        // Преобразуем данные формы в объект
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Генерируем HTML контракта (упрощенная демо-версия)
        const contractHTML = generateContract(data);
        
        // Отображаем предпросмотр
        previewContent.innerHTML = contractHTML;
        previewContainer.style.display = 'block';
        
        // Прокручиваем страницу к предпросмотру
        previewContainer.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Обработчик кнопки скачивания
    downloadBtn.addEventListener('click', function() {
        alert('Функция скачивания будет добавлена в следующей версии');
        // Здесь будет код для создания и скачивания файла
    });
    
    // Функция для генерации HTML контракта из данных формы
    function generateContract(data) {
        // Простой шаблон договора для демонстрации
        return `
            <div class="contract">
                <h1 style="text-align: center;">Договор № 24-25 Т / _________</h1>
                <h2 style="text-align: center;">о практической подготовке обучающихся</h2>
                <p style="text-align: right;">_____________ г. Санкт-Петербург</p>
                
                <p>
                    Федеральное государственное автономное образовательное учреждение
                    высшего образования «Санкт-Петербургский политехнический университет
                    Петра Великого», именуемое в дальнейшем <strong>«Организация»</strong>, в лице
                    руководителя Дирекции основных образовательных программ Гращенко Надежды
                    Юрьевны, действующего на основании доверенности № юр-197/25-д от
                    27.02.2025, с одной стороны, и
                </p>
                
                <p>
                    ${data.companyName || '[Название компании]'}, именуемое в дальнейшем
                    <strong>«Профильная организация»</strong>, в лице ${data.signatoryPosition || '[Должность]'}
                    ${data.signatoryFullName || '[ФИО]'}, действующего на основании ${data.signatoryFoundation || '[основание]'}, с другой
                    стороны, совместно именуемые «Стороны», заключили настоящий договор
                    (далее -- Договор) о нижеследующем:
                </p>
                
                <h3 style="text-align: center;">1. ПРЕДМЕТ ДОГОВОРА</h3>
                
                <p>
                    <ol>
                        <li>
                            Предметом Договора является организация практической подготовки
                            обучающихся (далее -- практическая подготовка) по образовательным
                            программам высшего и среднего профессионального образования по
                            направлениям подготовки:
                        </li>
                    </ol>
                </p>
                
                <table border="1" cellpadding="5" style="width: 100%;">
                    <tr>
                        <th>Код направления подготовки</th>
                        <th>Наименование направления подготовки</th>
                    </tr>
                    <tr>
                        <td><strong>${data.directionCode || '[Код]'}</strong></td>
                        <td><strong>${data.directionName || '[Наименование]'}</strong></td>
                    </tr>
                </table>
                
                <p>
                    <!-- Здесь будет продолжение договора... -->
                    <em>Полный текст договора будет сгенерирован в окончательной версии приложения.</em>
                </p>
            </div>
        `;
    }
});
