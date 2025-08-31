hexo.extend.filter.register('theme_inject', function(injects) {
    injects.bodyEnd.raw('vercel-analytics-js', '<script defer src="/_vercel/insights/script.js"></script>', {}, {cache: true});
  });
