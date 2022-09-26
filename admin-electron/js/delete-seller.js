const deleteUrl = "http://localhost/SEF/e-commerce-project/ecommerce-server/admin-api/delete_seller.php";

// function to fetch delete seller API
const fetchdeleteSeller = (url, data) => {
  console.log('fetch', data);
  const resp =  axios.post(url, data);

return resp;

};

const deleteSeller = (seller_id) => {
  const data={
    'token': token,
    'user_id': seller_id
  }
const deleteResponse = fetchdeleteSeller(deleteUrl, data).then( response => {
  getSellers();
});
};
