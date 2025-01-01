import { create } from "zustand";
import { axiosInstance } from "../libs/axios.js";
import toast from "react-hot-toast";

export const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

export const apiStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isPropertyUploading: false,
  isImgUpdating: false,
  isCheckingAuth: true,
  otpVerified:false,
  propertyLoading:false,
  totalProperties: null,
  modalOpen:false,
  totalenq: null,
  properties: [],
  userData:null,
  enquireLoading: false,
  enquireStatus: false,
  isError:false,
  initialFormState: {
      id: '',
      title: '',
      category: '',
      location: '',
      img: '',
      price: '',
      price_title: '',
      price_range: '',
      bed: '',
      bath: '',
      parking: '',
      area: '',
      description: '',
      address: '',
      city: '',
      postal_code: '',
      state: "Uttar Pradesh"
    },
  imgFormData : {
    id:'',
    img: ''
  },

  checkAuth: async () => {
    try {
      console.log('checkauth has been started...');
      // const res = await axiosInstance.get("/auth-check");
      // console.log(res.data);
      // set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      let res = await axiosInstance.post("/login", data);
      toast.success("Logged in successfully");
      console.log(res.data);
      set({ userData: res.data.user });
      set({ authUser: res.data.loggedIn });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  getProperty: async (id) => {
    console.log("id:", id);
    set({propertyLoading:true})
    try {
      let res = await axiosInstance.get(`/get-property/${id}`, {
        timeout: 20*1000,
      });
      if(res.status===400 || res.status===500){
        throw res.data;
      }
      console.log(res.data[0]);
      return res.data[0];
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
      set({ isError: true });
      throw error;
    } finally {
      set({ propertyLoading: false });
    }
  },

  getProperties: async () => {
    set({propertyLoading:true})
    try{
      const res = await axiosInstance.get("/properties");
      // setPropertiesDetails(res.data);
      set({ properties: res.data });
      // console.log(res.data);
      // setPropertyData(res.data);
    } catch (error) {
      console.log(BASE_URL);
      console.log(error.response);
      set({ isError: true });
      // toast.error("Error in getting Properties.");
      throw error;
    } finally{ 
      set({propertyLoading:false})
    }
  },

  addPropertyHandler: async (data) => {
    set({ isPropertyUploading: true });
    try {
      const res = await axiosInstance.post("/add-property", data, 
        {
          headers: {"Content-Type" :  "multipart/form-data"},
        }
      );
      toast.success("Property Added successfully");
      console.log(res);
      // set({ authUser: res.data });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      set({ isPropertyUploading: false });
    }
  },

  getPropertyForUpdate: async (id) => {
    set({propertyLoading:true})
    try {
      let res = await axiosInstance.get(`/get-property/${id}`);
      res = res.data[0];
      console.log(res);
      set({ initialFormState: {
        id: id,
        title: res.title,
        category: res.category,
        location: res.location,
        img: res.img,
        price: res.price,
        price_title: res.price_title,
        price_range: res.price_range,
        bed: res.bed,
        bath: res.bath,
        parking: res.parking,
        area: res.area,
        description: res.description,
        address: res.address,
        city: res.city,
        postal_code: res.postal_code,
        state: "Uttar Pradesh"
      }});
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      set({ propertyLoading: false });
    }
  },

  updateImg: async (data) => {
    set({ isImgUpdating: true });
    try {
      // console.log(data);
      const res = await axiosInstance.post("/update-img", data, 
        {
          headers: {"Content-Type" :  "multipart/form-data"},
        }
      );
      toast.success(res.data.message);
      set({ initialFormState: {img: res.data.img} });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      set({ isImgUpdating: false });
    }
  },

  updatePropertyDetails: async (data) => {
    set({ isPropertyUploading: true });
    try {
      const res = await axiosInstance.post("/update-details", data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      set({ isPropertyUploading: false });
    }
  },

  updateProfileDetails: async (data) => {
    set({ isPropertyUploading: true });
    try {
      const res = await axiosInstance.post("/update-profile", data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      set({ isPropertyUploading: false });
    }
  },

  latestProperties: async () => {
    set({propertyLoading:true})
    try{
      const res = await axiosInstance.get("/latest-property");
      set({ properties: res.data.properties });
      set({ totalProperties: res.data.noOfProperties[0].noOfProperties });
      set({ totalenq: res.data.noOfEnq[0].noOfEnq });
    }catch(error){
      console.log("Error in getting properties details.");
      toast.error(error.response.data.message);
    } finally {
      set({propertyLoading:false})
    }
  },

  removeProperty: async (id) => {
    try{
      const res = await axiosInstance.get(`/remove-property/${id}`);
      toast.success(res.data.message);
      console.log(res.data);
    }catch(error){
      console.log("Error in getting properties details.");
      toast.error(error.response.data.message);
    }
  },

  
  changePassword: async (data) => {
    set({ isPropertyUploading: true });
    try {
      const res = await axiosInstance.post("/change-password", data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    } finally {
      set({ isPropertyUploading: false });
    }
  },

  sendOtp: async () => {
    try{
      const res = await axiosInstance.get(`/send-otp`);
      toast.success(res.data.message);
      // console.log(res.data);
    }catch(error){
      console.log("Error in getting properties details.");
      toast.error(error.response.data.message);
    }
  },

  verifyOtp: async (body) => {
    try{
      const res = await axiosInstance.post(`/verify-otp`, body);
      toast.success(res.data.message);
      // console.log(res.data);
    }catch(error){
      console.log("Error in getting properties details.");
      toast.error(error.response.data.message);
    }
  },

  createNewPass: async (body) => {
    try{
      const res = await axiosInstance.post(`/create-new-password`, body);
      toast.success(res.data.message);
    }catch(error){
      console.log("Error in getting properties details.");
      toast.error(error.response.data.message);
    }
  },

  setModalOpen: (val) => {
    console.log('i ama set modal open')
    set({modalOpen: val});
  },

  sendEnquire: async (body) => {
    set({enquireLoading: true})
    try{
      const res = await axiosInstance.post(`/send-enquire`, body);
      toast.success(res.data.message);
      set({enquireStatus: true});
      set({enquireLoading: false});
    }catch(error){
      console.log("Error in sending Enquiry");
      toast.error(error.response.data.message);
    } finally{
      setTimeout(() => {
        set({enquireStatus: false});
      }, 3000)
    }
  },
  

}));
