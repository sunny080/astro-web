import { useSanityClient, groq, createImageBuilder } from "astro-sanity";

const imageUrlBuilder = createImageBuilder(useSanityClient());

function UrlForImage(source) {
  return imageUrlBuilder.image(source);
}

export { imageUrlBuilder, UrlForImage };
