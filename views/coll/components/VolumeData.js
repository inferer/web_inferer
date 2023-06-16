import React, { useState } from 'react'
import RankWrap from '../../ranking/components/RankWrap';
import LazyImage from '../../../components/LazyImage';
import LineChartS from './LineChart';

export const TTitle = ({
  text,
  tips
}) => {
    const [active, setActive] = useState(false)
    return (
      <div className=' font-fbold text-[24px] leading-[36px] flex items-center relative mt-3'
      >
        <div className='' style={{ lineHeight: '18px' }}>{text}</div>
        {
          tips && <img src='/addressan/info.png' className="w-6 h-6 ml-3 cursor-pointer" alt=""
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          />
        }
        {
          active && <div className='tips-wrap'>
            {tips}
          </div>
        }

      </div>
    )
  }

const VolumeData = () => {
  return (
    <RankWrap className='min-h-[300px] mt-[120px]'>
      <LazyImage src='/ranking/circle6.png' className='w-8 h-8 absolute left-[26px] -top-[16px]' />
      <LazyImage src='/addressan/circle1.png' className='w-[138px] h-[138px] absolute right-[145px] -top-[69px]' />
      <TTitle text="Volume" tips="NFT transaction volume in last 6 months" />
      <div className='text-[#3F4664] flex items-baseline mt-4'>
        <span className='font-fbold text-[32px]'>
          3.599 
        </span>
        <span className=' font-fbold text-[20px] ml-1'>ETH</span>
        <span className='text-[20px] text-[#7F8792] ml-[9px]'>(Total)</span>
      </div>
      <div className='mt-4'>
        <LineChartS 
          id={"volumedata"}
          lineData={{
            xAxis: {
              data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun']
            },
            series: [
              {
                data: [
                  {name: '2', value: 138},
                  {name: '3', value: 238},
                  {name: '3', value: 178},
                  {name: '3', value: 118},
                  {name: '3', value: 298},
                  {name: '4', value: 58},
                ],
                type: 'line',
                color: '#679AFF',
                smooth: true,
                symbolSize: 4,
                lineStyle: {
                  width: 2
                },
              }
            ]
          }}
        />
      </div>
      
    </RankWrap>
  )
}

export default VolumeData