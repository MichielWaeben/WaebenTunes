export class Collection {
    id: string;
    name: string;
    cover: string;

    constructor(name: string, cover: string, id?: string) {
        this.id = id!;
        this.name = name;
        this.cover = cover
    }
}