/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn.noitatnemucod.net'
            },
            {
                protocol:'https',
                hostname:'cdn.myanimelist.net'
            },
            {
                protocol:'https',
                hostname:'img.youtube.com'
            },
            {
                protocol:'https',
                hostname:'tenor.com'
            },
        ]
    }
};

export default nextConfig;
