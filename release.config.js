module.exports = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/npm', { npmPublish: false }],
        [
            '@semantic-release/changelog',
            {
                mangle: false,
                headerIds: false,
                changelogFile: 'CHANGELOG.md',
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package.json'],
                message:
                    'chore(release): ${nextRelease.version} [skip ci]',
            },
        ],
        [
            '@semantic-release/github',
            {
                githubUrl: "https://github.com/hank8451/auto-release-workshop.git"
            }],
    ],
};