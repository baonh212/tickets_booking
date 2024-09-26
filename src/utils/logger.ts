const isDevelopment = __DEV__;

export const logger = {
  log: (message: string, ...optionalParams: any[]) => {
    if (isDevelopment) {
      console.log(message, optionalParams);
    }
  },
  info: (message: string, ...optionalParams: any[]) => {
    if (isDevelopment) {
      console.info(message, optionalParams);
    }
  },
  error: (message: string, ...optionalParams: any[]) => {
    if (isDevelopment) {
      console.error(message, optionalParams);
    }
  },
};
