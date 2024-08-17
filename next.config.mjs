/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MINIO_ENDPOINT: process.env.MINIO_ENDPOINT,
    MINIO_BUCKET_NAME: process.env.MINIO_BUCKET_NAME,
    MINIO_USE_SSL: process.env.MINIO_USE_SSL,
  }
};

export default nextConfig;
