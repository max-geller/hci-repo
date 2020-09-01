import * as functions from 'firebase-functions';
import { https } from 'firebase-functions'
import * as admin from 'firebase-admin';
import * as algoliasearch from 'algoliasearch';
admin.initializeApp();
const env = functions.config();



const client = algoliasearch(env.algolia.appid, env.algolia.apikey);
const index = client.initIndex('project');

exports.indexProject = functions.firestore
    .document('projects/{projectId}')
    .onCreate((snap, context) => {
        const data = snap.data();
        const objectId = snap.id;

        return index.addObject({
            objectId,
            ...data
        });
    });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// 
