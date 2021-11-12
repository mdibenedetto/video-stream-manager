# Description

This repository is an experiment of video streaming. 

The client makes has a tag `video` which source is a WEB API that send a video response splitted in chunks of size of 1MB;

# Request headers

We can notice that the `range` is ` range: 'bytes=0-'`

```JS
{
  host: 'localhost:8000',
  connection: 'keep-alive',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
  'accept-encoding': 'identity;q=1, *;q=0',
  'sec-ch-ua-mobile': '?0',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
  'sec-ch-ua-platform': '"macOS"',
  accept: '*/*',
  'sec-fetch-site': 'same-origin',
  'sec-fetch-mode': 'no-cors',
  'sec-fetch-dest': 'video',
  referer: 'http://localhost:8000/',
  'accept-language': 'en',
  range: 'bytes=0-'
}
{
// other headers
  range: 'bytes=5210112-'
}
{
// other headers
  range: 'bytes=294912-'
}
{
// other headers
  range: 'bytes=1294913-'
}
{
// other headers
  range: 'bytes=2294914-'
}
{
// other headers
  range: 'bytes=3294915-'
}
{
// other headers
  range: 'bytes=4294916-'
}
```

# Response headers

```JS
{
  'Content-Range': 'bytes 0-1000000/5253880',
  'Accept-Ranges': 'bytes',
  'Content-Length': 1000001,
  'Content-Type': 'video/mp4'
}
{
  'Content-Range': 'bytes 5210112-5253879/5253880',
  'Accept-Ranges': 'bytes',
  'Content-Length': 43768,
  'Content-Type': 'video/mp4'
}
{
  'Content-Range': 'bytes 229376-1229376/5253880',
  'Accept-Ranges': 'bytes',
  'Content-Length': 1000001,
  'Content-Type': 'video/mp4'
}
{
  'Content-Range': 'bytes 1229377-2229377/5253880',
  'Accept-Ranges': 'bytes',
  'Content-Length': 1000001,
  'Content-Type': 'video/mp4'
}
{
  'Content-Range': 'bytes 2229378-3229378/5253880',
  'Accept-Ranges': 'bytes',
  'Content-Length': 1000001,
  'Content-Type': 'video/mp4'
}
{
  'Content-Range': 'bytes 3229379-4229379/5253880',
  'Accept-Ranges': 'bytes',
  'Content-Length': 1000001,
  'Content-Type': 'video/mp4'
}
{
  'Content-Range': 'bytes 4229380-5229380/5253880',
  'Accept-Ranges': 'bytes',
  'Content-Length': 1000001,
  'Content-Type': 'video/mp4'
}

```

# Preview App

![Image preview](/docs/img/preview.png)

# CLI commands

- run `npm run start` to start the app

# Reference

- [blog-code-examples/http-video-stream/](https://www.youtube.com/watch?v=ZjBLbXUuyWg&t=5s)
- [How To Code A Video Streaming Server in NodeJS](https://github.com/Abdisalan/blog-code-examples/tree/master/http-video-stream)
- [Sample-videos](https://sample-videos.com/)

