import info from "../client.json";

export default function Address() {
    return (<address>
        {info.client.name} <br/>
        {info.client.address.lineOne} <br/>
        {info.client.address.lineTwo !== "" ? info `${info.client.address.lineTwo} <br/>` : ""}
        {info.client.address.city}, {info.client.address.state} {info.client.address.zip} <br/>
    </address>)
}
