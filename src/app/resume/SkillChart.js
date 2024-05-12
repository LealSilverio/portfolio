import Chart from 'chart.js/auto';

const chartData = {
  labels: ['HTML', 'CSS', 'JavaScript', 'C#', 'Python'],
  datasets: [{
    label: 'Technical Skills',
    axis: 'y',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
    data: [100, 80, 90, 75, 70],
  }]
}

const options = {
  options: {indexAxis: 'y'},
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

export default function SkillChart() {
  new Chart({
  type: 'bar',
  data: chartData,
  options: options
  });
}