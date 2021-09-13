
import { collection, getDocs } from 'firebase/firestore/lite';
import firestore from '../firebase';
import { Collection } from "../models/collection";
import { Song } from "../models/song";

let musicDb = collection(firestore, "songs");
let collectionDb = collection(firestore, "collections");

const getAllSongs = async () => {
    let musicSnapshot = await getDocs(musicDb);
    return musicSnapshot.docs.map(doc => doc.data() as Song);
}

const getAllCollections = async () => {
    let collectionSnapshot = await getDocs(collectionDb);
    return collectionSnapshot.docs.map(doc => doc.data() as Collection);
}

const DatabaseService = {
    getAllSongs,
    getAllCollections

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