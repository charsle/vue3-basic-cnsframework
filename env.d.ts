/// <reference types="vite/client" />


declare module "@axewo/cnsframework"

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }