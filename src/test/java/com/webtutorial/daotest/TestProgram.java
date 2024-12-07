package com.webtutorial.daotest;

import java.sql.Timestamp;
import java.time.Duration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.webtutorial.dao.ICategoryDAO;
import com.webtutorial.dao.INewsDAO;
import com.webtutorial.dao.impl.DAOFactory;
import com.webtutorial.dao.impl.DAOType;
import com.webtutorial.model.CategoryModel;
import com.webtutorial.model.NewsModel;
import com.webtutorial.utils.HttpUtil;

public class TestProgram {




	public static void main(String[] args) {
		long startTime = System.currentTimeMillis();

		ICategoryDAO iCategoryDAO =   (ICategoryDAO) DAOFactory.getDAO(DAOType.CategoryDAO);
		ArrayList<CategoryModel> arrayListCategory =  iCategoryDAO.findAll();
		for (CategoryModel categoryModel : arrayListCategory) {
			System.out.println(categoryModel.toString());
		}
		for (int i = 0; i < 100; i++) {
			System.out.print("-");
		}
		System.out.println();
		System.out.println(iCategoryDAO.findById(5L).toString());
		for (int i = 0; i < 100; i++) {
			System.out.print("-");
		}
		System.out.println();
		





		





		
		Class<NewsModel> newModelClass = NewsModel.class;
		System.out.println(newModelClass.getName());
		NewsModel newsModel = new NewsModel();
		newsModel.setId(3L);
		newsModel.setCategoryId(1L);
		newsModel.setContent("Hiện tại em ntn");
		newsModel.setTitle("mệt");
		
		INewsDAO newsDAO = (INewsDAO) DAOFactory.getDAO(DAOType.NewsDAO);
		newsDAO.update(newsModel);
		
		Long time = System.currentTimeMillis();
		Timestamp timestamp = new Timestamp(time);
		System.out.println(timestamp.getHours()+""+timestamp.getMinutes());
		 long endTime = System.currentTimeMillis();
		 System.out.println("Total time worked : " + Duration.ofMillis(endTime - startTime).getSeconds() + " seconds");
	
		 Map<NewsModel, CategoryModel> map = new HashMap<>();
		int s = 5;
		if(!true) {
			s = 6;
			
		}
		System.out.println(s);
	}
}
