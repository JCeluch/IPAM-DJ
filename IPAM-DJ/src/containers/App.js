import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./Home";

import DeviceList from "./device/DeviceList";
import DeviceAdd from "./device/DeviceAdd";
import DeviceEdit from "./device/DeviceEdit";
import DeviceDelete from "./device/DeviceDelete";

import Location from "./location/LocationList";
import LocationAdd from "./location/LocationAdd";
import LocationEdit from "./location/LocationEdit";
import LocationDelete from "./location/LocationDelete";

import VLANList from "./VLAN/VLANList";
import VLANAdd from "./VLAN/VLANAdd";
import VLANEdit from "./VLAN/VLANEdit";
import VLANDelete from "./VLAN/VLANDelete";

import NATList from "./NAT/NATList";
import NATAdd from "./NAT/NATAdd";
import NATEdit from "./NAT/NATEdit";
import NATDelete from "./NAT/NATDelete";

import RackList from "./rack/RackList";
import RackAdd from "./rack/RackAdd";
import RackEdit from "./rack/RackEdit";
import RackDelete from "./rack/RackDelete";

import SubnetList from "./subnet/SubnetList";
import SubnetAdd from "./subnet/SubnetAdd";
import SubnetDelete from "./subnet/SubnetDelete";
import SubnetEdit from "./subnet/SubnetEdit";

import NameServerList from "./nameserver/NameServerList";
import NameServerAdd from "./nameserver/NameServerAdd";
import NameServerEdit from "./nameserver/NameServerEdit";
import NameServerDelete from "./nameserver/NameServerDelete";

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB_fln91xB265ISN4xoOZ1U9ZngPZBOsSM",
    authDomain: "ipam-dj.firebaseapp.com",
    databaseURL: "https://ipam-dj.firebaseio.com",
    projectId: "ipam-dj",
    storageBucket: "ipam-dj.appspot.com",
    messagingSenderId: "960350779710",
    appId: "1:960350779710:web:52bb81b23470b9b16c146f",
    measurementId: "G-VWWR9EBQ2V"
};
firebase.initializeApp(config);

function App() {
    return (<div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Route exact path="/device" component={DeviceList}/>
                    <Route exact path="/create/device" component={DeviceAdd}/>
                    <Route exact path="/device/:id/edit" component={DeviceEdit}/>
                    <Route exact path="/device/:id/delete" component={DeviceDelete}/>

                    <Route exact path="/VLAN" component={VLANList}/>
                    <Route exact path="/create/VLAN" component={VLANAdd}/>
                    <Route exact path="/VLAN/:id/edit" component={VLANEdit}/>
                    <Route exact path="/VLAN/:id/delete" component={VLANDelete}/>

                    <Route exact path="/NAT" component={NATList}/>
                    <Route exact path="/create/NAT" component={NATAdd}/>
                    <Route exact path="/NAT/:id/edit" component={NATEdit}/>
                    <Route exact path="/NAT/:id/delete" component={NATDelete}/>

                    <Route exact path="/location" component={Location}/>
                    <Route exact path="/create/location" component={LocationAdd}/>
                    <Route exact path="/location/:id/edit" component={LocationEdit}/>
                    <Route exact path="/location/:id/delete" component={LocationDelete}/>

                    <Route exact path="/rack" component={RackList}/>
                    <Route exact path="/create/rack" component={RackAdd}/>
                    <Route exact path="/rack/:id/edit" component={RackEdit}/>
                    <Route exact path="/rack/:id/delete" component={RackDelete}/>

                    <Route exact path="/subnet" component={SubnetList}/>
                    <Route exact path="/create/subnet" component={SubnetAdd}/>
                    <Route exact path="/subnet/:id/edit" component={SubnetEdit}/>
                    <Route exact path="/subnet/:id/delete" component={SubnetDelete}/>

                    <Route exact path="/name-server" component={NameServerList}/>
                    <Route exact path="/name-server/:id/edit" component={NameServerEdit}/>
                    <Route exact path="/name-server/:id/delete" component={NameServerDelete}/>
                    <Route exact path="/create/name-server" component={NameServerAdd}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App