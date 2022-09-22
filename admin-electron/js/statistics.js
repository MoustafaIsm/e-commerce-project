const canvas = document.getElementById('top-sellers').getContext('2d');
const canva = document.getElementById('top-clients');
const graph = document.getElementById('insights');
const labels = ['Samsung', 'Apple', 'Huawei', 'Oppo', 'Techno'];
const ddata = [19, 28, 20, 16, 50];
const label = 'Number of Items';
const title = 'Top Sellers';
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
        y: {
            beginAtZero: true
        }
      }
    }
  });
};

displayChart(canvas, labels , ddata, label, title, 'bar');
displayChart(canva, labels, ddata , label ,title, 'bar');
displayChart(graph, ['Samsung', 'Apple', 'Huawei'],[19, 28, 50], '', 'Insights', 'horizontalBar');
