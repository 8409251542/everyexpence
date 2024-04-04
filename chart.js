
const ctx = document.getElementById('myChart');

 var chart= new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Earnning','Spending','Remaining'],
      datasets: [{
        label: '',
        data: [eraning,spendinng,remaining],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
      }
    }
});
function updateChart(){
    chart.data.datasets[0].data=[eraning,spendinng,remaining];
    chart.update();
}