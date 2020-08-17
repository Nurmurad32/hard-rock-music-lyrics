const search = document.getElementById("search");
    search.addEventListener("click",function(){
        const inputSong = document.getElementById("inputSong").value;
            const url = `https://api.lyrics.ovh/suggest/${inputSong}`;
            fetch(url)
            .then(res => res.json())
            .then(data => displaySong(data))

        function displaySong(song){
            for(let i=0; i<10 ; i++){
                
                document.getElementById("song-list").style.display = "block";
                document.getElementById("search-result").style.display = "block";
                document.getElementById("welcome-text").style.display = "none";
                const songName = document.getElementsByClassName("songName" + [i]);
                for(let j=0 ; j<songName.length ; j++){
                    let songList = songName[j];
                    songList.innerText = song.data[i].album.title;

                }
                const artistName = document.getElementsByClassName("artistName" + [i]);
                for(let j=0 ; j<artistName.length ; j++){
                    let artistList = artistName[j];
                    artistList.innerText = song.data[i].artist.name;
                }
            }
        }
    }) 
        
function lyricsSong(songName,artistName){
    const apiUrl = 'https://api.lyrics.ovh' + '/v1/' + artistName + '/' + songName ;
    const api = apiUrl.split(' ').join('');
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            document.getElementById("full-lyrics").style.display = "block";
            document.getElementById("lyrics-text").innerText = data.lyrics;
            document.getElementById("songTitle").innerText = songName;
            document.getElementById("songArtist").innerText = artistName;
          
        })
}

const lyricsName0 = document.getElementsByClassName("lyrics0");
for(let i=0 ; i<lyricsName0.length ; i++){
    lyricsName0[i].addEventListener("click",function(){
        const songName = document.getElementById("songName0").innerText;
        const artistName = document.getElementById("artistName0").innerText;
        lyricsSong(songName,artistName);
    })
}


const lyricsName1 = document.getElementsByClassName("lyrics1");
for(let i=0 ; i<lyricsName1.length ; i++){
    lyricsName1[i].addEventListener("click",function(){
        const songName = document.getElementById("songName1").innerText;
        const artistName = document.getElementById("artistName1").innerText;
        lyricsSong(songName,artistName);
    })
}

const lyricsName2 = document.getElementsByClassName("lyrics2");
for(let i=0 ; i<lyricsName2.length ; i++){
    lyricsName2[i].addEventListener("click",function(){
        const songName = document.getElementById("songName2").innerText;
        const artistName = document.getElementById("artistName2").innerText;
        lyricsSong(songName,artistName);
    })
}

const lyricsName3 = document.getElementsByClassName("lyrics3");
for(let i=0 ; i<lyricsName3.length ; i++){
    lyricsName3[i].addEventListener("click",function(){
        const songName = document.getElementById("songName3").innerText;
        const artistName = document.getElementById("artistName3").innerText;
        lyricsSong(songName,artistName);
    })
}

const lyricsName4 = document.getElementsByClassName("lyrics4");
for(let i=0 ; i<lyricsName4.length ; i++){
    lyricsName4[i].addEventListener("click",function(){
        const songName = document.getElementById("songName4").innerText;
        const artistName = document.getElementById("artistName4").innerText;
        lyricsSong(songName,artistName);
    })
}

const lyricsName5 = document.getElementsByClassName("lyrics5");
for(let i=0 ; i<lyricsName5.length ; i++){
    lyricsName5[i].addEventListener("click",function(){
            const songName = document.getElementById("songName5").innerText;
            const artistName = document.getElementById("artistName5").innerText;
            lyricsSong(songName,artistName);
    })
}

const lyricsName6 = document.getElementsByClassName("lyrics6");
for(let i=0 ; i<lyricsName6.length ; i++){
    lyricsName6[i].addEventListener("click",function(){
        const songName = document.getElementById("songName6").innerText;
        const artistName = document.getElementById("artistName6").innerText;
        lyricsSong(songName,artistName);
    })
}

const lyricsName7 = document.getElementsByClassName("lyrics7");
for(let i=0 ; i<lyricsName7.length ; i++){
    lyricsName7[i].addEventListener("click",function(){
        const songName = document.getElementById("songName7").innerText;
        const artistName = document.getElementById("artistName7").innerText;
        lyricsSong(songName,artistName);
    })
}

const lyricsName8 = document.getElementsByClassName("lyrics8");
for(let i=0 ; i<lyricsName8.length ; i++){
    lyricsName8[i].addEventListener("click",function(){
        const songName = document.getElementById("songName8").innerText;
        const artistName = document.getElementById("artistName8").innerText;
        lyricsSong(songName,artistName);
    })
}

const lyricsName9 = document.getElementsByClassName("lyrics9");
for(let i=0 ; i<lyricsName9.length ; i++){
    lyricsName9[i].addEventListener("click",function(){   
        const songName = document.getElementById("songName9").innerText;
        const artistName = document.getElementById("artistName9").innerText;
        lyricsSong(songName,artistName);
    })
}


// var apiUrl = 'https://api.lyrics.ovh' + '/v1/' + data.artist + '/' + data.title ;