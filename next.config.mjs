/** @type {import('next').NextConfig} */
// 여기에 필요한 환경 설정을 해야 한다.
// 외부 이미지들을 가져올때 사용
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'yts.mx'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ]
    },
    experimental: {
        missingSuspenseWithCSRBailout: false
    } // 파일 읽고 쓰기에 대한 에러가 나올때 그것에 대한 카테고리가 나옴
};

export default nextConfig;
