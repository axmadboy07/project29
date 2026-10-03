const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger");
const cors = require("cors");

const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cartItemRoutes = require("./routes/cart_itemRoutes");
const countryRoutes = require("./routes/countryRoutes");
const customerRoutes = require("./routes/customerRoutes");
const customerAddressRoutes = require("./routes/customer_addressRoutes");
const customerCardRoutes = require("./routes/customer_cardRoutes");
const deliveryMethodRoutes = require("./routes/delivery_methodRoutes");
const discountRoutes = require("./routes/discountRoutes");
const districtRoutes = require("./routes/districtRoutes");
const eventRoutes = require("./routes/eventRoutes");
const eventTypeRoutes = require("./routes/event_typeRoutes");
const flatRoutes = require("./routes/flatRoutes");
const genderRoutes = require("./routes/genderRoutes");
const humanCategoryRoutes = require("./routes/human_categoryRoutes");
const langRoutes = require("./routes/langRoutes");
const paymentMethodRoutes = require("./routes/payment_methodRoutes");
const regionRoutes = require("./routes/regionRoutes");
const seatRoutes = require("./routes/seatRoutes");
const seatTypeRoutes = require("./routes/seat_typeRoutes");
const sectorRoutes = require("./routes/sectorRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const ticketStatusRoutes = require("./routes/ticket_statusRoutes");
const ticketTypeRoutes = require("./routes/ticket_typeRoutes");
const typesRoutes = require("./routes/typesRoutes");
const venueRoutes = require("./routes/venueRoutes");
const venuePhotoRoutes = require("./routes/venue_photoRoutes");
const venueTypesRoutes = require("./routes/venue_typesRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", adminRoutes);
app.use("/api", bookingRoutes);
app.use("/api", cartRoutes);
app.use("/api", cartItemRoutes);
app.use("/api", countryRoutes);
app.use("/api", customerRoutes);
app.use("/api", customerAddressRoutes);
app.use("/api", customerCardRoutes);
app.use("/api", deliveryMethodRoutes);
app.use("/api", discountRoutes);
app.use("/api", districtRoutes);
app.use("/api", eventRoutes);
app.use("/api", eventTypeRoutes);
app.use("/api", flatRoutes);
app.use("/api", genderRoutes);
app.use("/api", humanCategoryRoutes);
app.use("/api", langRoutes);
app.use("/api", paymentMethodRoutes);
app.use("/api", regionRoutes);
app.use("/api", seatRoutes);
app.use("/api", seatTypeRoutes);
app.use("/api", sectorRoutes);
app.use("/api", ticketRoutes);
app.use("/api", ticketStatusRoutes);
app.use("/api", ticketTypeRoutes);
app.use("/api", typesRoutes);
app.use("/api", venueRoutes);
app.use("/api", venuePhotoRoutes);
app.use("/api", venueTypesRoutes);

setupSwagger(app);

const PORT = process.env.PORT || 4444;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
  });
});
