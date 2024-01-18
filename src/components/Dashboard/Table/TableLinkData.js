import { Link } from 'react-router-dom'

export const TableLinkData = ({data,link}) => {
  return (
    <td class="px-6 py-4 text-gray-700 font-sans">
      <Link className='cursor-pointer text-lg' to={link}>{data}</Link>
    </td>
  )
}
