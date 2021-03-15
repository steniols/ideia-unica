module.exports = {
    target: 'serverless',
    "version": 2,
    "builds": [{ "src": "package.json", "use": "@now/next" }]
};