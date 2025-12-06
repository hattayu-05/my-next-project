import { getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewList';

export default async function NewsPage() {
    const { contents } = await getNewsList();

    return <NewsList news={contents} />;
}