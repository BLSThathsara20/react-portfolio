#!/bin/bash

# Print start message
echo "🚀 Starting deployment process..."

# Clean build directory
echo "🧹 Cleaning build directory..."
rm -rf dist/

# Build the project
echo "🏗️ Building project..."
npm run build

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p dist/

# Copy .htaccess to dist
echo "📄 Copying .htaccess..."
cp public/.htaccess dist/

# Copy 404.html to dist
echo "📄 Copying 404.html..."
cp public/404.html dist/

# Create robots.txt
echo "🤖 Creating robots.txt..."
cat > dist/robots.txt << EOL
User-agent: *
Allow: /

# Allow crawling of all content
Disallow:

# Sitemap location
Sitemap: https://savithathsara.me/sitemap.xml

# Crawl-delay to prevent overwhelming the server
Crawl-delay: 1

# Block crawling of certain file types
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$

# Social media verification files
Allow: /pinterest-*.html
Allow: /google*.html
Allow: /yandex*.html
Allow: /brave-rewards-verification.txt
Allow: /facebook-domain-verification.txt

# Common directories to disallow
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /admin/
Disallow: /private/
EOL

# Create sitemap.xml
echo "🗺️ Creating sitemap.xml..."
cat > dist/sitemap.xml << EOL
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://savithathsara.me/</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://savithathsara.me/about</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://savithathsara.me/projects</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://savithathsara.me/blog</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://savithathsara.me/contact</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://savithathsara.me/resume</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://savithathsara.me/playground</loc>
    <lastmod>$(date +%Y-%m-%d)</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
EOL

# Verify file creation
echo "✅ Verifying files..."
if [ -f "dist/robots.txt" ] && [ -f "dist/sitemap.xml" ] && [ -f "dist/.htaccess" ] && [ -f "dist/404.html" ]; then
    echo "✨ All files created successfully!"
else
    echo "❌ Error: Some files are missing!"
    exit 1
fi

# Create or update version file
echo "📝 Creating version file..."
echo "$(date '+%Y-%m-%d %H:%M:%S')" > dist/version.txt

# Final success message
echo "🎉 Deployment files ready! You can now deploy the 'dist' directory."