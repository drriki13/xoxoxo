import { storage } from "./db"

class StorageService {

    constructor(ref) {
        this.ref = ref;
    }

    setRef(ref) {
        this.ref = (ref);
        return this;
    }

    getAll() {
        return storage.collection(this.ref);
    }

    findById(key) {
        return storage.collection(this.ref).doc(key);
    }

    create(data) {
        return storage.collection(this.ref).add(data);
    }

    update(key, value) {
        return storage.collection(this.ref).doc(key).update(value);
    }

    delete(key) {
        return storage.collection(this.ref).doc(key).delete();
    }

    deleteAll() {
        return storage.collection(this.ref).doc().delete();
    }
}

export default new StorageService();
