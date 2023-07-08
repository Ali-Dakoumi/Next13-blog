import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import resolver from "../../../sm-resolver";

export default async function Page({params}) {
  
  const client = createClient()
  let data = null; // Assigning a default value

  try {
    ({ data } = await client.getByUID('page', params.uid));
    // Process the data or perform any necessary operations
  } catch (error) {
    console.log(error);
    return;
  }
  return (
    <main className="flex min-h-screen max-w-6xl m-auto flex-col items-center justify-between py-24 px-10 gap-10">
      <SliceZone slices={data.slices}  resolver={resolver} />
    </main>
  )
}

