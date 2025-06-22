import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

// CORS 설정
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Vite 기본 포트
  credentials: true
}));

// 비디오 프록시 엔드포인트
app.get('/api/video/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const videoUrl = `https://atmae3hxlxg2drrv.public.blob.vercel-storage.com/${filename}`;

    console.log('Fetching video from:', videoUrl);

    const response = await fetch(videoUrl);

    if (!response.ok) {
      return res.status(response.status).json({
        error: 'Failed to fetch the video',
        status: response.status
      });
    }

    // 응답 헤더 설정
    res.set({
      'Content-Type': 'video/mp4',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, immutable',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Range'
    });

    // 스트림으로 비디오 전송
    response.body.pipe(res);

  } catch (error) {
    console.error('Video proxy error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: error.message
    });
  }
});

// 헬스 체크 엔드포인트
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Video proxy server is running' });
});

app.listen(PORT, () => {
  console.log(`Video proxy server running on port ${PORT}`);
  console.log(`Video endpoint: http://localhost:${PORT}/api/video/`);
}); 