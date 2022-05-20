import serviceUtil from "../../index";

const mentorGetBatch = () => {
  return serviceUtil
    .get("")
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const submitMentorBatch = (payload) => {
  return serviceUtil
    .post("", payload)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

const mentorDelBatch = (payload) => {
  return serviceUtil
    .deleteAll(`lms/v1/admin/batch/${payload}`)
    .then((res) => {
      const data = res && res.data;
      return { data };
    })
    .catch((err) => {
      const errRes = err && err.response.data;
      return { errRes };
    });
};

export { submitMentorBatch, mentorGetBatch, mentorDelBatch };
