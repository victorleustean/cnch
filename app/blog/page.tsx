import Image from "next/image";
import ArticleItemList from "../components/ArticleListItem";
import { getCategorisedArticles } from "@/lib/articles";
import image1 from "@/public/logo-cnch.jpeg"
import image2 from "@/public/logo-isj.webp"

const articles = getCategorisedArticles();

const BlogPage = () => {
  return (
    
    <section className="mx-auto w-11/12 md:w-1/2 mt-32 flex flex-col gap-16 mb-20">
      <div className="flex flex-row items-center justify-center gap-6 mb-2 -mt-30">
        <Image src={image1} alt="Logo-cnch" />
        <Image src={image2} alt="Logo-isj" />
      </div>
      <header className="text-4xl font-bold text-center">
      <h1 className="text-8xl font-bold tracking-tighter bg-gradient-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text">Avizier</h1>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles &&
          Object.keys(articles).map((category) => (
            <ArticleItemList
              category={category}
              articles={articles[category]}
              key={category}
            />
          ))}
      </section>
    </section>
  );
};

export default BlogPage;