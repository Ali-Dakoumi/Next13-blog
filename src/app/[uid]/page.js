import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import * as prismic from "@prismicio/client";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SliceZone slices={data.slices}  resolver={resolver} />
    </main>
  )
}

