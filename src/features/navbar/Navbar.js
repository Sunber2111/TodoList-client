import React, { Fragment, useState } from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../app/images/logo.png";
const Navbar = () => {
  const [state, setstate] = useState({ activeItem: "home" });

  const handleItemClick = (e, { name }) => setstate({ activeItem: name });

  return (
    <Fragment>
      <Menu pointing secondary>
        <Menu.Item style={{ margin: "0", paddingTop: "0" }}>
          <Image src={logo} size="mini" />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={state.activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/tasks"
          name="Tasks"
          active={state.activeItem === "Tasks"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/tasks"
          name="Charts"
          active={state.activeItem === "Charts"}
          onClick={handleItemClick}
        />
        <Menu.Item>
          <Button as={Link} className="btn-create-nav" content="Create Task" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button content="Login" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Fragment>
  );
};

export default Navbar;
