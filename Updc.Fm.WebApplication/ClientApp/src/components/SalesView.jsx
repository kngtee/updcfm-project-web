import React from 'react'
import DropDownButton from '../Utilities/DropDownButton'
import {MdFilterAlt} from 'react-icons/md'
import Cards from '../Utilities/Cards'
import availableUnit from '../assets/img/available-units.svg'
import allocateUnit from '../assets/img/allocate-unit.svg'
import unit from '../assets/img/units.svg'

const SalesView = () => {
  return (
    <div className=' W-[800px]'>
      <div>
      <div className=' flex h-[40px] justify-around ml-4  w-[650px] mt-[60px] '>
            <div>
                 <DropDownButton first="Cluster" second='Estate' third='Unit'/>
            </div>
            <div>
                 <DropDownButton first ='Football' second='Tennis' third='Swimming'/>
            </div>
            <button className=' mr-40 h-[40px] w-[40px] flex justify-center  bg-[#A73439] rounded-md'  >
                <MdFilterAlt class =' mt-2.5'  size={20} color='white'/>
            </button>
            </div>
      </div>
      <div className='flex w-[800px]'>
        <Cards className='' textname='Total Unit' num='100' icon={availableUnit}/>
        <Cards textname='Available Unit' num='75'  icon={allocateUnit}/>
        <Cards textname='Allocated Unit' num='50'  icon={unit}/>
      </div>
    </div>
  )
}

export default SalesView