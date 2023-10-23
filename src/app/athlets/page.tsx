"use client";

import React from 'react';
import AthletsComponent from '@/components/Athlets';
import styles from './page.module.css'

export default function Athlets() {
  return (
    <main className={styles.main}>
      <AthletsComponent />
    </main>
  );
}
