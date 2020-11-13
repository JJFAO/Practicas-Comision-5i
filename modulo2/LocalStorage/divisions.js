
// ----- Elementos de form division ------
const formDivision = document.getElementById('formDivision');
const divisionAddInput = document.getElementById('divisionAdd');
const divisionUl = document.getElementById('divisionUl');
// Selects de divisiones
// Estas constantes ya están declaradas en users.js
// const divisionInput = document.getElementById('division');
// const divisionModalInput = document.getElementById('divisionModal');


const getStorageDivisions = () => JSON.parse(localStorage.getItem('divisions')) || [];
const setStorageDivisions = (divisions) => localStorage.setItem('divisions', JSON.stringify(divisions));

const displayDivisionsInUl = (divisions) => {
    const lis = divisions.map((d) => `
    <li>
        ${d}
        <button onclick="deleteDivision('${d}')" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
    </li>
    `);
    divisionUl.innerHTML = lis.join('');
}

const displayDivisions = () => {
    const divisions = getStorageDivisions();
    const options = divisions.map((d) => `<option>${d}</option>`);
    options.unshift(`
        <option selected disabled>Elegir división</option>
        <option value="-">Sin división</option>
    `);
    divisionInput.innerHTML = options.join('');
    divisionModalInput.innerHTML = options.join('');
    displayDivisionsInUl(divisions);
}

const deleteDivision = (division) => {
    console.log("deleteDivision -> division", division)
    const divisions = getStorageDivisions();
    const filteredDivision = divisions.filter((d) => d !== division);
    setStorageDivisions(filteredDivision);
    displayDivisions();
}

const createDivision = (e) => {
    e.preventDefault();
    const divisions = getStorageDivisions();
    const division = divisionAddInput.value;
    divisions.push(division);
    // localStorage.setItem('divisions', JSON.stringify(divisions));
    setStorageDivisions(divisions);
    formDivision.reset();
    displayDivisions();
}

formDivision.onsubmit = createDivision;

displayDivisions();
