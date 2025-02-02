import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../modal'

const Cars = (props) => {
  const { data, setData } = props
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [update, setUpdate] = useState({})
  const hendleModal = (e) => {
    setOpen(true)
  }
  const deleteCar = (id) => {
    const new_data = data.filter(item => item.id !== id)
    setData(new_data)
  }
  const updateCar = (item) => {
    setUpdate(item)
    setOpen(true)
  }
  const carInfo = (id) => {
    navigate(`/cars/${id}`)
  }
  return (
    <div className='w-[70%] mx-auto mt-6'>
      <Modal data={data} setData={setData} open={open} toggle={setOpen} update={update} setUpdate={setUpdate} />
      <div>
        <button onClick={hendleModal} className='bg-green-600 text-xl px-7 text-white py-1 mb-6 rounded'>Add car</button>
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='border'>T/H</th>
            <th className='border'>Name</th>
            <th className='border'>Price</th>
            <th className='border'>Year</th>
            <th className='border'>Color</th>
            <th className='border w-[250px]'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, i) => {
              return <tr key={i}>
                <td className="border text-center">{i + 1}</td>
                <td className="border text-center">{item.name}</td>
                <td className="border text-center">{item.price}</td>
                <td className="border text-center">{item.year}</td>
                <td className="border text-center">{item.color}</td>
                <td className="border text-center flex gap-3 justify-center">
                  <button onClick={() => deleteCar(item.id)} className="bg-red-600 text-lg text-white px-4">Delete</button>
                  <button onClick={() => updateCar(item)} className="bg-orange-500 text-lg text-white px-4">Edit</button>
                  <button onClick={() => carInfo(item.id)} className="text-xl w-8 h-8 border rounded-full"><i className="fa-solid text-gray-500 fa-arrow-right"></i></button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Cars