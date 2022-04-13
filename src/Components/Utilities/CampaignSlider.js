import { useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useMediaQuery } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function CampaignSlider({ images, showStepDots = false, interval = 5 }) {
  const [activeStep, setActiveStep] = useState(0);
  const matches = useMediaQuery("(min-width:768px)");
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ position: "relative" }}
      mb={showStepDots && matches ? "20px" : ""}
    >
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={interval * 1000}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  maxHeight: "600px",
                  display: "flex",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    maxWidth: "100%",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                {matches && (
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "40px",
                      bottom: "35px",
                      background: "rgba(0,0,0,.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      align="center"
                      color={"#fff"}
                      variant="h5"
                      component="h2"
                    >
                      {images[activeStep].label}
                    </Typography>
                  </Box>
                )}
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={matches && showStepDots ? maxSteps : 0}
        sx={{
          position: "absolute",
          left: "50%",
          width: "90%",
          maxHeight: "100%",
          boxSizing: "border-box",
          height: "100%",
          pointerEvents: "none",
          transform: "translateX(-50%)",
          background: "transparent",
          "& .MuiMobileStepper-dots": {
            position: "absolute",
            bottom: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ pointerEvents: "all", color: "#000" }}
          >
            <ArrowCircleRightRoundedIcon fontSize="large" />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ pointerEvents: "all", color: "#000" }}
          >
            <ArrowCircleLeftRoundedIcon fontSize="large" />
          </Button>
        }
      />
    </Box>
  );
}

export default CampaignSlider;
