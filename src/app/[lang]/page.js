import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { getLocales } from "@/lib/getLocales";

export default async function Page({ params: { lang } }) {
  const client = createClient();
  const page = await client
    .getByUID("page", "accueil", { lang })
    .catch(() => notFound());
  // const navigation = await client.getSingle("navigation", { lang });
  // const settings = await client.getSingle("settings", { lang });
  const locales = await getLocales(page, client);

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
