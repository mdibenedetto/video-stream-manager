// // @ts-check

const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const BAD_REQUEST_HTTP_CODE = 400;
const PARTIAL_CONTENT_REQUEST_HTTP_CODE = 206;

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../client/index.html"));
});

app.get("/api/video/sample", function (req, res) {
  // Ensure there is given a range given for the video
  const range = req.headers.range;
  if (!range) {
    return res.status(BAD_REQUEST_HTTP_CODE).send("Requires range header");
  }

  // get video stat (around 61MB)
  const videoPath = __dirname + "/assets/video/sample.mp4";
  const videoSize = fs.statSync(videoPath).size;

  // Parse range
  // Example: "bytes=32324-"
  const CHUNK_SIZE = 10 ** 6; // 1MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // Create header
  const contentLength = end - start + 1;
  /**
   * @type {import("http").OutgoingHttpHeaders}
   */
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(PARTIAL_CONTENT_REQUEST_HTTP_CODE, headers);

  // create video read stream for this particular chunk
  const videoStream = fs.createReadStream(videoPath, { start, end });

  // Stream the video chunk to the client
  videoStream.pipe(res);
});

const PORT = 8000;
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
  console.log(`http://localhost:${PORT}`);
});
