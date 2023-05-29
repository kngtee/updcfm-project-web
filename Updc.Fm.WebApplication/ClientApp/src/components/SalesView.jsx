import React from 'react'
import DropDownButton from '../Utilities/DropDownButton'
import {MdFilterAlt} from 'react-icons/md'
import Cards from '../Utilities/Cards'
import Jobs from '../assets/img/jobs.svg';
import JobsDone from '../assets/img/job-done-ok.svg';
import Vendors from '../assets/img/staff.svg';

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
      <div className="flex flex-row space-x-12">
        <Cards className='' textname='Total Unit' num='100' icon={Jobs}/>
        <Cards textname='Available Unit' num='75'  icon={JobsDone}/>
        <Cards textname='Allocated Unit' num='50'  icon={Vendors}/>
      </div>
    </div>
  )
}

export default SalesView