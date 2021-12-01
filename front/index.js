function selectIcon(iconActive) {
    resetSearchBar()
    const currentSelected = document.getElementsByClassName('icon-selected')
    if (currentSelected.length) {
        currentSelected[0].classList.remove('icon-selected')
    }
    const newSelected = document.getElementsByClassName(iconActive)
    newSelected[0].classList.add('icon-selected')
}

function resetSearchBar() {
    const searchBar = document.getElementById('search-bar')
    searchBar.value = ''
}

function setDisplayTrue(auxList){
    for (let i = 0; i < auxList.length; i++) {
        auxList[i].display = true
    }
}

function showLeftContent(auxList) {
    const checkResultSearch = document.getElementById('results-search');
    if (document.body.contains(checkResultSearch)) {
        const father = checkResultSearch.parentElement;
        father.removeChild(checkResultSearch);
    }

    const main = document.getElementById('items-cont')
    const ul = document.createElement('ul')
    ul.setAttribute('id', 'results-search')
    for (const element in auxList) {
        if (auxList[element].display) {
            const li = document.createElement('li')
            li.innerText = auxList[element].name
            ul.appendChild(li)
        }
    }
    main.appendChild(ul)
}

function showGroups() {
    const auxList = [...groups]
    setDisplayTrue(auxList)
    selectIcon('groups')
    showLeftContent(auxList)
}
function showSubjects() {
    const auxList = [...subjects]
    setDisplayTrue(auxList)
    selectIcon('subjects')
    showLeftContent(auxList)
}
function showTeachers() {
    const auxList = [...teachers]
    setDisplayTrue(auxList)
    selectIcon('teachers')
    showLeftContent(auxList)
}
function showStudents() {
    const auxList = [...students]
    setDisplayTrue(auxList)
    selectIcon('students')
    showLeftContent(auxList)
}

function searchLeftList() {
    const currentSelected = document.getElementsByClassName('icon-selected')[0].classList[1]
    let auxList = []
    switch (currentSelected) {
        case 'groups':
            auxList = [... groups]
            break;
        case 'subjects':
            auxList = [... subjects]
            break;
        case 'teachers':
            auxList = [... teachers]
            break;
        case 'students':
            auxList = [... students]
            break;
    }

    if (document.getElementById('search-bar').value.trim()) {
        const searchValue = document.getElementById('search-bar').value.trim()
        for (let i = 0; i < auxList.length; i++) {
            if (auxList[i].name.includes(searchValue)) {
                auxList[i].display = true
            }
            else{
                auxList[i].display = false
            }
        }
        showLeftContent(auxList)
    }
    else {
        setDisplayTrue(auxList)
        showLeftContent(auxList)
    }
}

const students = []
const totalStudents = 10
for (let i = 0; i < totalStudents; i++) {
    students.push(
        {
            name: `student ${i + 1}`,
            display: true
        }
    )
}

const subjects = []
const totalSubjects = 10
for (let i = 0; i < totalSubjects; i++) {
    subjects.push(
        {
            name: `subject ${i + 1}`,
            display: true
        }
    )
}

const teachers = []
const totalteachers = 10
for (let i = 0; i < totalteachers; i++) {
    teachers.push(
        {
            name: `teacher ${i + 1}`,
            display: true
        }
    )
}

const groups = []
const totalgroups = 10
for (let i = 0; i < totalgroups; i++) {
    groups.push(
        {
            name: `group ${i + 1}`,
            display: true
        }
    )
}