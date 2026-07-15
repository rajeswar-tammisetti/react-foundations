import Marker from "../src/marker.png"
export default function Entry({img,title,country,googleMapsLink,dates,text}) {
    console.log(img,title,country,googleMapsLink,dates,text);
    return (
        <article className="journal-entry">
            <div className="image-container">
                <img src={img.src} alt={img.alt} className="image" />
            </div>
            <div className="info">
                <img src={Marker} alt="map marker icon" className="marker" />
                <span className="country">{country}</span>
                <a href={googleMapsLink}>View on Google Maps</a>
                <h1 className="title">{title}</h1>
                <p className="trip-date">{dates}</p>
                <p className="entry-text">
                    {text}
                </p>
            </div>
        </article>
    )
}