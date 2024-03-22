const tracklist = document.getElementById("track-list")


axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {

        res.data.songs.map((song) => {

            const div = document.createElement("div")
            div.classList.add("canciones")

            div.innerHTML = `
            <img class="covers" src="${song.path.front}" alt="">
            
            <div class="informacion"> 
                <h2>${song.title}</h2>
                <p>${song.author}</p>
            </div>
            <p>${song.duration}</p>
            
        
            `
            tracklist.appendChild(div)
        })
    })