module.exports = {
    title: '青章浚的技术笔记', // Title for the site. This will be displayed in the navbar.
    theme: '@vuepress/theme-blog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        smoothScroll: true,
        sitemap:{
            hostname: 'https://jupiterjun.net'
        },
        feed:{
            canonical_base:'https://jupiterjun.net'
        },
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/JupiterJun/tech-blog',
                },
                {
                    type: 'mail',
                    link: 'mailto:me@imjz.net',
                },
            ],
            copyright: [
                {
                    text: '本站文章采用 CC-BY-NC-SA 4.0 国际许可协议进行许可。',
                    link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh'
                },
                {
                    text: '版权所有 © 2021 青章浚'
                }
            ],
        },
        frontmatters: [
            {
                id: 'tag',
                keys: ['tag'],
                path: '/tag/',
                title: '标签',
            }
        ],
        directories: [
            {
                id: 'post',
                dirname: '_post',
                path: '/',
                title: '文章',
            }
        ],
        nav: [
            {
                text: '文章',
                link: '/',
            },
            {
                text: '标签',
                link: '/tag/',
            },
        ]
    },
    dest: './dist'
}
