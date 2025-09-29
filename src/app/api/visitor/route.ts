import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

export async function POST() {
  try {
    console.log("API route called - attempting to increment visitor count");
    
    const ref = doc(db, "counters", "visitors");
    
    // First check if document exists
    const docSnap = await getDoc(ref);
    
    if (docSnap.exists()) {
      // Document exists, increment it
      await updateDoc(ref, { count: increment(1) });
      console.log("Document updated successfully");
    } else {
      // Document doesn't exist, create it with count: 1
      await setDoc(ref, { count: 1 });
      console.log("Document created with initial count: 1");
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in visitor API route:", error);
    return NextResponse.json(
      { success: false, error: error.message }, 
      { status: 500 }
    );
  }
}