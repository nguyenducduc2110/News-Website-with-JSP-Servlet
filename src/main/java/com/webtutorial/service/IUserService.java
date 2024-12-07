package com.webtutorial.service;

import com.webtutorial.model.UserModel;

public interface IUserService {
	public abstract UserModel findByUserNamePasswordAndStatus(String userName, String password, int status);
	UserModel findOne(Long id);
}
