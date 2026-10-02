const express = require("express");
const dotenv = require("dotenv");
const {sequelize} = require("./models")
const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cart_itemRoutes = require("./routes/cart_itemRoutes");
const countryRoutes = require("./routes/countryRoutes");
const customerRoutes = require("./routes/customerRoutes");
const customer_addressRoutes = require("./routes/customer_addressRoutes");
const customer_cardRoutes = require("./routes/customer_cardRoutes");
const delivery_methodRoutes = require("./routes/delivery_methodRoutes");
const discountRoutes = require("./routes/discountRoutes");
const districtRoutes = require("./routes/districtRoutes");
const eventRoutes = require("./routes/eventRoutes");
const event_typeRoutes = require("./routes/event_typeRoutes");
const flatRoutes = require("./routes/flatRoutes");
const genderRoutes = require("./routes/genderRoutes");
const human_categoryRoutes = require("./routes/human_categoryRoutes");
const langRoutes = require("./routes/langRoutes");
const payment_methodRoutes = require("./routes/payment_methodRoutes");
const regionRoutes = require("./routes/regionRoutes");
const seatRoutes = require("./routes/seatRoutes");
const seat_typeRoutes = require("./routes/seat_typeRoutes");
const sectorRoutes = require("./routes/sectorRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const ticket_statusRoutes = require("./routes/ticket_statusRoutes");
const ticket_typeRoutes = require("./routes/ticket_typeRoutes");
const typesRoutes = require("./routes/typesRoutes");
const venueRoutes = require("./routes/venueRoutes");
const venue_photoRoutes = require("./routes/venue_photoRoutes");
const venue_typesRoutes = require("./routes/venue_typesRoutes");
const userRoutes = require("./routes/userRoutes");
const group6Routes = require("./routes/group6Routes");
const setupSwagger = require("./swagger/swagger");
const cors = require("cors");
dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin:"*",
    })
)

app.use("/api", adminRoutes);
app.use("/api", bookingRoutes);
app.use("/api", cartRoutes);
app.use("/api", cart_itemRoutes);
app.use("/api", countryRoutes);
app.use("/api", customerRoutes);
app.use("/api", customer_addressRoutes);
app.use("/api", customer_cardRoutes);
app.use("/api", delivery_methodRoutes);
app.use("/api", discountRoutes);
app.use("/api", districtRoutes);
app.use("/api", eventRoutes);
app.use("/api", event_typeRoutes);
app.use("/api", flatRoutes);
app.use("/api", genderRoutes);
app.use("/api", human_categoryRoutes);
app.use("/api", langRoutes);
app.use("/api", payment_methodRoutes);
app.use("/api", regionRoutes);
app.use("/api", seatRoutes);
app.use("/api", seat_typeRoutes);
app.use("/api", sectorRoutes);
app.use("/api", ticketRoutes);
app.use("/api", ticket_statusRoutes);
app.use("/api", ticket_typeRoutes);
app.use("/api", typesRoutes);
app.use("/api", venueRoutes);
app.use("/api", venue_photoRoutes);
app.use("/api", venue_typesRoutes);
app.use("/api", userRoutes);
app.use("/api", group6Routes);


setupSwagger(app)

const PORT = process.env.PORT || 4444

sequelize.sync().then(() =>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
});
