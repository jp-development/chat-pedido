import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const Dashboard = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <div className="w-full grid grid-cols-12">
        <div className="flex-1 m-5 relative rounded-xl shadow-lg  col-span-4 p-5">
          <div className="bg-green-500 p-5 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={40}
            >
              <path d="M454.66,169.4A31.86,31.86,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.78,31.78,0,0,0,454.66,169.4ZM320,336H272v48a16,16,0,0,1-32,0V336H192a16,16,0,0,1,0-32h48V256a16,16,0,0,1,32,0v48h48a16,16,0,0,1,0,32Zm16-176H176V144a80,80,0,0,1,160,0Z" />
            </svg>
          </div>

          <div className="float-right top-0 right-0 m-3">
            <div className="text-right text-lg font-medium">
              Pedidos por gestionar
            </div>
            <div className="text-right text-5xl font-bold">25</div>
          </div>
        </div>
        <div className="flex-1 m-5 relative rounded-xl shadow-lg  col-span-4 p-5">
          <div className="bg-blue-500 p-5 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={40}
            >
              <path d="M336,256c-20.56,0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62,5.77-47.26,21.14-63.76S312,80,336,80c23.83,0,45.38,9.06,60.7,25.52,15.47,16.62,23,39.22,21.26,63.63h0c-1.67,23.11-10.9,44.77-26,61C376.44,246.82,356.57,256,336,256Zm66-88h0Z" />
              <path d="M467.83,432H204.18a27.71,27.71,0,0,1-22-10.67,30.22,30.22,0,0,1-5.26-25.79c8.42-33.81,29.28-61.85,60.32-81.08C264.79,297.4,299.86,288,336,288c36.85,0,71,9,98.71,26.05,31.11,19.13,52,47.33,60.38,81.55a30.27,30.27,0,0,1-5.32,25.78A27.68,27.68,0,0,1,467.83,432Z" />
              <path d="M147,260c-35.19,0-66.13-32.72-69-72.93C76.58,166.47,83,147.42,96,133.45,108.86,119.62,127,112,147,112s38,7.66,50.93,21.57c13.1,14.08,19.5,33.09,18,53.52C213.06,227.29,182.13,260,147,260Z" />
              <path d="M212.66,291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46,0-58.07,7.68-80.57,21.62C40.93,316,23.77,339.05,16.84,366.88a27.39,27.39,0,0,0,4.79,23.36A25.32,25.32,0,0,0,41.72,400h111a8,8,0,0,0,7.87-6.57c.11-.63.25-1.26.41-1.88,8.48-34.06,28.35-62.84,57.71-83.82a8,8,0,0,0-.63-13.39C216.51,293.42,214.71,292.45,212.66,291.45Z" />{" "}
            </svg>
          </div>

          <div className="float-right top-0 right-0 m-3">
            <div className="text-right text-lg font-medium">
              Asesoras registradas
            </div>
            <div className="text-right text-5xl font-bold">25</div>
          </div>
        </div>
        <div className="flex-1 m-5 relative rounded-xl shadow-lg col-span-4 p-5">
          <div className="bg-red-500 p-5 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white fill-current shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={40}
            >
              <path d="M398,81.84A227.4,227.4,0,0,0,255.82,32C194.9,32,138,55.47,95.46,98.09,54.35,139.33,31.82,193.78,32,251.37A215.66,215.66,0,0,0,67.65,370.13l.19.27c.28.41.57.82.86,1.22s.65.92.73,1.05l.22.4c1.13,2,2,4.44,1.23,6.9L52.46,446.63a29.13,29.13,0,0,0-1.2,7.63A25.69,25.69,0,0,0,76.83,480a29.44,29.44,0,0,0,10.45-2.29l67.49-24.36.85-.33a14.75,14.75,0,0,1,5.8-1.15,15.12,15.12,0,0,1,5.37,1c1.62.63,16.33,6.26,31.85,10.6,12.9,3.6,39.74,9,60.77,9,59.65,0,115.35-23.1,156.83-65.06C457.36,365.77,480,310.42,480,251.49a213.5,213.5,0,0,0-4.78-45C464.88,157.87,437.46,113.59,398,81.84ZM87.48,380h0ZM160,288a32,32,0,1,1,32-32A32,32,0,0,1,160,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,256,288Zm96,0a32,32,0,1,1,32-32A32,32,0,0,1,352,288Z" />{" "}
            </svg>
          </div>

          <div className="float-right top-0 right-0 m-3">
            <div className="text-right text-lg font-medium">
              Usuarias conectadas
            </div>
            <div className="text-right text-5xl font-bold">25</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className='col-span-4'>
          <canvas id="myChart" width="200" height="200"></canvas>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
