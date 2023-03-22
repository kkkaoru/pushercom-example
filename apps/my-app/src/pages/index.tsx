import { ExampleText } from '@kkkaoru/example-react-components';
import { concatText } from '@kkkaoru/example-utils';
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
