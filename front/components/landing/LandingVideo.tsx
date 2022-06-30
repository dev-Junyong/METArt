import { Box, Typography } from '@mui/material';

function LandingVideo() {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      width="100%"
      zIndex={-1}
      overflow="hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        id="homeVideo"
        style={{
          objectFit: 'cover',
          width: '100vw',
          height: '100vh',
        }}
      >
        <source src="/video/MetartMainVideo.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}

export default LandingVideo;
