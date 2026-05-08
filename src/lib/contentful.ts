import { createClient, type EntryFieldTypes } from "contentful";

export function getContentfulClient() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN;
  if (!space || !accessToken) return null;
  return createClient({ space, accessToken });
}

export type ContentfulBlogPostFields = {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  body: EntryFieldTypes.RichText;
  date: EntryFieldTypes.Date;
};

