declare const defaultModule: any;

declare module 'react-native' {
    export default defaultModule;
    export const NativeModules: any;
  }