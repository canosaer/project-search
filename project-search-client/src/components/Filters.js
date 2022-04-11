import React, {useContext, useState, useEffect} from 'react';
import {Context} from '../store/store'
import axios from 'axios';

export default function Filters() {
    const [state, dispatch] = useContext(Context)
    const [searchTerm, setSearchTerm ] = useState('')
    const [categories, setCategories] = useState([])

    const updateFilters = (e) => {
        const tagsArray = state.activeTags
        let updatedTags = []

        const selectedTag = e.target[e.target.selectedIndex].value
        selectedTag != "all" ? updatedTags = [selectedTag] : updatedTags = []
        dispatch ({type: 'UPDATE_TAGS', payload: updatedTags})
    }

    const getCategories = async () => {
        try {
        const response = await axios.get('http://localhost:1337/categories')
        setCategories(response.data)
        } catch (err) {
        console.log(err.message, err.code)
        }
    }

    useEffect(() => {
        getCategories()
    }, [categories]);

    useEffect(() => {
        dispatch ({type: 'UPDATE_TERM', payload: searchTerm})
    }, [searchTerm]);


    return(
        <div className="filter-row">
            <input className="search" id="term" name="term" type="text" placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select name="categories" className="dropdown-filters" id="categories" onChange={(e) => updateFilters(e)}>
                <option value="all">All</option>
                {categories.map((category, i) => {
                    const key = `dropdown--${i}`

                    return(
                        <option key={key} className="dropdown-filters__option" value={category.tag}>{category.name}</option>
                    )
                })}
            </select>
        </div>
    )
        
}