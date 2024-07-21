function songs(input){
    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }    
    }
    const songs = [];
    const numberOfSongs = input.shift();
    const typeSong = input.pop();
    for(let i = 0; i < numberOfSongs; i++){
        const [typeList, name, time] = input[i].split('_');
        const song = new Song(typeList, name, time);
        songs.push(song);
    }
    if(typeSong === 'all'){
        songs.forEach(song => console.log(song.name));
    } else {
        songs.filter(song => song.typeList === typeSong)
            .forEach(song => console.log(song.name));
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);