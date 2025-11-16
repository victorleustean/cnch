import { getCategorisedArticles } from "@/lib/articles";
import { NextResponse } from "next/server";

export async function GET() {
  const categorisedArticles = getCategorisedArticles();
  
  // Flatten all articles from all categories into a single array
  const allArticles = Object.values(categorisedArticles).flat();
  
  return NextResponse.json(allArticles);
}