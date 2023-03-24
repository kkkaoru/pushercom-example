import { ExampleText } from '@kkkaoru/pusher-com-components';
import { concatText } from '@kkkaoru/pusher-com-utils';
import { useMemo } from 'react';
import Pusher from 'pusher-js';
import styles from '../styles/Home.module.css';

export default function Home() {
  const text = useMemo<string>(() => concatText('BAR', 'BAZ'), []);
  Pusher.logToConsole = true;
  const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_COM_KEY, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_COM_CLUSTER,
  });

  const channel = pusher.subscribe('private-my-channel');
  const eventName = 'client-click';
  channel.bind(eventName, (data) => {
    // eslint-disable-next-line no-alert, @typescript-eslint/no-unsafe-member-access
    window.alert(`Received my-event with message: ${data.message}`);
  });
  const handleOnClick = () => {
    channel.trigger(eventName, { message: 'clicked!' });
  };
  return (
    <main className={styles.main}>
      <div>HELLO WORLD</div>
      <ExampleText text={text} />
      <button onClick={handleOnClick} type="button">
        Send Message
      </button>
    </main>
  );
}
