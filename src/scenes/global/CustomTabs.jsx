import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { getFontFamily } from "../../utils";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `custom-tab-${index}`,
    "aria-controls": `custom-tabpanel-${index}`,
  };
}

interface CustomTabsProps {
  tabs: { label: string, content: React.ReactNode }[];
  defaultIndex?: number;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [value, setValue] = React.useState(defaultIndex);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: "4px", borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="custom tabs">
          {tabs.map((tab, index) => (
            <Tab
              sx={{
                borderBottom: value === index ? "4px solid #6B54C8" : "none",
                // transition: "border-bottom 0.3s ease",
                color: value === index ? "#6B54C8" : "",
                fontFamily: getFontFamily("montserrat"),
                fontSize: "16px",
              }}
              key={index}
              label={tab.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default CustomTabs;
