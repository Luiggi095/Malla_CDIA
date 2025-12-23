const materias = [
    { id: 'INDG1801', name: 'Análisis y Resolución de Problemas', level: '100-I', credits: 3, reqs: [], coreq: [] },
    { id: 'MATG1801', name: 'Cálculo de una Variable', level: '100-I', credits: 3, reqs: [], coreq: [] },
    { id: 'MATG1803', name: 'Álgebra Lineal', level: '100-I', credits: 3, reqs: [], coreq: ['MATG1801'] },
    { id: 'HUM_COMP', name: 'Complementarias de Humanísticas', level: '100-I', credits: 1, reqs: [], coreq: [] },
    { id: 'CCPG1801', name: 'Fundamentos de Programación', level: '100-I', credits: 3, reqs: [], coreq: [] },
    { id: 'IDIG1802', name: 'Inglés I', level: '100-I', credits: 2, reqs: [], coreq: [] },

    { id: 'TICG1802', name: 'Sistema de Bases de Datos', level: '100-II', credits: 3, reqs: ['CCPG1801'], coreq: [] },
    { id: 'MATG1802', name: 'Cálculo Vectorial', level: '100-II', credits: 3, reqs: ['MATG1801'], coreq: [] },
    { id: 'ART_COMP', name: 'Compl. Artes, Deportes e Idiomas', level: '100-II', credits: 1, reqs: [], coreq: [] },
    { id: 'CDIAG1811', name: 'Fund. Ciencia de Datos e IA', level: '100-II', credits: 3, reqs: [], minApproved: 6, coreq: [] },
    { id: 'CCPG1803', name: 'Programación Orientada a Objetos', level: '100-II', credits: 3, reqs: ['CCPG1801'], coreq: [] },
    { id: 'IDIG1806', name: 'Inglés II', level: '100-II', credits: 2, reqs: ['IDIG1802'], coreq: [] },

    { id: 'CCPG1804', name: 'Estructuras de Datos', level: '200-I', credits: 3, reqs: ['CCPG1803'], coreq: [] },
    { id: 'ESTG1802', name: 'Estadística I', level: '200-I', credits: 3, reqs: ['MATG1802'], coreq: [] },
    { id: 'CCPG1805', name: 'Interacción Humano Computador', level: '200-I', credits: 2, reqs: ['INDG1801', 'CCPG1803'], coreq: [] },
    { id: 'IDIG1801', name: 'Comunicación', level: '200-I', credits: 2, reqs: [], minApproved: 6, coreq: [] },
    { id: 'CDIAG1801', name: 'Machine Learning', level: '200-I', credits: 3, reqs: ['CDIAG1811', 'CCPG1803'], coreq: [] },
    { id: 'IDIG1803', name: 'Inglés III', level: '200-I', credits: 2, reqs: ['IDIG1806'], coreq: [] },

    { id: 'CCPG1806', name: 'Análisis de Algoritmos', level: '200-II', credits: 2, reqs: ['CCPG1804'], coreq: [] },
    { id: 'SOFG1801', name: 'Desarrollo de Apps Web y Móviles', level: '200-II', credits: 3, reqs: [], minApproved: 12, coreq: [] },
    { id: 'SOFG1802', name: 'Ingeniería de Software I', level: '200-II', credits: 2, reqs: ['CCPG1805'], coreq: ['SOFG1801'] },
    { id: 'CDIAG1803', name: 'Algoritmos de Optimización', level: '200-II', credits: 3, reqs: ['MATG1803', 'CCPG1801'], coreq: [] },
    { id: 'ESTG1803', name: 'Estadística II', level: '200-II', credits: 3, reqs: ['ESTG1802'], coreq: [] },
    { id: 'IDIG1804', name: 'Inglés IV', level: '200-II', credits: 2, reqs: ['IDIG1803'], coreq: [] },

    { id: 'ADMG1801', name: 'Emprendimiento e Innovación', level: '300-I', credits: 3, reqs: [], minApproved: 20, coreq: [] },
    { id: 'CDIAG1804', name: 'Visualización de Información', level: '300-I', credits: 2, reqs: ['SOFG1801'], coreq: [] },
    { id: 'ESTG1801', name: 'Datos y Pronósticos', level: '300-I', credits: 3, reqs: ['ESTG1803'], coreq: [] },
    { id: 'CDIAG1806', name: 'Ética en Ciencia de Datos', level: '300-I', credits: 2, reqs: ['CDIAG1801'], coreq: [] },
    { id: 'CCPG1809', name: 'Inteligencia Artificial', level: '300-I', credits: 3, reqs: ['ESTG1803'], coreq: [] },
    { id: 'IDIG1805', name: 'Inglés V', level: '300-I', credits: 2, reqs: ['IDIG1804'], coreq: [] },

    { id: 'CCPG1810', name: 'Sist. Distribuidos y Cloud', level: '300-II', credits: 3, reqs: [], minApproved: 20, coreq: [] },
    { id: 'ADSG1801', name: 'Ciencias de la Sostenibilidad', level: '300-II', credits: 3, reqs: [], minApproved: 20, coreq: [] },
    { id: 'CCPG1812', name: 'Seguridad de la Información', level: '300-II', credits: 2, reqs: [], minApproved: 20, coreq: [] },
    { id: 'CDIAG1802', name: 'Estrategia de Datos', level: '300-II', credits: 2, reqs: ['CDIAG1806'], coreq: [] },
    { id: 'CDIAG1807', name: 'Deep Learning', level: '300-II', credits: 3, reqs: ['CDIAG1806', 'CCPG1809'], coreq: [] },
    { id: 'SERV_COM', name: 'Prácticas Servicio Comunitario', level: '300-II', credits: 2, reqs: [], desc: '96 Horas', coreq: [] },

    { id: 'TLMG1801', name: 'Ambientes Inteligentes', level: '400-I', credits: 3, reqs: [], minApproved: 30, coreq: [] },
    { id: 'CDIAG1808', name: 'Sistemas de Machine Learning', level: '400-I', credits: 3, reqs: ['CDIAG1806', 'CCPG1810'], coreq: [] },
    { id: 'TICG1801', name: 'Bases de Datos Avanzadas', level: '400-I', credits: 3, reqs: [], minApproved: 30, coreq: [] },
    { id: 'CDIAG1809', name: 'Proc. Lenguaje Natural (NLP)', level: '400-I', credits: 2, reqs: ['CDIAG1807'], coreq: [] },
    { id: 'ITIN_1', name: 'Itinerario I', level: '400-I', credits: 3, reqs: [], desc: '144 Horas', coreq: [] },

    { id: 'CDIAG1812', name: 'Materia Integradora', level: '400-II', credits: 3, reqs: [], minApproved: 39, coreq: [] },
    { id: 'ITIN_2', name: 'Itinerario II', level: '400-II', credits: 3, reqs: [], desc: '144 Horas', coreq: [] },
    { id: 'PRAC_PROF', name: 'Prácticas Preprofesionales', level: '400-II', credits: 5, reqs: [], desc: '240 Horas', coreq: [] }
];

