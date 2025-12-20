import Image from "next/image";
import { getMembersList } from "@/app/_libs/microcms";
import { MEMBERS_LIST_LIMIT } from "@/app/_components/_constants";
import styles from "./page.module.css";

export default async function Page() {
  const data = await getMembersList({ limit: MEMBERS_LIST_LIMIT });
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                {(() => {
                  const position = member.position ?? member.prosition;
                  return position ? (
                    <dd className={styles.position}>{position}</dd>
                  ) : null;
                })()}
                {(() => {
                  const profile = member.profile ?? undefined;
                  return (
                    <dd className={styles.profile}>
                      {profile ?? "説明がありません。"}
                    </dd>
                  );
                })()}
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
