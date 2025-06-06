import React from "react";
import Pointer from "../images/pointer2.svg";

const panelIds = [
  "waistband",
  "wristband-left",
  "wristband-right",
  "body-left-lower",
  "body-right-lower",
  "body-left-top",
  "body-right-top",
  "lower-left-arm",
  "lower-right-arm",
  "upper-left-arm",
  "upper-right-arm",
  "collar",
];

const JacketSVG = ({ onPanelClick, panelFills, selectedPanel = null }) => {
  const isSelected = (panelId) =>
    selectedPanel === panelId ||
    (selectedPanel === "arms-top" &&
      ["upper-left-arm", "upper-right-arm"].includes(panelId)) ||
    (selectedPanel === "arms-bottom" &&
      ["lower-left-arm", "lower-right-arm"].includes(panelId)) ||
    (selectedPanel === "body-top" &&
      ["body-left-top", "body-right-top"].includes(panelId)) ||
    (selectedPanel === "body-bottom" &&
      ["body-left-lower", "body-right-lower"].includes(panelId));

  const hasImage = (panelId) => !!panelFills[panelId];

  const getFill = (panelId) => {
    if (isSelected(panelId) && !hasImage(panelId)) return "var(--purple)";
    if (panelFills[panelId]) return `url(#pattern-${panelId})`;
    return "#fff";
  };

  const renderSelectedText = (x, y, panelId) => {
    return (
      isSelected(panelId) && (
        <text
          x={x}
          y={y}
          fontSize="10"
          fontWeight="bold"
          textAnchor="middle"
          fill="white"
          pointerEvents="none"
        >
          selected
        </text>
      )
    );
  };

  return (
    <svg viewBox="0 0 461.78 284.15" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {panelIds.map((panel) => {
          const img = panelFills[panel];
          return (
            <pattern
              key={panel}
              id={`pattern-${panel}`}
              patternUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              {img && (
                <image
                  href={img}
                  x="0"
                  y="0"
                  width="40%"
                  height="40%"
                  preserveAspectRatio="xMidYMid slice"
                />
              )}
            </pattern>
          );
        })}
      </defs>

      <g
        id="waistband"
        onClick={() => onPanelClick("waistband")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <rect
          x="148.25"
          y="259.31"
          width="165.63"
          height="24.35"
          fill={getFill("waistband")}
          stroke="#221f20"
        />
        {renderSelectedText(231, 273, "waistband")}
      </g>

      <g
        id="wristband-right"
        onClick={() => onPanelClick("wristband-right")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <rect
          x="442.21"
          y="100.69"
          width="19.07"
          height="50.37"
          fill={getFill("wristband-right")}
          stroke="#221f20"
        />
        {renderSelectedText(451, 125, "wristband-right")}
      </g>

      <g
        id="wristband-left"
        onClick={() => onPanelClick("wristband-left")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <rect
          x=".5"
          y="100.7"
          width="19.07"
          height="50.37"
          fill={getFill("wristband-left")}
          stroke="#221f20"
        />
        {renderSelectedText(10, 125, "wristband-left")}
      </g>

      <g
        id="body-left-lower"
        onClick={() => onPanelClick("body-left-lower")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <path
          d="M231.55,152.72h-88.99s-.79,59.62,4.67,106.49h84.31v-106.49Z"
          fill={getFill("body-left-lower")}
          stroke="#221f20"
        />
        {renderSelectedText(180, 230, "body-left-lower")}
      </g>

      <g
        id="body-right-lower"
        onClick={() => onPanelClick("body-right-lower")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <path
          d="M231.55,152.72h88.17s.79,59.62-4.63,106.49h-83.54v-106.49Z"
          fill={getFill("body-right-lower")}
          stroke="#221f20"
        />
        {renderSelectedText(285, 230, "body-right-lower")}
      </g>

      <g
        id="lower-left-arm"
        onClick={() => onPanelClick("lower-left-arm")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <rect
          x="19.57"
          y="112.98"
          width="122.98"
          height="38.92"
          fill={getFill("lower-left-arm")}
          stroke="#221f20"
        />
        {renderSelectedText(80, 135, "lower-left-arm")}
      </g>

      <g
        id="lower-right-arm"
        onClick={() => onPanelClick("lower-right-arm")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <rect
          x="319.76"
          y="112.98"
          width="122.71"
          height="38.92"
          fill={getFill("lower-right-arm")}
          stroke="#221f20"
        />
        {renderSelectedText(380, 135, "lower-right-arm")}
      </g>

      <g
        id="upper-left-arm"
        onClick={() => onPanelClick("upper-left-arm")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <path
          d="M142.55,112.96H19.84v-13.73s20.73-37.59,122.71-47.65v61.4-.02Z"
          fill={getFill("upper-left-arm")}
          stroke="#221f20"
        />
        {renderSelectedText(80, 90, "upper-left-arm")}
      </g>

      <g
        id="upper-right-arm"
        onClick={() => onPanelClick("upper-right-arm")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <path
          d="M319.76,112.96h122.71v-13.73s-20.73-37.59-122.71-47.65v61.4-.02Z"
          fill={getFill("upper-right-arm")}
          stroke="#221f20"
        />
        {renderSelectedText(380, 90, "upper-right-arm")}
      </g>

      <g
        id="body-left-top"
        onClick={() => onPanelClick("body-left-top")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <path
          d="M231.86,55.17s-31.73,1.57-50.05-12.91c0,0-31.17,5.96-39.25,9.12v101.34h89.31V55.17Z"
          fill={getFill("body-left-top")}
          stroke="#221f20"
        />
        {renderSelectedText(180, 100, "body-left-top")}
      </g>

      <g
        id="body-right-top"
        onClick={() => onPanelClick("body-right-top")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <path
          d="M231.31,55.17s32.84,1.57,49.58-12.91c0,0,30.72,5.96,38.72,9.12l.15,101.34h-88.45V55.17Z"
          fill={getFill("body-right-top")}
          stroke="#221f20"
        />
        {renderSelectedText(285, 100, "body-right-top")}
      </g>

      <g
        id="collar"
        onClick={() => onPanelClick("collar")}
        style={{ cursor: `url(${Pointer}) 0 0, pointer` }}
      >
        <path
          d="M271.87.5h-39.57l-.21,54.16c39.72,0,48.94-13.17,48.94-13.17,0-24.8-9.16-41-9.16-41Z"
          fill={getFill("collar")}
          stroke="#221f20"
        />
        <path
          d="M182.78,41.5s8.94,13.17,49.31,13.17l.22-54.16h-40.22s-9.31,16.19-9.31,41Z"
          fill={getFill("collar")}
          stroke="#221f20"
        />
        {renderSelectedText(231, 25, "collar")}
      </g>
      <g id="zips">
        {/* Centre front zip */}
        <line
          x1="231.55"
          y1="3.96"
          x2="231.55"
          y2="5.79"
          stroke="#d3d3d3"
          strokeWidth="2.5"
        />
        <line
          x1="231.55"
          y1="9.47"
          x2="231.55"
          y2="279.88"
          stroke="#d3d3d3"
          strokeWidth="2.5"
          strokeDasharray="2.02 2.02"
        />
        <line
          x1="231.55"
          y1="281.73"
          x2="231.55"
          y2="283.55"
          stroke="#d3d3d3"
          strokeWidth="2.5"
        />

        {/* Left side zip line */}
        <line
          x1="155.78"
          y1="198.44"
          x2="155.78"
          y2="200.26"
          stroke="#d3d3d3"
          strokeWidth="2.5"
        />
        <line
          x1="155.78"
          y1="204.15"
          x2="155.78"
          y2="248.94"
          stroke="#d3d3d3"
          strokeWidth="2.5"
          strokeDasharray="2.14 2.14"
        />
        <line
          x1="155.78"
          y1="250.89"
          x2="155.78"
          y2="252.71"
          stroke="#d3d3d3"
          strokeWidth="2.5"
        />

        {/* Right side zip line */}
        <line
          x1="306.99"
          y1="198.44"
          x2="306.99"
          y2="200.26"
          stroke="#d3d3d3"
          strokeWidth="2.5"
        />
        <line
          x1="306.99"
          y1="204.15"
          x2="306.99"
          y2="248.94"
          stroke="#d3d3d3"
          strokeWidth="2.5"
          strokeDasharray="2.14 2.14"
        />
        <line
          x1="306.99"
          y1="250.89"
          x2="306.99"
          y2="252.71"
          stroke="#d3d3d3"
          strokeWidth="2.5"
        />
      </g>
    </svg>
  );
};

export default JacketSVG;
