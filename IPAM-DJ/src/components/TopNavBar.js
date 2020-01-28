import React from "react";
import {Link} from "react-router-dom";

function TopNavBar(props) {
    const pages = {
        "/": "Home",
        "/device": "Device",
        "/VLAN": "VLAN",
        "/NAT": "NAT",
        "/location": "Location",
        "/rack": "Rack",
        "/subnet": "Subnet",
        "/name-server": "Nameserver",
    };

    let links = [];
    for (const page in pages) {
        let linkClassName;
        if (props.currentPage.path !== null && props.currentPage.path === page) {
            linkClassName = "topNavBarLink selected";
        } else {
            linkClassName = "topNavBarLink";
        }
        links.push(<Link key={page} to={page} className={linkClassName}><li>{pages[page]}</li></Link>);
    }

    return (
        <div className="topNavBar">
            <h1 className="title">IPAM-DJ</h1>
            <div>
                <ul className="links">
                    {links}
                </ul>
            </div>
        </div>
    );
}

export default TopNavBar