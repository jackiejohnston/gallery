require "rake"

desc "Run on localhost"
task :serve do
  sh "JEKYLL_ENV=production jekyll serve --trace"
end

desc "Run on localhost"
task :liveserve do
  sh "JEKYLL_ENV=production jekyll serve --trace --livereload"
end

desc "Create production build"
task :build do
  sh "JEKYLL_ENV=production jekyll build --verbose --trace"
end