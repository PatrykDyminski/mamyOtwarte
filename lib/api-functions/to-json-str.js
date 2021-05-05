export default function toJSONstr(place) {
    return ({
        "name": place.name, 
        "type": place.type, 
        "opis": place.opis,
        "telephone": place.telephone,
        "website": place.website,
        "city": place.city,
        "street": place.street,
        "streetnr": place.streetnr,
        "lat": place.lat,
        "lng": place.lng,
        "slug": place.slug
      });
  }