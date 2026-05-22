import {
  doc,
  getDoc,
} from "firebase/firestore"

import { db } from "@/lib/firebase"

export async function getUserRole(email: string) {

  const ref = doc(db, "users", email)

  const snap = await getDoc(ref)

  if (!snap.exists()) {
    return null
  }

  return snap.data().role
}