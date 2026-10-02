const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./admin.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const Cart_item = require("./cart_item.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Customer_address = require("./customer_address.model")(sequelize, Sequelize);
const Customer_card = require("./customer_card.model")(sequelize, Sequelize);
const Delivery_method = require("./delivery_method.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const District = require("./district.model")(sequelize, Sequelize);
const Event = require("./event.model")(sequelize, Sequelize);
const Event_type = require("./event_type.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Human_category = require("./human_category.model")(sequelize, Sequelize);
const Lang = require("./lang.model")(sequelize, Sequelize);
const Payment_method = require("./payment_method.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Seat_type = require("./seat_type.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Ticket_status = require("./ticket_status.model")(sequelize, Sequelize);
const Ticket_type = require("./ticket_type.model")(sequelize, Sequelize);
const Types = require("./types.model")(sequelize, Sequelize);
const Venue = require("./venue.model")(sequelize, Sequelize);
const Venue_photo = require("./venue_photo.model")(sequelize, Sequelize);
const Venue_types = require("./venue_types.model")(sequelize, Sequelize);

// Associations
const models = {
  Admin,
  Booking,
  Cart,
  Cart_item,
  Country,
  Customer,
  Customer_address,
  Customer_card,
  Delivery_method,
  Discount,
  District,
  Event,
  Event_type,
  Flat,
  Gender,
  Human_category,
  Lang,
  Payment_method,
  Region,
  Seat,
  Seat_type,
  Sector,
  Ticket,
  Ticket_status,
  Ticket_type,
  Types,
  Venue,
  Venue_photo,
  Venue_types,
  admin: Admin,
  booking: Booking,
  cart: Cart,
  cart_item: Cart_item,
  country: Country,
  customer: Customer,
  customer_address: Customer_address,
  customer_card: Customer_card,
  delivery_method: Delivery_method,
  discount: Discount,
  district: District,
  event: Event,
  event_type: Event_type,
  flat: Flat,
  gender: Gender,
  human_category: Human_category,
  lang: Lang,
  payment_method: Payment_method,
  region: Region,
  seat: Seat,
  seat_type: Seat_type,
  sector: Sector,
  ticket: Ticket,
  ticket_status: Ticket_status,
  ticket_type: Ticket_type,
  types: Types,
  venue: Venue,
  venue_photo: Venue_photo,
  venue_types: Venue_types,
};

Admin.associate && Admin.associate(models);
Booking.associate && Booking.associate(models);
Cart.associate && Cart.associate(models);
Cart_item.associate && Cart_item.associate(models);
Customer.associate && Customer.associate(models);
Customer_address.associate && Customer_address.associate(models);
Customer_card.associate && Customer_card.associate(models);
Delivery_method.associate && Delivery_method.associate(models);
Discount.associate && Discount.associate(models);
District.associate && District.associate(models);
Event.associate && Event.associate(models);
Event_type.associate && Event_type.associate(models);
Flat.associate && Flat.associate(models);
Gender.associate && Gender.associate(models);
Human_category.associate && Human_category.associate(models);
Lang.associate && Lang.associate(models);
Payment_method.associate && Payment_method.associate(models);
Region.associate && Region.associate(models);
Seat.associate && Seat.associate(models);
Seat_type.associate && Seat_type.associate(models);
Sector.associate && Sector.associate(models);
Ticket.associate && Ticket.associate(models);
Ticket_status.associate && Ticket_status.associate(models);
Ticket_type.associate && Ticket_type.associate(models);
Types.associate && Types.associate(models);
Venue.associate && Venue.associate(models);
Venue_photo.associate && Venue_photo.associate(models);
Venue_types.associate && Venue_types.associate(models);

module.exports = {
  Admin,
  Booking,
  Cart,
  Cart_item,
  Country,
  Customer,
  Customer_address,
  Customer_card,
  Delivery_method,
  Discount,
  District,
  Event,
  Event_type,
  Flat,
  Gender,
  Human_category,
  Lang,
  Payment_method,
  Region,
  Seat,
  Seat_type,
  Sector,
  Ticket,
  Ticket_status,
  Ticket_type,
  Types,
  Venue,
  Venue_photo,
  Venue_types,
  sequelize,
};
