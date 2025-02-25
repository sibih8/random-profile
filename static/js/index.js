let url = "https://randomuser.me/api/"
let globalPerson;

fetch(url).then(

    function(response){
        return response.json()
    }   
).then(
    function (data){
        console.log(data)
    }
).catch(function(err){
    console.log(err)
})