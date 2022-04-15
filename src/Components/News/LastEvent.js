import Player from "../VideoPlayer/Player";

const LastEvent = () => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Ultimo Evento</h2>
      <Player
        videoUrl="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
        videoMaxWidth="900px"
        videoMinWidth="280px"
        playerBackgroundColor="#3e7078"
        playerSlidersColor="#fff"
        playerIconsColor="#000"
      />
    </>
  );
};

export default LastEvent;
