module.exports = {
    async redirects() {
        return [
            {
                source: '/courses',
                destination: '/',
                permanent: true, // Set this to true to indicate a permanent redirect for SEO and caching purposes
            },
        ];
    },
};
