import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    app: {
      env: process.env.NODE_ENV,
      port: process.env.PORT,
    },
  };
});
