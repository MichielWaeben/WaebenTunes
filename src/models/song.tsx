export class Song {
    name: string;
    cover: string;
    artist: string;
    collectionId: string;
    audio: string;
    id: string;
    active: boolean;

    constructor(name: string, cover: string, artist: string, collectionId: string, audio: string, active: boolean, id?: string) {
        this.id = id!;
        this.name = name;
        this.cover = cover;
        this.artist = artist;
        this.collectionId = collectionId;
        this.audio = audio;
        this.active = active;
    }
} 