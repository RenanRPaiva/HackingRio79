btn = document.getElementsByClassName('btn-logar')
const searchbar = document.getElementById('input-search')

function Logar(){

    

}



searchbar.addEventListener('keyup', (key)=>{
    const textodigitado = key.target.value;
     console.log(cursos)
    const cursosfiltradros = colaborador.filter(cursos=>{
        


        
        return cursos.name.contains(textodigitado)||cursos.tema.contains(textodigitado)
                  
        })
      
        console.log(cursosfiltradros) 
        
}) 




const loadcursos = async()=>{
    try{
        const res = await fetch('../data.json')
        cursos = await res.json()
        console.log(cursos)
    }catch(err){
        console.log(err)
    }

}

loadcursos()