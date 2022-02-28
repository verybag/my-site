import React from 'react';
import './waves.css';
const Waves = () => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='svg'
        width='100%'
        height='100%'
        className='transition duration-300 ease-in-out delay-150'
        viewBox='0 0 1440 500'
      >
        <defs>
          <linearGradient id='gradient' x1='91%' x2='9%' y1='22%' y2='78%'>
            <stop offset='5%' stopColor='#03a9f444'></stop>
            <stop offset='95%' stopColor='#42f3de44'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          strokeWidth='0'
          d='M0 500V100c41.992 16.983 83.983 33.966 140 26 56.017-7.966 126.06-40.881 183-40 56.94.881 100.78 35.558 147 35 46.22-.558 94.823-36.352 154-45 59.177-8.648 128.929 9.848 183 12 54.071 2.152 92.462-12.042 142-18s110.222-3.681 161 8c50.778 11.681 91.651 32.766 145 38 53.349 5.234 119.175-5.383 185-16v400z'
          className='transition-all duration-300 ease-in-out delay-150 path-0-up'
        ></path>
        <defs>
          <linearGradient id='gradient' x1='91%' x2='9%' y1='22%' y2='78%'>
            <stop offset='5%' stopColor='#03a9f466'></stop>
            <stop offset='95%' stopColor='#42f3de66'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          strokeWidth='0'
          d='M0 500V200c43.763-10.724 87.526-21.448 145-27 57.474-5.552 128.66-5.933 192 12s118.835 54.179 160 51c41.165-3.179 68-45.783 113-55 45-9.217 108.163 14.953 178 26s146.348 8.971 196 8c49.652-.971 72.445-.838 116-7 43.555-6.162 107.873-18.618 168-21 60.127-2.382 116.064 5.309 172 13v300z'
          className='transition-all duration-300 ease-in-out delay-150 path-1-up'
        ></path>
        <defs>
          <linearGradient id='gradient' x1='91%' x2='9%' y1='22%' y2='78%'>
            <stop offset='5%' stopColor='#03a9f488'></stop>
            <stop offset='95%' stopColor='#42f3de88'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          strokeWidth='0'
          d='M0 500V300c65.682 8.127 131.365 16.254 174 25 42.635 8.746 62.223 18.112 119 4 56.777-14.112 150.743-51.703 208-47 57.257 4.703 77.805 51.698 118 50 40.195-1.698 100.039-52.09 164-55 63.961-2.91 132.041 41.663 180 57 47.959 15.337 75.797 1.437 132-10s140.772-20.41 203-24c62.228-3.59 102.114-1.795 142 0v200z'
          className='transition-all duration-300 ease-in-out delay-150 path-2-up'
        ></path>
        <defs>
          <linearGradient id='gradient' x1='91%' x2='9%' y1='22%' y2='78%'>
            <stop offset='5%' stopColor='#03a9f4ff'></stop>
            <stop offset='95%' stopColor='#42f3deff'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          strokeWidth='0'
          d='M0 500V400c57.254-21.179 114.509-42.358 163-30 48.491 12.358 88.22 58.253 141 63s118.61-31.655 182-38c63.39-6.345 124.337 17.366 169 31s73.042 17.19 116 8c42.958-9.19 100.494-31.123 163-39 62.506-7.877 129.982-1.698 191-3s115.576-10.086 167-10c51.424.086 99.712 9.043 148 18v100z'
          className='transition-all duration-300 ease-in-out delay-150 path-3-up'
        ></path>
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        id='svg'
        width='100%'
        height='100%'
        className='transition duration-300 ease-in-out delay-150'
        viewBox='0 0 1440 500'
        className='down-wave'
      >
        <defs>
          <linearGradient id='gradient' x1='91%' x2='9%' y1='22%' y2='78%'>
            <stop offset='5%' stopColor='#03a9f444'></stop>
            <stop offset='95%' stopColor='#42f3de44'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          strokeWidth='0'
          d='M0 500V100c71.259 13 142.518 26 188 24s65.187-19 108-31 108.734-19 177-14 138.877 22.002 186 26c47.123 3.998 70.757-5.009 124-18 53.243-12.991 136.096-29.967 191-21 54.904 8.967 81.859 43.876 130 44 48.141.124 117.469-34.536 177-42 59.531-7.464 109.266 12.268 159 32v400z'
          className='transition-all duration-300 ease-in-out delay-150 path-0'
          transform='rotate(-180 720 250)'
        ></path>
        <defs>
          <linearGradient id='gradient' x1='91%' x2='9%' y1='22%' y2='78%'>
            <stop offset='5%' stopColor='#03a9f466'></stop>
            <stop offset='95%' stopColor='#42f3de66'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          strokeWidth='0'
          d='M0 500V200c71.039 1.853 142.077 3.706 185 9 42.923 5.294 57.729 14.028 111 9 53.271-5.028 145.007-23.818 210-28 64.993-4.182 103.242 6.244 155 11 51.758 4.756 117.026 3.84 165 3 47.974-.84 78.653-1.607 134 4 55.347 5.607 135.363 17.586 185 11 49.637-6.586 68.896-31.739 113-38 44.104-6.261 113.052 6.37 182 19v300z'
          className='transition-all duration-300 ease-in-out delay-150 path-1'
          transform='rotate(-180 720 250)'
        ></path>
        <defs>
          <linearGradient id='gradient' x1='91%' x2='9%' y1='22%' y2='78%'>
            <stop offset='5%' stopColor='#03a9f488'></stop>
            <stop offset='95%' stopColor='#42f3de88'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          strokeWidth='0'
          d='M0 500V300c59.835-8.189 119.67-16.377 178-22 58.33-5.623 115.155-8.679 156-14s65.711-12.907 116 0 126 46.307 190 49c64 2.693 116.287-25.32 169-22 52.713 3.32 105.85 37.972 148 32 42.15-5.972 73.31-52.57 133-53 59.69-.43 147.912 45.306 211 58 63.088 12.694 101.044-7.653 139-28v200z'
          className='transition-all duration-300 ease-in-out delay-150 path-2'
          transform='rotate(-180 720 250)'
        ></path>
        <defs>
          <linearGradient id='gradient' x1='91%' x2='9%' y1='22%' y2='78%'>
            <stop offset='5%' stopColor='#03a9f4ff'></stop>
            <stop offset='95%' stopColor='#42f3deff'></stop>
          </linearGradient>
        </defs>
        <path
          fill='url(#gradient)'
          strokeWidth='0'
          d='M0 500V400c54.245 5.796 108.49 11.591 152 18 43.51 6.409 76.284 13.43 138 3 61.716-10.43 152.374-38.315 213-55 60.626-16.685 91.22-22.172 146-3s133.748 63.002 178 64c44.252.998 53.79-40.836 108-42 54.21-1.164 153.095 38.34 212 48 58.905 9.66 77.83-10.526 120-21s107.585-11.237 173-12v100z'
          className='transition-all duration-300 ease-in-out delay-150 path-3'
          transform='rotate(-180 720 250)'
        ></path>
      </svg>
    </>
  );
};
export default Waves;
