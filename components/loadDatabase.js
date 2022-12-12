import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore'
import config from '../firebase/config.js'

export async function loadData() {
    const firebaseApp = initializeApp(config);
    const db = getFirestore(firebaseApp);    
    // Point {
    //   "name": "Pavimento",
    //   "coordY": 86,
    //   "coordX": 40,
    //   "materials": [...]
    // }
    let dbPoints = await getDocs(collection(db, "points"));
    let points = {};
    dbPoints.forEach(dbPoint => {
        let key = dbPoint.id;
        let value = dbPoint.data();
        value.materials = [];
        points[key] = value;
    });

    // Material {
    //   "layers": {
    //       "EnRd7hAaNydVdVJ06qgF": "https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/materials_1565617496107_KTQyQxRXM6se2nREr5zZ-1591364026128-EnRd7hAaNydVdVJ06qgF.png?alt=media&token=b3052e46-69a6-40b0-a930-b75bee28dce0"
    //   },
    //   "points": [ "EnRd7hAaNydVdVJ06qgF" ],
    //   "name": "Morse White Nature",
    //   "materialPreview": "https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/materials_1565617496107_preview.jpeg?alt=media&token=f6030af0-f889-45b7-a2bd-2f4d959c6b70"
    // }
    let dbMaterials = await getDocs(collection(db, "materials"));
    let materials = {};
    dbMaterials.forEach(dbMaterial => {
        let key = dbMaterial.id;
        materials[key] = dbMaterial.data();
        let material = materials[key];
        material.points.forEach(materialPointId => {
            let point = points[materialPointId];
            if(point) { point.materials.push(key); }
        });
    });

    return [points, materials];
}