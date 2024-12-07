package com.webtutorial.service.impl;

import java.sql.Timestamp;
import java.util.ArrayList;

import javax.inject.Inject;

import com.webtutorial.dao.INewsDAO;
import com.webtutorial.model.NewsModel;
import com.webtutorial.paging.Pageable;
import com.webtutorial.service.INewsService;
public class NewsService implements INewsService{

	@Inject
	private INewsDAO newsDAO;
	
	@Override
	public NewsModel findByCategoryId(Long id) {
		return newsDAO.findByCategoryId(id);
	}
	
	
	@Override
	public NewsModel save(NewsModel newsModel) {
		newsModel.setCreatedDate(new Timestamp(System.currentTimeMillis()));
		Long id = newsDAO.save(newsModel);
		return newsDAO.findOne(id);
		
	}

	@Override
	public NewsModel update(NewsModel newsModel) {
	    Long id = newsModel.getId();
	    NewsModel newsModelOld = newsDAO.findOne(id);
	    newsModelOld.setModifiedDate(new Timestamp(System.currentTimeMillis()));

	    if (newsModel.getTitle() != null) {
	        newsModelOld.setTitle(newsModel.getTitle());
	    }
	    if (newsModel.getThumbnail() != null) {
	        newsModelOld.setThumbnail(newsModel.getThumbnail());
	    }
	    if (newsModel.getShortDescription() != null) {
	        newsModelOld.setShortDescription(newsModel.getShortDescription());
	    }
	    if (newsModel.getCategoryId() != null) {
	        newsModelOld.setCategoryId(newsModel.getCategoryId());
	    }
	    if (newsModel.getModifiedDate() != null) {
	        newsModelOld.setModifiedDate(newsModel.getModifiedDate());
	    }
	    if (newsModel.getModifiedBy() != null) {
	        newsModelOld.setModifiedBy(newsModel.getModifiedBy());
	    }

	    
	    newsDAO.update(newsModelOld);
	    return newsDAO.findOne(id);
	}


	@Override
	public void delete(Long[] id) {
		for (Long idNews : id) {
			
			
			
			newsDAO.delete(idNews);
		}
	}

	@Override
	public ArrayList<NewsModel> findAll(Pageable pageable) {
		return newsDAO.findAll(pageable);
	}

	@Override
	public NewsModel findOne(Long id) {
		return newsDAO.findOne(id);
	}
	
}
