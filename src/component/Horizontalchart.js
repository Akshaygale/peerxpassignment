import {useState} from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 4,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Posts per month Chart',
      },
    },
  };

const Horizontalchart =() => {
    const [data, setData] = useState({
        labels:['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Post per Month',
            data:[0,0,0,0,0,0,0,12,2,0],
            borderColor: 'blue',
            backgroundColor: 'lightblue',
          },
        ],
      });
  
    return(
        <div className='chrt'>
            {
                console.log("data", data)
            }
            <Bar data={data} options={options}/>

         </div>)
}
export default Horizontalchart;


