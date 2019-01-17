import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("todos");
export const imagesRef = databaseRef.child("images");

export const storageRef = firebase
  .storage()
  .refFromURL("gs://chris-lane-portfolio.appspot.com");

export const newFirebaseId = databaseRef.push().key;
