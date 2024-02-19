
var quantidade = document.getElementById('quantidade')
quantidade.addEventListener('keyup',()=>{
    PegaPokemons(quantidade.value)
})

function PegaPokemons(quantidade){
    //requisicao para pegar todos os pokemons 
fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
.then(Response => Response.json())
.then(AllPokemon => {

    //jogando os pokemons para um array para capturar as informações
    var pokemons = [];

    //pegando informações de dentro do array
    AllPokemon.results.map((val)=>{
        

    // requisicao pra recuperar imagem individual do pokemon    
    fetch(val.url)
    .then(Response => Response.json())
    .then(pokemon_single =>{
        pokemons.push({nome:val.name, imagem:pokemon_single.sprites.front_default});
        
        if(pokemons.length == quantidade){

           var pokemon_boxes = document.querySelector('.pokemon_boxes');
           pokemon_boxes.innerHTML = ''

           // console.log(pokemons)

            pokemons.map(function(val){
            pokemon_boxes.innerHTML += ` 
               
            <div class="pokemon_box">
            <img src=" `+val.imagem+` " alt="">
            <p>` +val.nome+`</p>
            </div><!--pokemon box-->
            `
            

            })
        }

    })

    })

})

}



