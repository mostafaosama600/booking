const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://booking-server-ng9k.onrender.com/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("/categories?populate=*");
const getDoctorList = () => axiosClient.get("/doctors?populate=*");
const getDoctorByCategory = (category) =>
  axiosClient.get(
    "/doctors?filters[categories][name][$in]=" + category + "&populate=*"
  );
const getDoctorById = (id) => axiosClient.get("/doctors/" + id + "?populate=*");
const bookAppointment = (data) => axiosClient.post("/appointments", data);
const getUserBookingList = (userEmail) =>
  axiosClient.get(
    "/appointments?[filters][email][$eq]=" +
      userEmail +
      "&populate[doctors][populate][image][populate][0]=url&populate=*"
  );

const deleteBooking = (id) => axiosClient.delete("/appointments/" + id);
const contactus = (data) => axiosClient.post("/contacts", data);

export default {
  getCategory,
  getDoctorList,
  getDoctorByCategory,
  getDoctorById,
  bookAppointment,
  getUserBookingList,
  deleteBooking,
  contactus,
};
