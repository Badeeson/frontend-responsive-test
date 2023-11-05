"use client";

import styles from './page.module.css'
import AthletsComponent from '@/components/Athlets';

export default function Home() {
  return (
    <main className={styles.main}>
      <AthletsComponent />
    </main>
  )
}
