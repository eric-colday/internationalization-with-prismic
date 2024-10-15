import { PrismicNextLink } from "@prismicio/next";
import React from "react";

export default async function Navigation({ settings }) {
  return (
    <div className="flex justify-around items-center py-8">
      <div>{settings.data.site_title}</div>
      <div className="flex gap-4">
        {settings.data.navigation.map(({ link, label }) => (
          <div>
            <PrismicNextLink field={link} className="p-8">
              {label}
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </div>
  );
}
