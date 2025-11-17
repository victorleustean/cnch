import Image from "next/image";
import Link from "next/link";
import ArticleItemList from "../components/ArticleListItem";
import { getCategorisedArticles } from "@/lib/articles";
import image1 from "@/public/logo-cnch.jpeg"
import image2 from "@/public/logo-isj.webp"
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  let articles;
  
  try {
    articles = getCategorisedArticles();
  } catch (error) {
    console.error('Error loading articles:', error);
    articles = {};
  }

  const hasArticles = Object.keys(articles).length > 0;

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-32 flex flex-col gap-16 mb-20">
      <div className="flex flex-row items-center justify-center gap-6 mb-2 -mt-30">
        <Image src={image1} alt="Logo-cnch" />
        <Image src={image2} alt="Logo-isj" />
      </div>
      
      <header className="text-4xl font-bold text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text">
          Avizier
        </h1>
      </header>
      
      {hasArticles ? (
        <>
          <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
            {Object.keys(articles).map((category) => (
              <ArticleItemList
                category={category}
                articles={articles[category]}
                key={category}
              />
            ))}
          </section>
          
          {/* Back to home button - centered */}
          <div className="flex justify-center mt-8">
            <Link href="/">
              <Button className="bg-black text-white hover:bg-black/90 w-full md:w-auto" size="lg">
                ← Înapoi acasă
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-8">
            Nu există articole disponibile momentan.
          </p>
          <Link href="/">
            <Button className="bg-black text-white hover:bg-black/90" size="lg">
              ← Înapoi acasă
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default BlogPage;