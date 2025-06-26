import React ,{ use, useState } from 'react'
import { API_URL } from '../utils/config'

const SearchBar = ({ setProducts, fetchingProducts }) => {
  const [query, setQuery] = useState('');
  const [err, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const searchTerm = query
    if (searchTerm.trim()===''){
      fetchingProducts();
      return
    }
    try {
      const res = await fetch(`${API_URL}/products/search?name=${encodeURIComponent(searchTerm)}`)
      const data = await res.json();
      setProducts(data.data)
    } catch (error) {
      setError(err.message)
    }
  };



  return (
    <form onSubmit={handleSubmit} className='searchForm'>
      <input 
      type="text"
      name='search'
      placeholder='Buscar un producto 🔍'
      value={query}
      onChange={(e)=> setQuery(e.target.value)}
      className='searchB'
    />
      <button type="submit" className='search-btn'>Buscar</button>
    </form>
  )
}

export { SearchBar }