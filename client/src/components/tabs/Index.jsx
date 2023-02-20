import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";
import TabPanel from "./components/Panel";

const NavTabs = ({ title, tabItems = [] }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <div className="w-100 p-3">
      <div className="d-flex align-items-center mb-2">
        <h5 className="fw-semibold">{title}</h5>
        <div
          className="mx-28"
          style={{
            height: "38px",
            width: "2px",
            background: "rgb(216, 216, 216)",
          }}
        ></div>
        <div className="d-flex align-items-center flex-wrap">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabItems.map((item, index) => (
              <Tab key={item.title} label={item.title} {...tabProps(index)} />
            ))}
          </Tabs>
        </div>
      </div>

      {tabItems.map((item, index) => (
        <TabPanel key={item.title} value={value} index={index}>
          {item.content}
        </TabPanel>
      ))}
    </div>
  );
};

NavTabs.propTypes = {
  title: PropTypes.string.isRequired,
  tabItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ),
};

export default NavTabs;
