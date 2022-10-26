const albumForm = document.getElementById('album-form');

albumForm.addEventListener('submit', function(event){
    event.preventDefault();

    const album = document.getElementById('album').value;
    const albumName = album.trim().toLowerCase();

    document.body.classList = "";
    if (albumName === 'folklore'){
        document.body.classList.add('folklore');
    }
    else if (albumName === 'red'){
        document.body.classList.add('red');
    }
    else if (albumName === 'red taylors version' || albumName === "red taylor's version" || albumName === "red (taylor's version)" || albumName === "red (taylors version)"){
        document.body.classList.add('red-t');
    }
    else if (albumName === 'midnights' || albumName === 'midnights 3am edition' || albumName === "midnights (3am edition)"){
        document.body.classList.add('midnights');
    }
    else if (albumName === 'reputation'){
        document.body.classList.add('reputation');
    }
    else if (albumName === '1989'){
        document.body.classList.add('nineteen');
    }
    else if (albumName === 'lover'){
        document.body.classList.add('lover');
    }
    else if (albumName === 'evermore'){
        document.body.classList.add('evermore');
    }
    else if (albumName === 'fearless'){
        document.body.classList.add('fearless');
    }
    else if (albumName === 'fearless taylors version' || albumName === "fearless taylor's version" || albumName === "fearless (taylor's version)" || albumName === "fearless (taylors version)"){
        document.body.classList.add('fearless-t');
    }
    else if (albumName === 'speaknow' || albumName === 'speak now'){
        document.body.classList.add('speak-now');
    }
    else if (albumName === 'taylor swift' || albumName === 'ts' || albumName === 'taylor'){
        document.body.classList.add('ts');
    }
    else{
        alert("Not recognised. Please try another album.");
    }
    albumForm.reset();
});

const resetform = document.getElementById('reset');

resetform.addEventListener('reset', function(){
    window.location.reload();
});
