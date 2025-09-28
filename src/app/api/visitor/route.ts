import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

export async function POST() {
  try {
    const ref = doc(db, "counters", "visitors");
    await updateDoc(ref, { count: increment(1) });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
    const ref = doc(db, "counters", "visitors");
    await setDoc(ref, { count: 1 });
    return NextResponse.json({ success: true });
  }
}