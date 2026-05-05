import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase/config";

// --- Cloudinary Config ---
const CLOUDINARY_UPLOAD_PRESET = "hajj_upload";
const CLOUDINARY_CLOUD_NAME = "drtm6p99v";

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  
  const data = await response.json();
  return data.secure_url;
};

// --- Packages Service ---
export const getPackages = async () => {
  const q = query(collection(db, "packages"), orderBy("title", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addPackage = async (pkg: any) => {
  return await addDoc(collection(db, "packages"), pkg);
};

export const deletePackage = async (id: string) => {
  return await deleteDoc(doc(db, "packages", id));
};

export const updatePackage = async (id: string, pkg: any) => {
  return await updateDoc(doc(db, "packages", id), pkg);
};

// --- Reviews Service ---
export const getReviews = async () => {
  const q = query(collection(db, "reviews"), orderBy("name", "asc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addReview = async (review: any) => {
  return await addDoc(collection(db, "reviews"), review);
};

export const deleteReview = async (id: string) => {
  return await deleteDoc(doc(db, "reviews", id));
};

export const updateReview = async (id: string, review: any) => {
  return await updateDoc(doc(db, "reviews", id), review);
};

// --- Hero Service ---
export const getHeroData = async () => {
  const querySnapshot = await getDocs(collection(db, "hero"));
  if (querySnapshot.empty) return null;
  return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
};

export const updateHeroData = async (id: string, data: any) => {
  return await updateDoc(doc(db, "hero", id), data);
};
