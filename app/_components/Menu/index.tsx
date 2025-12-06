"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
    const [isOpen, setOpen] = useState(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);
  return (
    <div>
    <nav className={cx(styles.nav, { [styles.open]: isOpen })}>
        <ul className={styles.items}>
            <li>
                <Link href="/">ニュース</Link>
            </li>
            <li>
                <Link href="/news">メンバー</Link>
            </li>
            <li>
                <Link href="/members">お問い合わせ</Link>
            </li>
        </ul>
        <button className={cx(styles.ctaButton, styles.close)} onClick={close}>
            <Image
                src="/close.svg"
                alt="閉じる"
                width={24}
                height={24}
                priority
            />
        </button>
    </nav>
    <button className={styles.ctaButton} onClick={open}>
        <Image src="/menu.svg" alt="Menu" width={24} height={24} />
    </button>
    </div>
  );
}