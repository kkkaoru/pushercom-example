import { ExampleText } from '@kkkaoru/pusher-com-components';
import { concatText } from '@kkkaoru/pusher-com-utils';
import { useMemo } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const text = useMemo<string>(() => concatText('BAR', 'BAZ'), []);
  return (
    <main className={styles.main}>
      <div>HELLO WORLD</div>
      <ExampleText text={text} />
    </main>
  );
}
