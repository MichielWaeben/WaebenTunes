export class Song {
    name: string;
    cover: string;
    artist: string;
    collection: FlatCollection;
    audio: string;
    id: string;
    active: boolean;

    constructor(name: string, cover: string, artist: string, collection: FlatCollection, audio: string, active: boolean, id?: string) {
        this.id = id!;
        this.name = name;
        this.cover = cover;
        this.artist = artist;
        this.collection = collection;
        this.audio = audio;
        this.active = active;
    }
}

export class FlatCollection {
    id: string;
    name: string;

    constructor(name: string, id?: string) {
        this.id = id!;
        this.name = name;
    }
}