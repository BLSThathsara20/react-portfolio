const MEDIUM_USERNAME = 'blsthathsara';
const RSS_TO_JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

export const fetchMediumPosts = async () => {
  try {
    const response = await fetch(RSS_TO_JSON_API);
    const data = await response.json();
    
    if (data.status === 'ok' && data.items) {
      const posts = data.items
        .map(post => {
          // Extract first image from content if thumbnail is not available
          let thumbnail = post.thumbnail;
          if (!thumbnail) {
            const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
            thumbnail = imgMatch ? imgMatch[1] : '/api/placeholder/800/400';
          }

          return {
            id: post.guid,
            title: post.title,
            description: post.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
            link: post.link,
            thumbnail,
            pubDate: new Date(post.pubDate),
            author: post.author,
            categories: post.categories,
            readTime: `${Math.ceil(post.description.split(' ').length / 200)} min read`
          };
        })
        .sort((a, b) => b.pubDate - a.pubDate); // Sort by date, newest first

      return {
        status: 'online',
        posts
      };
    }
    
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return {
      status: 'offline',
      posts: []
    };
  }
};