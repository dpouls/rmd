import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'
//listener for the collections
 const useFirestore = (collection) => {
     console.log('usefirestore hit', collection)
    const [docs, setDocs] = useState([]);
    useEffect(() => {
       const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt','desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(),id: doc.id})
                });
                console.log('documents', documents)
                setDocs(documents);
            })
            return () => unsub();
    }, [collection])
    return { docs }
} 

export default useFirestore