import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Blood Pressure',
    },
  },
};


function PatientItem(props) {
    let overpressure = [];
    let underpressure = [];
    let date = [];

  for (const i in props.allUserData) {
    overpressure.push(props.allUserData[i].overpressure);
    underpressure.push(props.allUserData[i].underpressure);
    date.push(props.allUserData[i].date);
  }

  const data = {
    labels: date,
    datasets: [
      {
        label: 'Overpressure',
        data: overpressure,
        fill: false,
        borderColor: 'rgb(53, 0, 235)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Underpressure',
        data: underpressure,
        fill: false,
        borderColor: 'rgb((0, 0, 0)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };


    return (
        <Line data={data} options={options} />
    );
}

export default PatientItem;
