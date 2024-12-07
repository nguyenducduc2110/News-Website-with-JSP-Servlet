package com.webtutorial.service.impl;

import java.util.ArrayList;

import javax.inject.Inject;

import com.webtutorial.dao.ICategoryDAO;
import com.webtutorial.model.CategoryModel;
import com.webtutorial.service.ICategoryService;


public class CategoryService  implements ICategoryService{






	@Inject 
	private ICategoryDAO iCategoryDAO;

	@Override
	public ArrayList<CategoryModel> findAll() {
		return iCategoryDAO.findAll();
	}
	
	@Override
	public CategoryModel findById(Long id) {
		return iCategoryDAO.findById(id);
	}
	
}
