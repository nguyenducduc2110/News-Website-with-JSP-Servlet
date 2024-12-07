package com.webtutorial.dao.impl;

import java.util.ArrayList;

import com.webtutorial.dao.ICategoryDAO;
import com.webtutorial.mapper.CategoryMapper;
import com.webtutorial.model.CategoryModel;


public class CategoryDAO extends AbstractDAO<CategoryModel> implements ICategoryDAO{
	@Override
	 public ArrayList<CategoryModel> findAll(){
		 return super.queryList("select * from category", new CategoryMapper());
	 }
	@Override
	public CategoryModel findById(Long id) {
		ArrayList<CategoryModel>  arrayList = super.queryList("select * from category where id = ?", new CategoryMapper(), id);
		return arrayList.isEmpty() ? null : arrayList.get(0);
	}
	









































}