const state = {}; 
const levels = ['100-I', '100-II', '200-I', '200-II', '300-I', '300-II', '400-I', '400-II'];

function init() {
    const savedState = localStorage.getItem('mallaState');
    if (savedState) {
        Object.assign(state, JSON.parse(savedState));
    } else {
        materias.forEach(m => state[m.id] = 0);
    }
    renderGrid();
    updateStates();
}

function saveState() {
    localStorage.setItem('mallaState', JSON.stringify(state));
}

function getSubjectState(id) {
    return state[id] || 0;
}

function countApproved() {
    return Object.values(state).filter(s => s === 2).length;
}

function updateStates() {
    const approvedCount = countApproved();
    let planningCredits = 0;
    let totalApproved = 0;

    materias.forEach(m => {
        let isLocked = false;

        if (m.minApproved && approvedCount < m.minApproved) {
            isLocked = true;
        }

        if (m.reqs.length > 0) {
            const reqsMet = m.reqs.every(reqId => state[reqId] === 2);
            if (!reqsMet) isLocked = true;
        }

        if (m.coreq.length > 0) {
            const coreqMet = m.coreq.every(coId => state[coId] >= 1); 
            if (isLocked && coreqMet) {
                 const prereqsMet = m.reqs.every(reqId => state[reqId] === 2);
                 if(prereqsMet) isLocked = false;
            }
        }

        const domEl = document.getElementById(`card-${m.id}`);
        if (!domEl) return;

        domEl.classList.remove('state-locked', 'state-available', 'state-planned', 'state-passed');

        if (state[m.id] === 2) {
            domEl.classList.add('state-passed');
            totalApproved++;
        } else if (state[m.id] === 1) {
            domEl.classList.add('state-planned');
            planningCredits += m.credits;
        } else if (isLocked) {
            domEl.classList.add('state-locked');
            if (state[m.id] === 1) {
                state[m.id] = 0; 
                saveState();
            }
        } else {
            domEl.classList.add('state-available');
        }
    });

    updateUI(planningCredits, totalApproved);
}

function updateUI(credits, totalApproved) {
    const credEl = document.getElementById('credit-count');
    const msgEl = document.getElementById('status-msg');
    const progEl = document.getElementById('progress-percent');

    credEl.innerText = credits;
    
    if (credits >= 9 && credits <= 15) {
        msgEl.innerText = "Estudiante Regular";
        msgEl.className = "value status-ok";
    } else {
        msgEl.innerText = "Estudiante Irregular";
        msgEl.className = "value status-error";
    }

    const percent = Math.round((totalApproved / materias.length) * 100);
    progEl.innerText = `${percent}%`;
}

function toggleMateria(id) {
    const currentState = state[id];
    const domEl = document.getElementById(`card-${id}`);
    
    if (domEl.classList.contains('state-locked')) return;

    if (currentState === 0) {
        state[id] = 1; 
    } else if (currentState === 1) {
        state[id] = 2; 
    } else {
        state[id] = 0; 
    }
    saveState();
    updateStates();
}

function renderGrid() {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    levels.forEach(level => {
        const col = document.createElement('div');
        col.className = 'semester-column';
        
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.innerText = `Nivel ${level}`;
        col.appendChild(title);

        const levelMaterias = materias.filter(m => m.level === level);
        
        levelMaterias.forEach(m => {
            const card = document.createElement('div');
            card.className = 'materia-card';
            card.id = `card-${m.id}`;
            card.onclick = () => toggleMateria(m.id);

            let reqText = '';
            if (m.minApproved) reqText += `Req: ${m.minApproved} mat. `;
            if (m.reqs.length > 0) reqText += `Pre: ${m.reqs.join(', ')} `;
            if (m.coreq.length > 0) reqText += `Co: ${m.coreq.join(', ')}`;
            if (m.desc) reqText += `(${m.desc})`;

            card.innerHTML = `
                <div class="materia-header">
                    <span class="code">${m.id}</span>
                    <span class="credits">${m.credits} cr</span>
                </div>
                <div class="materia-name">${m.name}</div>
                <div class="reqs">${reqText}</div>
            `;
            col.appendChild(card);
        });

        container.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', init);
