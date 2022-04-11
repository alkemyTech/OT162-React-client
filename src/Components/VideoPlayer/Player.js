import {
  PauseRounded,
  PlayArrowRounded,
  VolumeOffRounded,
  VolumeUpRounded,
} from "@mui/icons-material";
import { Box, IconButton, Slider, Stack } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";

const ytIdRegx = /(.*?)(^|\/|v=)([a-z0-9_-]{11})(.*)?/i; // --> me da el id en el indice 3

const Player = ({
  videoUrl,
  videoMinWidth = "280px",
  videoMaxWidth = "640px",
  playerBackgroundColor = "#3e7078",
  playerSlidersColor = "#fff",
  playerIconsColor = "#000",
}) => {
  const [played, setPlayed] = useState(0);
  const [volume, setVolume] = useState(1);
  const [savedVolume, setSavedVolume] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [videoWidth, setVideoWidth] = useState();
  const [isDragged, setIsDragged] = useState(false);
  const playerRef = useRef();
  let idVideo = videoUrl.match(ytIdRegx)[3];

  const getVideoWidth = () => {
    const newWidth = playerRef.current.wrapper.clientWidth;
    setVideoWidth(newWidth);
  };

  useEffect(() => {
    getVideoWidth();
  }, [videoWidth]);

  useEffect(() => {
    window.addEventListener("resize", getVideoWidth);
  }, []);

  const handleProgress = (state) => {
    if (!isDragged) setPlayed(state.played);
  };

  const handleSeekChange = (e) => {
    setIsDragged(true);
    setPlayed(e.target.value);
  };

  const handleSeekMouseUp = (e = null, value) => {
    setIsDragged(false);
    playerRef.current.seekTo(value);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    setSavedVolume(e.target.value);
  };

  const handlePause = () => {
    setPlaying(!playing);
  };

  const resetVideo = () => {
    handlePause();
    playerRef.current.seekTo(0);
  };

  return (
    <Box
      sx={{
        maxWidth: videoMaxWidth,
        margin: "0 auto",
        backgroundColor: playerBackgroundColor,
        borderRadius: "0 0 15px 15px",
      }}
    >
      <div>
        <ReactPlayer
          ref={playerRef}
          controls={false}
          onProgress={handleProgress}
          playing={playing}
          volume={volume}
          onEnded={resetVideo}
          config={{
            youtube: {
              playerVars: {
                autoplay: 0,
                cc_load_policy: 0,
                controls: 0,
                enablejsapi: 1,
                fs: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                origin: "youtube.com", // intento de evitar el error de origin
                rel: 0,
                showinfo: 0,
                widgetid: 1,
              },
            },
          }}
          width="100%"
          height={`calc(${videoWidth}px * 0.5625)`}
          url={`https://www.youtube.com/watch?v=${idVideo}`}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "85%",
          margin: "0 auto",
        }}
      >
        <Slider
          aria-label="time-indicator"
          min={0}
          max={1}
          step={0.01}
          value={played}
          onChange={handleSeekChange}
          onChangeCommitted={handleSeekMouseUp}
          sx={{
            color: playerSlidersColor,
            marginTop: "10px",
            height: 6,
            "& .MuiSlider-thumb": {
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px 'rgb(0 0 0 / 16%)'`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />
        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 1, px: 1, minWidth: videoMinWidth }}
          alignItems="center"
          maxWidth={"50%"}
        >
          <IconButton
            aria-label={playing ? "pause" : "play"}
            onClick={handlePause}
          >
            {playing ? (
              <PauseRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={playerIconsColor}
              />
            ) : (
              <PlayArrowRounded
                sx={{ fontSize: "3rem" }}
                htmlColor={playerIconsColor}
              />
            )}
          </IconButton>
          <IconButton
            aria-label={volume > 0 ? "mute" : "unmute"}
            onClick={() => (volume > 0 ? setVolume(0) : setVolume(savedVolume))}
          >
            {volume > 0 ? (
              <VolumeUpRounded htmlColor={playerIconsColor} />
            ) : (
              <VolumeOffRounded htmlColor={playerIconsColor} />
            )}
          </IconButton>
          <Slider
            aria-label="volume"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            sx={{
              color: playerSlidersColor,
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                width: 15,
                height: 15,
                backgroundColor: playerSlidersColor,
                "&:before": {
                  boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Player;
