/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_PUSHER_COM_APP_ID: string;
    NEXT_PUBLIC_PUSHER_COM_KEY: string;
    NEXT_PUBLIC_PUSHER_COM_SECRET: string;
    NEXT_PUBLIC_PUSHER_COM_CLUSTER: string;
  }
}
