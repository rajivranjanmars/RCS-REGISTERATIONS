


const Table = async () => {
    const url:any=process.env.NEXT_PUBLIC_DATA_URL;
    const response = await fetch(url);
    const data = await response.json();
    data.reverse();
  return (


      <div className="  shadow-md sm:rounded-lg">
          <div className="flex  justify-center items-center my-5 text-3xl" >
                <span className="bg-black dark:bg-white text-white dark:text-slate-50 px-2 rounded-s-lg ">
                    Total registerations
                </span>
              <span className=" bg-gray-700 text-white dark:text-black pl-3 pr-2 rounded-s-lg " dir="rtl">
                    {data.length}
                </span>
            </div>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          uni id
                      </th>
                     
                      <th scope="col" className="px-6 py-3">
                          Email
                      </th>
                     
                  </tr>
              </thead>
              <tbody>
                    {
                        data.map((item) => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                   
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name.replace(/"/g, '')}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.uni_id.replace(/"/g, '')}
                                    </td>
                                   
                                    <td className="px-6 py-4">
                                        {item.email.replace(/"/g, '')}
                                    </td>
                                   
                                </tr>
                            )
                        })
                    }
                

              </tbody>
          </table>
      </div>

  )
}

export default Table