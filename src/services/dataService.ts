import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  setDoc,
  getDoc
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/config";

// HERO SERVICES
export const getHeroData = async () => {
  const heroDoc = doc(db, "hero", "main");
  const docSnap = await getDoc(heroDoc);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
};

export const updateHeroData = async (data: any) => {
  const heroDoc = doc(db, "hero", "main");
  await setDoc(heroDoc, data, { merge: true });
};

// PACKAGE SERVICES
export const getPackages = async () => {
  const q = query(collection(db, "packages"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addPackage = async (data: any) => {
  return await addDoc(collection(db, "packages"), {
    ...data,
    createdAt: new Date().toISOString()
  });
};

export const updatePackage = async (id: string, data: any) => {
  const packageDoc = doc(db, "packages", id);
  await updateDoc(packageDoc, data);
};

export const deletePackage = async (id: string) => {
  const packageDoc = doc(db, "packages", id);
  await deleteDoc(packageDoc);
};

// REVIEW SERVICES
export const getReviews = async () => {
  const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addReview = async (data: any) => {
  return await addDoc(collection(db, "reviews"), {
    ...data,
    createdAt: new Date().toISOString()
  });
};

export const updateReview = async (id: string, data: any) => {
  const reviewDoc = doc(db, "reviews", id);
  await updateDoc(reviewDoc, data);
};

export const deleteReview = async (id: string) => {
  const reviewDoc = doc(db, "reviews", id);
  await deleteDoc(reviewDoc);
};

// CLOUDINARY CONFIG
const CLOUDINARY_UPLOAD_PRESET = "hajj_upload";

// IMAGE/VIDEO SERVICES (Now using Cloudinary)
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  // Determine resource type (image, video, or raw)
  const resourceType = file.type.startsWith('video/') ? 'video' : 'image';
  const uploadUrl = `https://api.cloudinary.com/v1_1/davj5q0oh/${resourceType}/upload`;

  try {
    console.log(`☁️ Cloudinary: Starting ${resourceType} upload for`, file.name);
    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Cloudinary Error Response:", errorData);
      throw new Error(`Cloudinary Upload Failed: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Cloudinary Success: ${resourceType} URL received:`, data.secure_url);
    return data.secure_url; 
  } catch (error) {
    console.error("🚨 Cloudinary Upload Critical Error:", error);
    throw error;
  }
};
