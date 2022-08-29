import api from "../api/Api";
import * as url from "../api/url";

export const Reviews = (data) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.REVIEW_URL, data)
      .then((res) => {
        if (res) {
          resolve(res);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//Appointment
export const Appointment = (data) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.APPLICATION_URL, data)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const GetAppointment = () => {
  return new Promise(async (resolve, reject) => {
    return api
      .get(url.APPLICATION_URL)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const Membership = (data) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.MEMBERSHIP_URL, data)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const CreateBlog = (data) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.CREATE_BLOG_URL, data)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const GetBlogDetail = () => {
  return new Promise(async (resolve, reject) => {
    return api
      .get(url.GET_BLOG_URL)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const AdminLogin = (data) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.LOGIN_URL, data)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};
