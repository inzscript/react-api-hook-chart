// Define chart config options to be inherient for all charts.
// This helps clean up the canvas definistion code.

export const historyOptions = {
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },
  
    animation: {
      duration: 2000,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: "linear",
        },
      ],
    },
  };