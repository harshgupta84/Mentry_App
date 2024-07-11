"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { app } from "@/config/FirebaseConfig";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function CreateBusiness() {
  const [businessName, setBusinessName] = useState();
  const [description, setDescription] = useState();
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  const onCreateBusiness = async () => {
    await setDoc(doc(db, "Business", user.email), {
      businessName: businessName.replace(" ", "_"),
      email: user.email,
      userName: user.given_name + " " + user.family_name,
      description: description,
    }).then((resp) => {
      console.log("Document Saved");
      toast.success("Profile Created Successfully");
      toast.success("Redirecting to Dashboard");
      router.replace("/dashboard");
    });
  };

  return (
    <div className="p-14 items-center flex flex-col gap-20 my-10">
      <Image src="/logo.svg" width={200} height={200} />
      <div className="flex flex-col items-center gap-4 max-w-3xl">
        <h2 className="text-4xl font-bold">Let Us Know Something About You</h2>
        <p className="text-slate-500">
          You can always change this later from settings
        </p>
        <div className="w-full">
          <label className="text-slate-400">Your Name</label>
          <Input
            placeholder="Ex: Alex Doe"
            className="mt-2"
            onChange={(event) => setBusinessName(event.target.value)}
          />
          <label className="text-slate-400">Description</label>
          <Input
            placeholder="I am working as a software engineer at XYZ company .."
            className="mt-2"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <Button
          className="w-full"
          disabled={!businessName}
          onClick={onCreateBusiness}
        >
          Create Business
        </Button>
      </div>
    </div>
  );
}

export default CreateBusiness;
