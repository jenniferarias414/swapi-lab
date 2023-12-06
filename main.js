console.log('linked up')

const button = document.querySelector('button')
const baseURL = 'https://swapi.dev/api/planets/?Search=Alderaan'

function clickedBtn (){
// let name = document.createElement('h2')
// name.innerHTML =

    axios.get(`${baseURL}`).then((res) => {
        // console.log(res.data.results[0].residents)
        for (let i=0; i<res.data.results.length; i++) {
            console.log(res.data.resutls[i].residents[i])
            axios.get(res.data.results[i].residents[i]).then((res) =>{
                console.log(res.data.name)
            })
        }
    }).catch((error) => {
        console.log(error)
    })
}

button.addEventListener('click', clickedBtn)


