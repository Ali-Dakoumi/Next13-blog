export function getExcerpt(body) {
    
  const text = body
    .filter((slice) => slice.type === "paragraph")
    .map((slice) => slice.text)
    .join(" ");

  const excerpt = text.substring(0, 200);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
}