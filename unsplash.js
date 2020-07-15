import axios from 'axios'

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3er7QKRTq1DHFDZJveMb-QTAXd1P_Rr87iLnPkbAKV4",
  },
})