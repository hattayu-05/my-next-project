import Image from "next/image";
import type { News } from "@/app/_libs/microcms";
import Data from "../Category";
import Category from "../Category";
import Date from "../Date";
import styles from "./index.module.css";

type Props = {
  article: News;
};

export default function Article({ article }: Props) {
  return (
    <main>
      <h1 className={styles.title}>{article.title}</h1>
      <p className={styles.description}>{article.description}</p>
      <div className={styles.meta}>
        <Category category={article.category} />
        <Date date={article.publishedAt ?? article.createdAt} />
      </div>
      {article.thumbnail && (
        <Image
          src={article.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={article.thumbnail.width}
          height={article.thumbnail.height}
        />
      )}
    </main>
  );
}
