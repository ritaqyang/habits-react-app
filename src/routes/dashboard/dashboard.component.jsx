import { useEffect } from 'react';
import { addCollectionAndDocuments  } from '../../utils/firebase/firebase.utils';
import DATA from '../../shop-data.js'; 
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.reducer';

const Dashboard = () => {

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', DATA)
    // }, []); 

    const dispatch = useDispatch();

    useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

    

export default Dashboard; 

