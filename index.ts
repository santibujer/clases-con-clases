class Album{
    title: string;
    songs: string[];
    constructor(title, songs: string[]){
        this.title = title
        this.songs = songs

    } 
    
}
class Banda {
    members: string[]
    albums: Album[]
    constructor(members: string[], albums:Album[]){
        this.members = members;
        this.albums = albums;

    }
}
function main(){
    const unAlbum = new Album("album de Santi", [])
    const unaBanda = new Banda(["santi"], [unAlbum, unAlbum, unAlbum]);
    console.log(unaBanda.members);
    console.log(unaBanda.albums)

}
main()