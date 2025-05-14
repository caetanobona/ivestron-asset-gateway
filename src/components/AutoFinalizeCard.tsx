import React from "react";
import { FaPause } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";

export default function AutoFinalizeCard() {
  // Approximate line chart path; adjust points as needed
  const chartPath =
    "M0,140 L50,110 L100,70 L150,120 L200,100 L250,150 L300,60 L350,90 L400,80 L450,100 L500,110";
  const svgWidth = 500;
  const svgHeight = 150;

  if(window.innerWidth > 1024) {
    return (
      <div className="max-w-6xl lg:h-72 mx-auto bg-gray-900 rounded-2xl overflow-hidden text-white">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Chart + Overlays */}
          <div className="relative w-full md:w-1/2 h-full">
            {/* <div className="w-full h-40 lg:h-full md:h-56">
              <svg viewBox="0 0 500 260" className="w-full h-full">
                <defs>
                  <linearGradient id="chartBg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#111827" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                </defs>
                
                <rect width="500" height="260" fill="url(#chartBg2)" />

                <line
                  x1="0"
                  y1="60"
                  x2="500"
                  y2="60"
                  stroke="#4B5563"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />

                <path
                  d={chartPath}
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <circle cx="300" cy="60" r="4" fill="#10B981" />
              </svg>
            </div> */}

            <div className="overflow-auto border-1 border-red-500">
              <svg
                viewBox={`0 0 500 260`}
                preserveAspectRatio="none"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="chartBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#111827" />
                    <stop offset="100%" stopColor="#1f2937" />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00F27A" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1f2937" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* background */}
                <rect width="100%" height="140%" fill="url(#chartBg)" />

                {/* dashed guide line */}
                <line
                  x1="0"
                  y1="50"
                  x2={svgWidth}
                  y2="50"
                  stroke="#4B5563"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />

                {/* filled area under the line */}
                <path
                  d={`${chartPath} L${svgWidth},${svgHeight} L0,${svgHeight} Z`}
                  fill="url(#areaGradient)"
                />

                {/* the line */}
                <path
                  d={chartPath}
                  fill="none"
                  stroke="#00F27A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* highlight circle */}
                <circle cx="300" cy="50" r="4" fill="#00F27A" />
              </svg>
            </div>



            {/* Floating tooltip */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 backdrop-blur-sm  rounded-xl px-3 py-2 md:px-4 md:py-3">
              <div className="flex items-center space-x-2">
                <div className="p-1 md:p-2 bg-gray-700 rounded-full">
                  <FaMoneyBill className="text-green-400 w-3 h-3 md:w-4 md:h-4" />
                </div>
                <span className="text-xs md:text-sm text-gray-300">Resultado final:</span>
              </div>
              <div className="mt-1 md:mt-2 text-lg md:text-2xl text-green-400 ">
                +870.03
              </div>
            </div>

            {/* Value label next to the circle (hidden on small) */}
            <div className="absolute text-green-400 font-medium text-base" style={{ top: "35px", left: "61%" }}>
              +870.03
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 px-6 md:px-8 py-8 md:py-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Finalize as suas operações{" "}
              <span className="text-green-400">automaticamente</span>
            </h3>
            <p className="mt-3 md:mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
              Determine os momentos corretos para que seus investimentos seja
              encerrados e aumente a suas chances de lucrar, minimizando seus
              riscos.
            </p>
          </div>
        </div>
      </div>
    ); 
  } else {
    return (  
      <div className="max-w-md mx-auto bg-gray-900 rounded-2xl overflow-hidden text-white">  
        {/* ─────────────── Chart + Overlays ─────────────── */}  
        <div className="relative w-full">  
          {/* Chart container: 10rem high on mobile, 14rem from sm up */}  
          <div className="w-full h-40 sm:h-56">  
            <svg  
              viewBox="0 0 500 200"  
              preserveAspectRatio="none"  
              className="w-full h-full"  
            >  
              <defs>  
                <linearGradient id="chartBg" x1="0" y1="0" x2="0" y2="1">  
                  <stop offset="0%" stopColor="#111827" />  
                  <stop offset="100%" stopColor="#1f2937" />  
                </linearGradient>  
              </defs>  
    
              {/* background */}  
              <rect width="500" height="200" fill="url(#chartBg)" />  
    
              {/* dashed guide line */}  
              <line  
                x1="0"  
                y1="60"  
                x2="500"  
                y2="60"  
                stroke="#4B5563"  
                strokeDasharray="4 4"  
                strokeWidth="1"  
              />  
    
              {/* sparkline */}  
              <path  
                d={chartPath}  
                fill="none"  
                stroke="#FFF"  
                strokeWidth="2"  
                strokeLinecap="round"  
              />  
    
              {/* highlight circle */}  
              <circle cx="300" cy="60" r="4" fill="#10B981" />  
            </svg>  
          </div>  
    
          {/* Floating tooltip */}  
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl px-2 py-1 flex items-center space-x-2">  
            <div className="p-1 sm:p-2 bg-gray-700 rounded-full">  
              <FaPause className="text-green-400 w-3 h-3 sm:w-4 sm:h-4" />  
            </div>  
            <div>  
              <div className="text-xs text-gray-300">  
                Resultado final:  
              </div>  
              <div className="text-lg font-semibold text-green-400">  
                +870.03  
              </div>  
            </div>  
          </div>  
    
          {/* Inline point label — hidden on mobile */}  
          <div className="absolute top-5 right-20 text-green-400 font-medium">  
            +870.03  
          </div>  
        </div>  
    
        {/* ─────────────── Text Content ─────────────── */}  
        <div className="px-4 py-6 sm:px-8 sm:py-12">  
          <h3 className="text-2xl sm:text-3xl font-bold leading-tight">  
            Finalize as suas operações{" "}  
            <span className="text-green-400">automaticamente</span>  
          </h3>  
          <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">  
            Determine os momentos corretos para que seus investimentos seja  
            encerrados e aumente a suas chances de lucrar, minimizando seus  
            riscos.  
          </p>  
        </div>  
      </div>  
    );
  }
}