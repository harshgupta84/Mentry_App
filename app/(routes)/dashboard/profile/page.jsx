"use client";
import React, { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { app } from "@/config/FirebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function Profile() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { user } = useKindeBrowserClient();
  const db = getFirestore(app);

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetchDocumentByEmail(user.email);
    }
  }, [user]);

  async function fetchDocumentByEmail(emailId) {
    try {
      const docRef = doc(db, "Business", emailId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    } finally {
      setLoading(false);
    }
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        No user data available
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0116 0h-4a4 4 0 10-8 0H4z"
            ></path>
          </svg>
          <p>Mentry</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-10 p-6 gap-6 bg-gray-800 rounded-lg shadow-md text-center text-white">
    <img
      src={user.picture}
      alt="Profile"
      className="w-32 h-32 rounded-full mx-auto mb-4"
    />
    <h1 className="text-2xl font-semibold text-blue-400">{`${user.given_name} ${user.family_name}`}</h1>
    <p className="text-gray-300">
      <strong>Email:</strong> {user.email}
    </p>
    <p className="text-gray-300">
      <strong>Role:</strong> {(data && data.businessName) || "N/A"}
    </p>
    <p className="text-gray-300">
      <strong>Description:</strong> {(data && data.description) || "N/A"}
    </p>
  </div>
  );
}

export default Profile;
