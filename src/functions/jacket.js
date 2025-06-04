import React from "react";

const panelIds = [
  "collar",
  "left-arm",
  "right-arm",
  "body-left",
  "body-right",
  "waistband",
];

const JacketSVG = ({ onPanelClick, panelFills = {} }) => {
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
      <path
        id="collar"
        d="M150,20 Q200,10 250,20 L250,40 Q200,50 150,40 Z"
        fill="url(#pattern-collar)"
        stroke="#000"
        onClick={() => onPanelClick("collar")}
      />
      <path
        id="left-arm"
        d="M50,70 Q80,50 150,60 L150,110 Q80,100 50,90 Z"
        fill="url(#pattern-left-arm)"
        stroke="#000"
        onClick={() => onPanelClick("left-arm")}
      />
      <path
        id="right-arm"
        d="M250,60 Q320,50 350,70 L350,90 Q320,100 250,110 Z"
        fill="url(#pattern-right-arm)"
        stroke="#000"
        onClick={() => onPanelClick("right-arm")}
      />
      <path
        id="body-left"
        d="M150,60 L150,240 L200,240 L200,60 Z"
        fill="url(#pattern-body-left)"
        stroke="#000"
        onClick={() => onPanelClick("body-left")}
      />
      <path
        id="body-right"
        d="M200,60 L200,240 L250,240 L250,60 Z"
        fill="url(#pattern-body-right)"
        stroke="#000"
        onClick={() => onPanelClick("body-right")}
      />
      <rect
        id="waistband"
        x="150"
        y="240"
        width="100"
        height="20"
        fill="url(#pattern-waistband)"
        stroke="#000"
        onClick={() => onPanelClick("waistband")}
      />
    </svg>
  );
};

export default JacketSVG;
