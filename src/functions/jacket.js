import React from "react";
import Pointer from "../images/pointer2.svg";

const panelStyle = { cursor: `url(${Pointer}) 0 0, pointer` };

const panelIds = [
  "waistband",
  "wristband-left",
  "wristband-right",
  "collar",

  // 2-panel body
  "body-left-top",
  "body-right-top",
  "body-left-lower",
  "body-right-lower",

  // 3-panel body
  "body-left-upper",
  "body-right-upper",
  "body-left-middle",
  "body-right-middle",
  "body-left-bottom",
  "body-right-bottom",

  // 2-panel arms
  "upper-left-arm",
  "upper-right-arm",
  "lower-left-arm",
  "lower-right-arm",

  // 3-panel arms
  "arm-top-left",
  "arm-top-right",
  "arm-middle-left",
  "arm-middle-right",
  "arm-bottom-left",
  "arm-bottom-right",
];

const JacketSVG = ({
  onPanelClick,
  panelFills,
  selectedPanel,
  panelType,
  bodyPanelType,
  mirrorSides,
}) => {
  const [hoveredPanel, setHoveredPanel] = React.useState(null);

  const mirrorMap = {
    "body-left-upper": "body-right-upper",
    "body-right-upper": "body-left-upper",
    "body-left-middle": "body-right-middle",
    "body-right-middle": "body-left-middle",
    "body-left-bottom": "body-right-bottom",
    "body-right-bottom": "body-left-bottom",
    "body-left-top": "body-right-top",
    "body-right-top": "body-left-top",
    "body-left-lower": "body-right-lower",
    "body-right-lower": "body-left-lower",
    "upper-left-arm": "upper-right-arm",
    "upper-right-arm": "upper-left-arm",
    "lower-left-arm": "lower-right-arm",
    "lower-right-arm": "lower-left-arm",
    "arm-top-left": "arm-top-right",
    "arm-top-right": "arm-top-left",
    "arm-middle-left": "arm-middle-right",
    "arm-middle-right": "arm-middle-left",
    "arm-bottom-left": "arm-bottom-right",
    "arm-bottom-right": "arm-bottom-left",
    "wristband-left": "wristband-right",
    "wristband-right": "wristband-left",
  };
  const isSelected = (panelId) => {
    if (selectedPanel === panelId) return true;

    if (selectedPanel === "wristbands") {
      return ["wristband-left", "wristband-right"].includes(panelId);
    }

    // Arms
    if (panelType === "3") {
      if (
        selectedPanel === "arms-top" &&
        ["arm-top-left", "arm-top-right"].includes(panelId)
      )
        return true;

      if (
        selectedPanel === "arms-middle" &&
        ["arm-middle-left", "arm-middle-right"].includes(panelId)
      )
        return true;

      if (
        selectedPanel === "arms-bottom" &&
        ["arm-bottom-left", "arm-bottom-right"].includes(panelId)
      )
        return true;
    } else {
      if (
        selectedPanel === "arms-top" &&
        ["upper-left-arm", "upper-right-arm"].includes(panelId)
      )
        return true;

      if (
        selectedPanel === "arms-bottom" &&
        ["lower-left-arm", "lower-right-arm"].includes(panelId)
      )
        return true;
    }

    // Body (grouped selection)
    if (bodyPanelType === "3") {
      if (
        selectedPanel === "body-top" &&
        ["body-left-upper", "body-right-upper"].includes(panelId)
      )
        return true;

      if (
        selectedPanel === "body-middle" &&
        ["body-left-middle", "body-right-middle"].includes(panelId)
      )
        return true;

      if (
        selectedPanel === "body-bottom" &&
        ["body-left-bottom", "body-right-bottom"].includes(panelId)
      )
        return true;
    } else {
      if (
        selectedPanel === "body-top" &&
        ["body-left-top", "body-right-top"].includes(panelId)
      )
        return true;

      if (
        selectedPanel === "body-bottom" &&
        ["body-left-lower", "body-right-lower"].includes(panelId)
      )
        return true;
    }

    // mirror logic for 3-panel body
    const mirroredPanelMap = {
      "body-left-upper": "body-right-upper",
      "body-right-upper": "body-left-upper",
      "body-left-middle": "body-right-middle",
      "body-right-middle": "body-left-middle",
      "body-left-bottom": "body-right-bottom",
      "body-right-bottom": "body-left-bottom",
    };

    if (bodyPanelType === "3" && mirroredPanelMap[selectedPanel] === panelId) {
      return true;
    }

    return false;
  };
  //   const [hoveredPanel, setHoveredPanel] = React.useState(null);

  const getFill = (panelId) => {
    const mirrored = mirrorSides && mirrorMap[hoveredPanel] === panelId;

    if (hoveredPanel === panelId || mirrored) {
      return "var(--green)";
    }

    if (isSelected(panelId) && !panelFills[panelId]) {
      return "var(--purple)";
    }

    if (panelFills[panelId]) {
      return `url(#pattern-${panelId})`;
    }

    return "#fff";
  };

  const renderSelectedText = (x, y, panelId) => {
    const isHovered = hoveredPanel === panelId;
    const isSwatchApplied = !!panelFills[panelId];
    const isPurple = isSelected(panelId) && !isHovered && !isSwatchApplied;

    return (
      isPurple && (
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
    <svg
      viewBox="0 0 461.78 284.15"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ maxWidth: "100%", height: "100%", display: "block" }}
    >
      <defs>
        {panelIds.map((panel) => {
          const image = panelFills[panel];
          return (
            <pattern
              key={panel}
              id={`pattern-${panel}`}
              patternUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              {image && (
                <image
                  href={image}
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

      {/* Static Panels */}
      <g
        id="collar"
        onClick={() => onPanelClick("collar")}
        style={panelStyle}
        onMouseEnter={() => setHoveredPanel("collar")}
        onMouseLeave={() => setHoveredPanel(null)}
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

      {bodyPanelType === "2" && (
        <>
          {/* Body Left Top */}
          <g
            id="body-left-top"
            onClick={() => onPanelClick("body-left-top")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-left-top")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M231.86,55.17s-31.73,1.57-50.05-12.91c0,0-31.17,5.96-39.25,9.12v101.34h89.31V55.17Z"
              fill={getFill("body-left-top")}
              stroke="#221f20"
            />
            {renderSelectedText(180, 100, "body-left-top")}
          </g>

          {/* Body Right Top */}
          <g
            id="body-right-top"
            onClick={() => onPanelClick("body-right-top")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-right-top")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M231.31,55.17s32.84,1.57,49.58-12.91c0,0,30.72,5.96,38.72,9.12l.15,101.34h-88.45V55.17Z"
              fill={getFill("body-right-top")}
              stroke="#221f20"
            />
            {renderSelectedText(285, 100, "body-right-top")}
          </g>

          {/* Body Left Lower */}
          <g
            id="body-left-lower"
            onClick={() => onPanelClick("body-left-lower")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-left-lower")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M231.55,152.72h-88.99s-.79,59.62,4.67,106.49h84.31v-106.49Z"
              fill={getFill("body-left-lower")}
              stroke="#221f20"
            />
            {renderSelectedText(180, 230, "body-left-lower")}
          </g>

          {/* Body Right Lower */}
          <g
            id="body-right-lower"
            onClick={() => onPanelClick("body-right-lower")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-right-lower")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M231.55,152.72h88.17s.79,59.62-4.63,106.49h-83.54v-106.49Z"
              fill={getFill("body-right-lower")}
              stroke="#221f20"
            />
            {renderSelectedText(285, 230, "body-right-lower")}
          </g>
        </>
      )}

      {bodyPanelType === "3" && (
        <>
          {/* Body Left Upper */}
          <g
            id="body-left-upper"
            onClick={() => onPanelClick("body-left-upper")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-left-upper")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M231.26,55.17s-30.6,2.77-49.58-12.91c0,0-24.17,4.84-38.88,9.32l.68,83.95h87.78s0-80.36,0-80.36Z"
              fill={getFill("body-left-upper")}
              stroke="#231f20"
              strokeMiterlimit="10"
            />
            {renderSelectedText(180, 100, "body-left-upper")}
          </g>

          {/* Body Right Upper */}
          <g
            id="body-right-upper"
            onClick={() => onPanelClick("body-right-upper")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-right-upper")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M231.31,55.17s30.6,2.77,49.58-12.91c0,0,24.17,4.84,38.88,9.32l-.68,83.95h-87.78V55.17Z"
              fill={getFill("body-right-upper")}
              stroke="#221f20"
              strokeMiterlimit="10"
            />
            {renderSelectedText(285, 100, "body-right-upper")}
          </g>

          {/* Body Left Middle */}
          <g
            id="body-left-middle"
            onClick={() => onPanelClick("body-left-middle")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-left-middle")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M142.98,135.53s-.12,40.32.35,55.12h87.52s.6-55.12.6-55.12h-88.47Z"
              fill={getFill("body-left-middle")}
              stroke="#231f20"
              strokeMiterlimit="10"
            />
            {renderSelectedText(180, 170, "body-left-middle")}
          </g>

          {/* Body Right Middle */}
          <g
            id="body-right-middle"
            onClick={() => onPanelClick("body-right-middle")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-right-middle")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M319.73,135.53s.12,40.32-.35,55.12h-87.52l-.6-55.12h88.47Z"
              fill={getFill("body-right-middle")}
              stroke="#231f20"
              strokeMiterlimit="10"
            />
            {renderSelectedText(285, 170, "body-right-middle")}
          </g>

          {/* Body Left Bottom */}
          <g
            id="body-left-bottom"
            onClick={() => onPanelClick("body-left-bottom")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-left-bottom")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M231.17,190.65l-.1,68.55-82.33.1s-5.13-26.13-5.51-68.66h87.93Z"
              fill={getFill("body-left-bottom")}
              stroke="#231f20"
              strokeMiterlimit="10"
            />
            {renderSelectedText(180, 240, "body-left-bottom")}
          </g>

          {/* Body Right Bottom */}
          <g
            id="body-right-bottom"
            onClick={() => onPanelClick("body-right-bottom")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("body-right-bottom")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M231.45,190.65l.1,68.55,82.33.1s5.13-26.13,5.51-68.66h-87.93Z"
              fill={getFill("body-right-bottom")}
              stroke="#231f20"
              strokeMiterlimit="10"
            />
            {renderSelectedText(285, 240, "body-right-bottom")}
          </g>
        </>
      )}
      <g
        id="waistband"
        onClick={() => onPanelClick("waistband")}
        style={panelStyle}
        onMouseEnter={() => setHoveredPanel("waistband")}
        onMouseLeave={() => setHoveredPanel(null)}
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
        style={panelStyle}
        onMouseEnter={() => setHoveredPanel("wristband-right")}
        onMouseLeave={() => setHoveredPanel(null)}
      >
        <rect
          x="442.21"
          y="100.69"
          width="19.07"
          height="50.37"
          fill={getFill("wristband-right")}
          stroke="#221f20"
          stroke-miterlimit="10"
        />
      </g>
      <g
        id="wristband-left"
        onClick={() => onPanelClick("wristband-left")}
        style={panelStyle}
        onMouseEnter={() => setHoveredPanel("wristband-left")}
        onMouseLeave={() => setHoveredPanel(null)}
      >
        <rect
          x=".5"
          y="100.7"
          width="19.07"
          height="50.37"
          fill={getFill("wristband-left")}
          stroke="#221f20"
          stroke-miterlimit="10"
        />
      </g>
      {/* Dynamic arms */}
      {panelType === "2" ? (
        <>
          <g
            id="upper-left-arm"
            onClick={() => onPanelClick("upper-left-arm")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("upper-left-arm")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M142.55,112.96H19.84v-13.73s20.73-37.59,122.71-47.65v61.4-.02Z"
              fill={getFill("upper-left-arm")}
              stroke="#221f20"
            />
            {renderSelectedText(80, 90, "upper-left-arm")}
          </g>
          <g
            id="lower-left-arm"
            onClick={() => onPanelClick("lower-left-arm")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("lower-left-arm")}
            onMouseLeave={() => setHoveredPanel(null)}
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
            id="upper-right-arm"
            onClick={() => onPanelClick("upper-right-arm")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("upper-right-arm")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M319.76,112.96h122.71v-13.73s-20.73-37.59-122.71-47.65v61.4-.02Z"
              fill={getFill("upper-right-arm")}
              stroke="#221f20"
            />
            {renderSelectedText(380, 90, "upper-right-arm")}
          </g>
          <g
            id="lower-right-arm"
            onClick={() => onPanelClick("lower-right-arm")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("lower-right-arm")}
            onMouseLeave={() => setHoveredPanel(null)}
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
        </>
      ) : (
        <>
          <g
            id="arm-top-left"
            onClick={() => onPanelClick("arm-top-left")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("arm-top-left")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M142.69,51.58v100.33h-39.58V57.53s19.47-4.99,39.58-5.95Z"
              fill={getFill("arm-top-left")}
              stroke="#221f20"
            />
            {renderSelectedText(123, 80, "arm-top-left")}
          </g>
          <g
            id="arm-middle-left"
            onClick={() => onPanelClick("arm-middle-left")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("arm-middle-left")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M103.1,57.53v94.38h-41.93v-81.73s21.14-8.98,41.93-12.64Z"
              fill={getFill("arm-middle-left")}
              stroke="#221f20"
            />
            {renderSelectedText(80, 100, "arm-middle-left")}
          </g>
          <g
            id="arm-bottom-left"
            onClick={() => onPanelClick("arm-bottom-left")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("arm-bottom-left")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M61.17,70.17v81.73H19.98v-52.67s7.75-14.45,41.19-29.06Z"
              fill={getFill("arm-bottom-left")}
              stroke="#221f20"
            />
            {renderSelectedText(40, 110, "arm-bottom-left")}
          </g>
          <g
            id="arm-top-right"
            onClick={() => onPanelClick("arm-top-right")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("arm-top-right")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M319.76,51.58v100.33s39.58,0,39.58,0V57.53s-19.47-4.99-39.58-5.95Z"
              fill={getFill("arm-top-right")}
              stroke="#221f20"
            />
            {renderSelectedText(339, 80, "arm-top-right")}
          </g>
          <g
            id="arm-middle-right"
            onClick={() => onPanelClick("arm-middle-right")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("arm-middle-right")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M359.34,57.53v94.38s41.93,0,41.93,0v-81.73s-21.14-8.98-41.93-12.64Z"
              fill={getFill("arm-middle-right")}
              stroke="#221f20"
            />
            {renderSelectedText(383, 100, "arm-middle-right")}
          </g>
          <g
            id="arm-bottom-right"
            onClick={() => onPanelClick("arm-bottom-right")}
            style={panelStyle}
            onMouseEnter={() => setHoveredPanel("arm-bottom-right")}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <path
              d="M401.28,70.17v81.73s41.19,0,41.19,0v-52.67s-7.75-14.45-41.19-29.06Z"
              fill={getFill("arm-bottom-right")}
              stroke="#221f20"
            />
            {renderSelectedText(421, 110, "arm-bottom-right")}
          </g>
        </>
      )}
    </svg>
  );
};

export default JacketSVG;
