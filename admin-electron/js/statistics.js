const canva = document.getElementById('top-clients');
const canvas = document.getElementById('top-sellers');
const graph = document.getElementById('insights');
const periodneeded = document.getElementById('second-stats-filter');
const firstperiodneeded = document.getElementById('stats-filter');
const totalclienstURL= "http://localhost/SEF/e-commerce-project/ecommerce-server/admin-api/get-total-number-of-clients-api.php";
const totalproductsURL = "http://localhost/SEF/e-commerce-project/ecommerce-server/admin-api/get-total-number-of-products-api.php";
const totalSellersURL = "http://localhost/SEF/e-commerce-project/ecommerce-server/admin-api/get-total-number-of-sellers-api.php";
const bestSellerURL = "http://localhost/SEF/e-commerce-project/ecommerce-server/admin-api/get_best_sellers.php";
const bestClientsURL = "http://localhost/SEF/e-commerce-project/ecommerce-server/admin-api/get-best-clients-api.php";
let clients_count = 0;
let products_count = 0;
let sellers_count = 0;
let values= {};
const statsgraphs = document.querySelector('.stats-graphs');


const labels = ['Samsung', 'Apple', 'Huawei', 'Oppo', 'Techno'];
const ddata = [19, 28, 20, 16, 50];
const label = 'Number of products';
const title = 'Top Sellers';


// function to create a chart
const displayChart = (canvas, labels, data, label , title, index) => {

  const chart = new Chart(canvas, {
    type: index,
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor:['rgba(131, 103, 199, 1)',
                          'rgba(28, 152, 169, 1)',
                        'rgba(242, 191, 251, 1)',
                        'rgba(197, 31, 100, 1)',
                        'rgba(31, 197, 137, 1)'],
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      title: {
              display: true,
              text: title
          },
      scales: {
        x:{
          beginAtZero: false
        },
        y: {
            beginAtZero: false
        }
      }
    }
  });
};
displayChart(canvas, '' , '', label, "TOP SELLERS", 'bar');
displayChart(canva, '' , '', 'Number of items purchsed', "TOP CLIENTS", 'bar');
// function to fetch APIs
const fetchInsights = (url, data) => {
  const resp =  axios.post(url, data);

return resp;

};

// function to get best sellers
const getBestSellers = (data) => {
  const resp = fetchInsights(bestSellerURL, data).then((result) => {
    let sellers = [];
    let count = [];
    result.data.forEach((item, i) => {
      let name = item.first_name + " "+ item.last_name;
      let productscount = item.productscount;
      sellers.push(name);
      count.push(productscount);
    });
 values['sellers'] = sellers;
 values['p_count'] = count;
 displayChart(canvas, values.sellers , values.p_count, label, "TOP SELLERS", 'bar');

});
return values;


};


const getBestClients =(data) =>{
  const resp = fetchInsights(bestClientsURL, data).then((result) => {
    let clients = [];
    let count = [];
    result.data.forEach((item, i) => {
      let name = item.first_name + " "+ item.last_name;
      let itemscount = item.itemspurchased;
      clients.push(name);
      count.push(itemscount);
    });
 values['clients'] = clients;
 values['count'] = count;
 displayChart(canva, values.clients , values.count, 'Number of items purchsed', "TOP CLIENTS", 'bar');

});
return values;

};


// function to get total number of clients
const getTotalClients = (data) => {
const resp = fetchInsights(totalclienstURL, data).then((result) => {
   clients_count = result.data.clients_count;
   getTotalProducts(data, clients_count);

});


};

// function to destroy chart
const destroyChart =() => {
  chart.destroy();
};

// function to get total number of Products
const getTotalProducts = (data, clients_count) => {
    const resp = fetchInsights(totalproductsURL, data).then((result) => {
    products_count = result.data.products_count;
    getTotalSellers(data, products_count, clients_count);

});

};


// function to get total number of Sellers
const getTotalSellers = (data, products_count, clients_count) => {
    const resp = fetchInsights(totalSellersURL, data).then((result) => {
    sellers_count = result.data.sellers_count;
    displayChart(graph, ['Clients', 'Sellers', 'Products'],[clients_count, sellers_count, products_count], '', 'Insights', 'horizontalBar');



});

};
//displayChart(graph, ['Clients', 'Sellers', 'Products'],[0, 0, 0], '', 'Insights', 'horizontalBar');

//displayChart(canva, labels, ddata , label ,title, 'bar');
displayChart(graph, ['Clients', 'Sellers', 'Products'],'', '', 'Insights', 'horizontalBar');

// Event Listeners
periodneeded.addEventListener("change", () => {
  console.log('change');
  let period = periodneeded.options[periodneeded.selectedIndex].text;
  const data = {
    'token': token,
    'period' : period
  }
const clients = getTotalClients(data);

});

firstperiodneeded.addEventListener("change", () => {
  let timeperiod = firstperiodneeded.options[firstperiodneeded.selectedIndex].text;
  let newdata = {
    'token': token,
    'period' : timeperiod
  }
  // console.log(newdata['period']);
  let values = getBestSellers(newdata);
  let value = getBestClients(newdata);
  // console.log(values.p_count);

});
