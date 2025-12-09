import { createClient } from "next-sanity";

export const client = createClient({
  // Sanity Project ID - unique to this project
  projectId: "t72u1s0s",
  // Dataset name - usually 'production'
  dataset: "production",
  // API Version - use current date YYYY-MM-DD
  apiVersion: "2024-01-01",
  // Use CDN for faster response in production, but fresh data in dev
  useCdn: false,
});
