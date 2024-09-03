const days = [
    {
        day: "Peito",
        exercises: [
            "Aquecimento: 5 minutos de polichinelos ou corrida leve",
            "Supino reto com barra - 4 séries de 8-10 repetições",
            "Supino inclinado com halteres - 3 séries de 10-12 repetições",
            "Crucifixo na máquina - 3 séries de 12-15 repetições",
            "Flexões - 3 séries até a falha"
        ]
    },
    {
        day: "Costas",
        exercises: [
            "Aquecimento: 5 minutos de remada leve no remoergômetro",
            "Barra fixa - 4 séries de 8-10 repetições",
            "Remada curvada com barra - 3 séries de 8-10 repetições",
            "Puxada alta na polia - 3 séries de 10-12 repetições",
            "Remada baixa na polia - 3 séries de 12-15 repetições"
        ]
    },
    {
        day: "Pernas",
        exercises: [
            "Aquecimento: 5 minutos de bicicleta ergométrica",
            "Agachamento livre - 4 séries de 8-10 repetições",
            "Leg press - 3 séries de 10-12 repetições",
            "Cadeira extensora - 3 séries de 12-15 repetições",
            "Cadeira flexora - 3 séries de 12-15 repetições",
            "Panturrilha em pé - 4 séries de 15-20 repetições"
        ]
    },
    {
        day: "Ombros",
        exercises: [
            "Aquecimento: 5 minutos de movimentos circulares com os braços",
            "Desenvolvimento com barra - 4 séries de 8-10 repetições",
            "Elevação lateral com halteres - 3 séries de 12-15 repetições",
            "Elevação frontal com halteres - 3 séries de 12-15 repetições",
            "Encolhimento de ombros com barra - 4 séries de 12-15 repetições"
        ]
    },
    {
        day: "Braços",
        exercises: [
            "Aquecimento: 5 minutos de corda",
            "Rosca direta com barra - 4 séries de 8-10 repetições",
            "Rosca martelo com halteres - 3 séries de 10-12 repetições",
            "Tríceps pulley - 4 séries de 10-12 repetições",
            "Tríceps francês com halteres - 3 séries de 10-12 repetições"
        ]
    }
];

let currentDayIndex = 0;

function loadDay(dayIndex) {
    const dayTitle = document.getElementById('day-title');
    const todoList = document.getElementById('todo-list');
    const day = days[dayIndex];
    
    dayTitle.textContent = `Dia ${dayIndex + 1}: ${day.day}`;
    todoList.innerHTML = '';

    day.exercises.forEach(exercise => {
        const li = document.createElement('li');
        li.textContent = exercise;
        li.addEventListener('click', () => li.classList.toggle('completed'));
        todoList.appendChild(li);
    });
}

document.getElementById('add-task-btn').addEventListener('click', () => {
    const newTaskInput = document.getElementById('new-task');
    const newTaskText = newTaskInput.value.trim();
    
    if (newTaskText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.textContent = newTaskText;
        li.addEventListener('click', () => li.classList.toggle('completed'));
        todoList.appendChild(li);
        newTaskInput.value = '';
    }
});

document.getElementById('next-day-btn').addEventListener('click', () => {
    currentDayIndex = (currentDayIndex + 1) % days.length;
    loadDay(currentDayIndex);
});

loadDay(currentDayIndex);
