import Row from "./template/row";
import data from '../init/data.js';
import './main.css'

export default function Body() {
    return(
        <div className="listings">
            <Row title={"Locations from pune"} listings={data} className='first-row' />
            <Row title={"Locations from pune"} listings={data} />
            <Row title={"Locations from pune"} listings={data} />
            <Row title={"Locations from pune"} listings={data} />
            <Row title={"Locations from pune"} listings={data} />
            <Row title={"Locations from pune"} listings={data} />
        </div>
    );
}