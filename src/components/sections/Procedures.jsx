import React from 'react'
import massageImg from '../../assets/Billeder/extra_procedures_etc/1.jpg';
import hotStoneImg from '../../assets/Billeder/extra_procedures_etc/2.jpg';
import waxingImg from '../../assets/Billeder/extra_procedures_etc/3.jpg';


const Procedures = () => {

  const procedures = [
    {
      img: massageImg,
      title: 'Massage Therapy',
      description: "Living winged said you darkness you're divide <br> gathered and bring one seasons face great dr <br> Waters firmament place which..."
    },
    {
      img: hotStoneImg,
      title: 'Beauty Care',
      description: "Living winged said you darkness you're divide <br> gathered and bring one seasons face great dr <br> Waters firmament place which..."
    },
    {
      img: waxingImg,
      title: 'Executive Reflexology',
      description: "Living winged said you darkness you're divide <br>  gathered and bring one seasons face great dr <br>  Waters firmament place which..."
    }
  ];

  return (
    <div>
      <h1 className='text-4xl  text-center font-medium mb-4 font-display'>Popular Procedures</h1>
      <p
  className="text-sm  text-center mb-6 text-custom-gray font-thin leading-8"
  dangerouslySetInnerHTML={{
    __html: `
      To doesn't his appear replenish together called he of mad place won't wherein<br />blessed second evvery wherein were meat kind wherein and martcin .
    `,
  }}
></p>
 <section className="py-20 bg-white text-center">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="flex flex-wrap -mx-2">
            {procedures.map((procedure, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2 flex">
               <div className="bg-white shadow-md border overflow-hidden h-full flex flex-col w-full">
                  <img src={procedure.img} alt={procedure.title} className="h-full p-4" />
                  <div className="p-2 flex flex-col flex-grow justify-between">
                    <h3 className="text-2xl font-display mt-4">{procedure.title}</h3>
                    <p className="text-sm font-thin text-gray-700 mb-6 flex-grow mt-4 leading-6" dangerouslySetInnerHTML={{ __html: procedure.description }}></p>
                    <button className="px-4 py-2 bg-[#242A2C] text-white text-base rounded-full hover:bg-[#F26A6C] uppercase mt-2 m-20 ">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  )
}

export default Procedures;
