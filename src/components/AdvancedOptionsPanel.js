import React from "react";
import {
  PanelWrapper,
  SectionTitle,
  ToggleRow,
  ToggleLabel,
  ToggleInput,
  ToggleSlider,
  TabButtons,
  TabButton,
  OptionCard,
  OptionText,
  ExtrasList,
  ExtraItem,
  AdvancedOptionsToggle,
} from "./AdvancedOptionsPanelStyle";

const AdvancedOptionsPanel = ({
  activeTab,
  setActiveTab,
  panelType,
  setPanelType,
  bodyPanelType,
  setBodyPanelType,
  mirrorSides,
  setMirrorSides,
  extras,
  setExtras,
}) => {
  const handleExtraToggle = (key) => {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <PanelWrapper>
      {/* <SectionTitle onClick={() => setIsOpen(!isOpen)}>
        ADVANCED OPTIONS {isOpen ? "▲" : "▼"}
      </SectionTitle> */}
      {isOpen && (
        <>
          <ToggleRow>
            <ToggleLabel>
              <ToggleInput
                type="checkbox"
                checked={mirrorSides}
                onChange={(e) => setMirrorSides(e.target.checked)}
              />
              <ToggleSlider $checked={mirrorSides} />
              {mirrorSides ? "mirror mode" : "individual panels"}
            </ToggleLabel>
          </ToggleRow>
          <TabButtons>
            {["arms", "body", "extras"].map((tab) => (
              <TabButton
                key={tab}
                $active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </TabButton>
            ))}
          </TabButtons>
          {activeTab === "arms" && (
            <>
              <OptionCard
                $selected={panelType === "2"}
                onClick={() => setPanelType("2")}
              >
                {/* <img src="/images/2panel.svg" alt="2 panel" /> */}
                <OptionText>
                  <strong>2 panel</strong>
                  <br />
                  choose two furs
                  {panelType === "2" && (
                    <span className="selected">selected</span>
                  )}
                </OptionText>
              </OptionCard>

              <OptionCard
                $selected={panelType === "3"}
                onClick={() => setPanelType("3")}
              >
                {/* <img src="/images/3panel.svg" alt="3 panel" /> */}
                <OptionText>
                  <strong>3 panel</strong>
                  <br />
                  choose three furs
                  <span className="price">+ £10</span>
                  {panelType === "3" && (
                    <span className="selected">selected</span>
                  )}
                </OptionText>
              </OptionCard>
            </>
          )}
          {activeTab === "body" && (
            <>
              <OptionCard
                $selected={bodyPanelType === "2"}
                onClick={() => setBodyPanelType("2")}
              >
                <OptionText>
                  <strong>2 panel</strong>
                  <br />
                  choose two furs
                  {bodyPanelType === "2" && (
                    <span className="selected">selected</span>
                  )}
                </OptionText>
              </OptionCard>

              <OptionCard
                $selected={bodyPanelType === "3"}
                onClick={() => setBodyPanelType("3")}
              >
                <OptionText>
                  <strong>3 panel</strong>
                  <br />
                  choose three furs
                  <span className="price">+ £10</span>
                  {bodyPanelType === "3" && (
                    <span className="selected">selected</span>
                  )}
                </OptionText>
              </OptionCard>
            </>
          )}
          {activeTab === "extras" && (
            <ExtrasList>
              {[
                { label: "hood", price: 30 },
                { label: "inside pocket", price: 8 },
                // { label: "knitted cuffs", price: 30 },
              ].map(({ label, price }) => (
                <ExtraItem key={label}>
                  <input
                    type="checkbox"
                    checked={extras[label]}
                    onChange={() => handleExtraToggle(label)}
                  />
                  {label} <span>+£{price}</span>
                </ExtraItem>
              ))}
            </ExtrasList>
          )}
        </>
      )}
    </PanelWrapper>
  );
};

export default AdvancedOptionsPanel;
