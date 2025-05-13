export default class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.city = data.address.city;
    this.street = data.address.street;
    this.suite = data.address.suite;
    this.company = data.company.name;
    this.zip = data.address.zipcode;
    this.geo = {
        'lat': data.address.geo.lat,
        'lng': data.address.geo.lng
    }
    

  }

  matches(filter) {
    const f = filter.toLowerCase();
    return (
      this.name.toLowerCase().includes(f) ||
      this.username.toLowerCase().includes(f) ||
      this.email.toLowerCase().includes(f) ||
      this.city.toLowerCase().includes(f) ||
      this.company.toLowerCase().includes(f) ||
      this.street.toLowerCase().includes(f) ||
      this.suite.toLowerCase().includes(f) || 
      this.zip.toLowerCase().includes(f) 
    );
  }
}