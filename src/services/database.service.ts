
import { collection, getDocs, query, where, doc, setDoc } from 'firebase/firestore/lite';
import firestore from '../firebase';
import { Collection } from "../models/collection";
import { Song } from "../models/song";
import '@firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const musicDb = collection(firestore, "songs");
const collectionDb = collection(firestore, "collections");
const storage = getStorage();

export const getAllSongs = async () => {
    let musicSnapshot = await getDocs(musicDb);
    return musicSnapshot.docs.map(doc => doc.data() as Song);
}

export const addSong = async (song: Song, file: any) => {
const storageRef = ref(storage, `Music/${file.name}`);
    return uploadBytes(storageRef, file).then(async (snapshot) => {
        getDownloadURL(storageRef).then(async (url) => {
        song.audio = url;
        const songRef = doc(musicDb);
        song.id = songRef.id;
        await setDoc(songRef, song);
      });
})
}

export const getAllCollections = async () => {
    let collectionSnapshot = await getDocs(collectionDb);
    return collectionSnapshot.docs.map(doc => doc.data() as Collection);
}

export const getCollectionById = async (collectionId: string) => {
    const collectionQuery = query(collectionDb, where("id", "==", collectionId));
    const querySnapshot = await getDocs(collectionQuery);
    return querySnapshot.docs[0].data() as Collection;
}

export const getAllSongsFromCollection = async (collectionId: string) => {
    const songQuery = query(musicDb, where("collection.id", "==", collectionId));
    const querySnapshot = await getDocs(songQuery);
    let songList: Song[] = [];
    querySnapshot.forEach((doc) => {
        songList.push(doc.data() as Song);
      });
    
    return songList;
  };

const DatabaseService = {
    getAllSongs,
    getAllCollections,
    getAllSongsFromCollection

    /*getChildWithId(id: string) {
        return this.db.collection("Children").doc(id).get();
    }

    updateChild(child: Child) {
        let childDoc = this.db.doc("/Children" + `/${child.id}`);
        return childDoc.update(child);
    }

    deleteChild(child: Child) {
        let childDoc = this.firestore.doc("/Children" + `/${child.id}`);
        return childDoc.delete();
    }

    async createChild(child: Child) {
        const doc_ref = await this.firestore.collection("Children").add(child);
        child.id = doc_ref.id;
        return child;
        /*return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection("Tasks")
                .add(task)
                .then(res => { }, err => reject(err));
        });
    }

    async deleteAllTimeSlotsFromChild(childId: string) {
        const snapshot = await this.firestore.collection("TimeSlots").ref.where('child.childId', '==', childId).get();
        const MAX_WRITES_PER_BATCH = 500;
      
        const batches = this.chunk(snapshot.docs, MAX_WRITES_PER_BATCH);
        const commitBatchPromises: Promise<any>[] = [];
      
        batches.forEach(batch => {
          const writeBatch = this.firestore.firestore.batch();
          batch.forEach(((doc: { ref: firebase.firestore.DocumentReference<any>; }) => writeBatch.delete(doc.ref)));
          commitBatchPromises.push(writeBatch.commit());
        });
      
        await Promise.all(commitBatchPromises);
      };

      chunk(array: any, MAX_WRITES_PER_BATCH: number) {
        var i,j, temporary;
        let batchArray: any[] = [];
        for (i = 0,j = array.length; i < j; i += MAX_WRITES_PER_BATCH) {
            temporary = array.slice(i, i + MAX_WRITES_PER_BATCH);
            batchArray.push(temporary);
        }
        return batchArray;
      }*/
}

export default DatabaseService;