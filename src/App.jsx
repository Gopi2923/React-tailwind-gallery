import React from 'react'

const App = () => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82" alt="" className='w-full' />
      <div className="px-6 py-4">
           <div className="font-bold text-purple-500 text-xl">
               Photo by John Doe
           </div>
           <ul>
            <li>
              <strong>
                Views: 4000
              </strong>
            </li>
            <li>
              <strong>
                Downloads: 300
              </strong>
            </li>
            <li>
              <strong>
                Likes: 400
              </strong>
            </li>
           </ul>
      </div>
      <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
          </span>
      </div>
    </div>
  )
}

export default App
