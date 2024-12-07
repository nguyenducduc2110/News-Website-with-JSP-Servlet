package com.webtutorial.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;






public class SessionUtil {
	public static SessionUtil getInstance() {	
		return SessionUtilHelper.INSTANCE;
	}
	private static class SessionUtilHelper {
		private static final SessionUtil INSTANCE = new SessionUtil();
	}
	
	public void putValue(HttpServletRequest request, String key, Object value) {
		HttpSession session = request.getSession();
		
		session.setMaxInactiveInterval(90 * 60); 
		System.out.println("Session là:"+ session.getId());
		session.setAttribute(key, value);
	}
	public String getSessionID(HttpServletRequest request) {
		return request.getSession().getId();
	}
	public Object getValue(HttpServletRequest request, String key) {
		
		return request.getSession().getAttribute(key);
	}
	public void removeValue(HttpServletRequest request, String key) {
		
		request.getSession().removeAttribute(key);
		
	}
}
