/* adapted from https://oneuptime.com/blog/post/2026-01-25-dotenv-configuration-nodejs/view */

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            readonly NODE_ENV: string;
            readonly PORT: string;
            readonly DATABASE_URL: string;
            readonly JWT_SECRET: string;
            readonly MIN_LOG_LEVEL: string;
        }
    }
}

export {};
