const nunjucks = require('nunjucks');
const fs = require('fs');

nunjucks.configure('src/templates', { autoescape: true });

const pages = ['index', 'about', 'contact'];

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

pages.forEach(page => {
    const html = nunjucks.render(`${page}.njk`, {
        title: page
    });

    fs.writeFileSync(`dist/${page}.html`, html);
});

console.log("✅ Build complete!");