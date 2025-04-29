// MockTradeEntry.jsx
import { cn } from '@/lib/utils';
import React from 'react';

interface MockTradeEntryProps {
  className?: string,
  title: string
  titleColor: string
}

export default function MockTradeEntry({className, title, titleColor} : MockTradeEntryProps) {
  return (
    <div className={cn("flex items-center justify-center bg-transparent", className)}>
      {/* Green background shape */}


      {/* Foreground card */}
      <div className="w-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="py-3 lg:py-4 text-center border-b border-gray-200">
          <h2
            className={cn(titleColor, "text-md lg:text-lg font-semibold")}
          >
            { title }
          </h2>
        </div>

        {/* Content */}
        <div className="px-3 py-4 lg:px-4 lg:py-5">
          {/* Valor de Entrada */}
          <div className='flex space-x-4'>
            <div className="flex flex-col items-center justify-between">
              <label className="text-sm text-gray-800 mb-2">
                Valor de Entrada:
              </label>
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 space-x-2 lg:space-x-3">
                <span className="text-md lg:text-lg text-gray-700">$</span>
                <span className="text-md lg:text-lg font-medium text-gray-900">
                  432
                </span>
                <button
                  type="button"
                  className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center text-lg font-bold text-gray-700"
                >
                  &minus;
                </button>
                <button
                  type="button"
                  className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center text-lg font-bold text-gray-700"
                >
                  &#43;
                </button>
              </div>
            </div>

            {/* Expiração */}
            <div className="flex flex-col items-center justify-between">
              <label className="text-sm text-gray-800 mb-2">
                Expiração:
              </label>
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 space-x-2 lg:space-x-3">
                <span
                  className="text-lg text-gray-700"
                  role="img"
                  aria-label="clock"
                >
                  ⏰
                </span>
                <span className="text-lg font-medium text-gray-900">
                  10m
                </span>
                <button
                  type="button"
                  className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center text-lg font-bold text-gray-700"
                >
                  &minus;
                </button>
                <button
                  type="button"
                  className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center text-lg font-bold text-gray-700"
                >
                  &#43;
                </button>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            className="mt-6 w-full py-3 bg-gray-900 text-white rounded-md text-base font-medium hover:opacity-90 transition-opacity"
          >
            Vender
          </button>
        </div>
      </div>
    </div>
  );
}