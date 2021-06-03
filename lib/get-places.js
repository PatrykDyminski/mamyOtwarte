import db from '@/lib/db';

<<<<<<< HEAD
export default async function getPlaces(query, fil, all) {
  const db = getDB();
=======
export default async function getPlaces(query, fil) {
>>>>>>> 5689f0f995659eced58a07e0edd5e2911a080718
  var data = db.collection('places');
  var places = [];

  if (all !== undefined) {  }
  else {
    data = filter(data, 'verified', true);
  }

  if (fil == true) {
    var offset;
    var limit;
    if (query.offset !== undefined) {
      offset = parseInt(query.offset);
    }
    if (query.limit !== undefined) {
      limit = parseInt(query.limit);
    }
    const type = query.type;
    const name = query.name;
    const street = query.street;
    const city = query.city;
    const slug = query.slug;
    
    if (slug !== undefined) {
      data = filter(data, 'slug', slug);
    }
    if (city !== undefined) {
      data = filter(data, 'city', city);
    }
    if (type !== undefined) {
      data = filter(data, 'type', type);
    }
    if (name !== undefined) {
      data = filter(data, 'name', name);
    }
    if (street !== undefined) {
      data = filter(data, 'street', street);
    }
    if (limit !== undefined) {
      data = data.limit(limit);
    }
  }

  await data.get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      places.push(doc.data());
    })
  });
  return places;
}

function filter(data, attribute, value) {
  return data.where(attribute, "==", value);
}