const getSearch = document.getElementById('search')
let newValue = document.getElementById('test')
getSearch.addEventListener('input', (event) => {
    let changeValue = event.target.value
    getSearch.setAttribute('value', changeValue)
})
