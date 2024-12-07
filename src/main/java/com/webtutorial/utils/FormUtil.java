package com.webtutorial.utils;

import java.lang.reflect.InvocationTargetException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.beanutils.BeanUtils;

import com.webtutorial.dao.impl.AbstractDAO;
import com.webtutorial.model.UserModel;


public class FormUtil {

	@SuppressWarnings("unchecked")
	public static <T> T toModel(Class<T> clazz, HttpServletRequest request) {
		T object = null;
		try {
			object = clazz.getDeclaredConstructor().newInstance();
			
			BeanUtils.populate(object, request.getParameterMap());
			
		} catch (InstantiationException|InvocationTargetException | NoSuchMethodException e) {
			System.out.println(e.getMessage());
		} catch (IllegalAccessException e) {
			System.out.println(e.getMessage());

		}	
		return object;
	}
}
