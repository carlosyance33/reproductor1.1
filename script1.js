const tracklist = document.getElementById("track-list")


axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {

        res.data.songs.map((song) => {

            const div = document.createElement("div")
            div.classList.add("cancion")  /* div.classlist= es para agregar una clase     */

            div.innerHTML = `
            <img class="covers" src="${song.path.front}" alt="">
            
            <div class="informacion"> 
                <h2>${song.title}</h2>
                <p>${song.author}</p>
            </div>
            <p>${song.duration}</p>
            
        
            `
            div.addEventListener ("click", () => {
               document.getElementById ("current-song-img").setAttribute ('src' , song.path.front)
               document.getElementById ( "audios").setAttribute ('src', song.path.audio)
               document.getElementById ("titulo__musica") .innerHTML = song.title
               document.getElementById ("nombre__artista") .innerHTML = song.author
               document.getElementById ("tiempo") .innerHTML = song.duration

            })
            tracklist.appendChild(div)
        })
    })



    /* setattribute= funciona para agregar un atributo     */
    /* innerhtml sirve para agregar contenido de texto entre la etiqueta
    /*  div.innerhtml agregar el contenido en el div */