import axiosClient from './axiosClient';

const productApi = {
  getALL(params) {
    const url = '/javascript-store-products';

    return axiosClient.get(url, { params });
  },

  getById(id) {
    const url = `/javascript-store-products?id=${id}`;

    return axiosClient.get(url);
  },

  add(data) {
    const url = '/javascript-store-products';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/javascript-store-products/${data.id}`;
    return axiosClient.patch(url, data);
  },

  //   addFormData(data) {
  //     const url = `/with-thumbnail/posts`;

  //     return axiosClient.post(url, data, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //   },
};
