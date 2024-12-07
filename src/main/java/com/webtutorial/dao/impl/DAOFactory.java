package com.webtutorial.dao.impl;

import com.webtutorial.dao.GenericDAO;


public class DAOFactory {
	private DAOFactory() {}

	public static final GenericDAO<?> getDAO(DAOType daoType) {
		switch (daoType) {
		case CategoryDAO:
			return new CategoryDAO();


		case NewsDAO:
			return new NewsDAO();




		default:
			 throw new IllegalArgumentException("This bank type is unsupported");
		}
	}
}

