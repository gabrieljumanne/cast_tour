import React from 'react'

const Cta = () => {
  return (
    <section className='bg-indigo-600 '>
        <div className='mx-auto max-w-7xl pg-12 px-6 lg:flex lg:items-center lg:py-24 lg:px-8'>
            <div className='lg:w-0 lg:flex-1 '>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl mb-[30px]'>
                  Ready For Your Next Adventure?
                </h2>
                <p className='mt-8 max-w-3xl text-lg leading-6 text-indigo-200 '>
                      Our travel experts can help you craft the perfect customized vacation package.
                      Contact us today to start planning your dream getaway?
                </p>
                <table className='w-[60%] h-[50px] mt-[10px] bg-white rounded-md px-[10px]' >
                  <thead>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=''>
                      <td className='pl-[10px]'>
                      
                      <select name="" id="" className='relative outline-none w-full'>
                        <option value="">mikumi</option>
                      </select>
                      </td>
                      <td className='pl-[10px]'>Check in - Checkout</td>
                      <td className='pl-[10px]'>Adults - Children</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div className='mt-8 lg:mt-0 lg:ml-8 '>
                <a 
                  href="#"
                  className='block w-full rounded-md bg-white px-5 py-3 text-base font-medium text-indigo-600
                   shadow hover:text-indigo-700 focus:outline-none focus:ring-white focus:ring-offset-2 
                   focus:ring-offset-indigo-600'
                >
                  Contact Sale 
                </a>
            </div>
        </div>
    </section>
  )
}

export default Cta