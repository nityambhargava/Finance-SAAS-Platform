/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, //Edited this line
};

export default nextConfig;

module.exports = {                          //Edited line 8 to 18
    async redirects() {
      return [
        {
          source: '/old-path',
          destination: '/new-path',
          permanent: true,
        },
      ]
    },
  }
  
