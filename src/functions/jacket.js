import React from "react";

const panelIds = [
  "collar",
  "left-arm",
  "right-arm",
  "body-left",
  "body-right",
  "waistband",
];

const JacketSVG = ({ onPanelClick, panelFills, selectedPanel = null }) => {
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
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
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                />
              )}
            </pattern>
          );
        })}
      </defs>

      {panelIds.map((panelId) => {
        const isSelected =
          selectedPanel === panelId ||
          (selectedPanel === "arms" &&
            (panelId === "left-arm" || panelId === "right-arm")) ||
          (selectedPanel === "sides" &&
            (panelId === "body-left" || panelId === "body-right"));
        const hasImg = !!panelFills[panelId];
        const fill =
          isSelected && !hasImg
            ? "var(--purple)"
            : hasImg
            ? `url(#pattern-${panelId})`
            : "#ccc";

        const sharedProps = {
          style: { fill },
          stroke: "#000",
          onClick: () => onPanelClick(panelId),
          className: "clickable-panel",
        };

        const renderText = (x, y) =>
          isSelected && (
            <text
              x={x}
              y={y}
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fill="white"
              pointerEvents="none"
            >
              selected
            </text>
          );

        switch (panelId) {
          case "collar":
            return (
              <g key={panelId}>
                <path
                  id="collar"
                  d="M150,20 Q200,10 250,20 L250,40 Q200,50 150,40 Z"
                  {...sharedProps}
                />
                {renderText(200, 35)}
              </g>
            );
          case "left-arm":
            return (
              <g key={panelId}>
                <path
                  id="left-arm"
                  d="M50,70 Q80,50 150,60 L150,110 Q80,100 50,90 Z"
                  {...sharedProps}
                />
                {renderText(90, 85)}
              </g>
            );
          case "right-arm":
            return (
              <g key={panelId}>
                <path
                  id="right-arm"
                  d="M250,60 Q320,50 350,70 L350,90 Q320,100 250,110 Z"
                  {...sharedProps}
                />
                {renderText(300, 85)}
              </g>
            );
          case "body-left":
            return (
              <g key={panelId}>
                <path
                  id="body-left"
                  d="M150,60 L150,240 L200,240 L200,60 Z"
                  {...sharedProps}
                />
                {renderText(175, 150)}
              </g>
            );
          case "body-right":
            return (
              <g key={panelId}>
                <path
                  id="body-right"
                  d="M200,60 L200,240 L250,240 L250,60 Z"
                  {...sharedProps}
                />
                {renderText(225, 150)}
              </g>
            );
          case "waistband":
            return (
              <g key={panelId}>
                <rect
                  id="waistband"
                  x="150"
                  y="240"
                  width="100"
                  height="20"
                  {...sharedProps}
                />
                {renderText(200, 255)}
              </g>
            );
          default:
            return null;
        }
      })}
    </svg>
  );
};

export default JacketSVG;
