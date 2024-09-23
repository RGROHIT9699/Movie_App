
let inp = document.querySelector('input');
let btn = document.querySelector('button')
let list = document.querySelector('#list')


btn.addEventListener('click',function(){
    let st = inp.value;
    // console.log(st);
    let data = fetchData(st);
    inp.value = '';
})

function fetchData(st) {
    // console.log("Completed");
    axios.get(`https://api.tvmaze.com/search/shows?q=${st}`)
        .then(function(resp){
            // console.log(resp);
            domManipulate(resp.data);
        })
}

function domManipulate(datas) {

    while(list.firstChild){
        list.firstChild.remove();
    }

    for(let d of datas){
        let fig = document.createElement('figure');
        if(d.show.image){
            fig.innerHTML = `
                <img src=${d.show.image.original} />
                <h2>${d.show.name}</h2>
                `
            list.appendChild(fig);
        }
    }
        // <p>${d.show.summary}</p>
}