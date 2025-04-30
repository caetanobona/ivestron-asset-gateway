import React from "react";
import { FaBell, FaBitcoin } from "react-icons/fa";

export default function AlertCard() {
  // same path you had before
  const chartPath =
    "M0,180 L50,140 L100,150 L150,145 L200,160 L250,120 L300,50 L350,90 L400,130 L450,115 L500,100";
  const svgWidth = 500;
  const svgHeight = 200;

  return (
    <div className="max-w-[602px] mx-auto bg-gray-900 rounded-2xl overflow-hidden text-white">
      {/* ─── Chart + Overlays ─── */}
      <div className="relative">
        {/* Chart container: 10rem tall on mobile, 12rem at sm */}
        <div className="w-full h-40 sm:h-48">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
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
            <rect width="100%" height="100%" fill="url(#chartBg)" />

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

        {/* Floating tooltip; small on mobile, grows at sm */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl px-4 py-2 sm:px-4 sm:py-3 max-w-xs">
          <span className="inline-flex items-center bg-green-900 bg-opacity-30 text-green-400 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 sm:py-1 rounded-full">
            <FaBell className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Novidade
          </span>
          <div className="mt-1 sm:mt-2 flex items-center space-x-1 sm:space-x-2">
            <FaBitcoin className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-base sm:text-lg font-semibold">
              Bitcoin: 69.620
            </span>
          </div>
        </div>

        {/* Current value label: hidden on mobile to avoid overlap */}
        <div className="sm:block absolute right-24 top-4 lg:right-[155px] text-sm sm:text-lg font-medium text-green-400">
          69.620
        </div>
      </div>

      {/* ─── Text Content ─── */}
      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
          <span className="text-green-400">Ative o Alerta</span> para movimento de preço
        </h3>
        <p className="mt-2 sm:mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
          Não perca o momento certo de fazer sua compra ou sua venda, ative o
          alerta e sempre iremos te avisar quando o seu valor esperado for
          atingido.
        </p>
      </div>
    </div>
  );
}