import '../style/SearchBox.css'

const SearchBox = ({searchField, searchChange}) =>{

    return(

        <div className='search_container'>
        
            <input
                className='input' 
                type='search' 
                placeholder='search some 🤖'
                onChange={searchChange}
            />

        </div>

    )

}

export default SearchBox