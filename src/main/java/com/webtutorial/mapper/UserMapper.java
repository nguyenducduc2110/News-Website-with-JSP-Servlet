package com.webtutorial.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.webtutorial.model.RoleModel;
import com.webtutorial.model.UserModel;

public class UserMapper implements IRowMapper<UserModel>{

	@Override
	public UserModel mapRow(ResultSet resultSet) {
		try {
			UserModel user = new UserModel();
			user.setId(resultSet.getLong("id"));
			user.setUserName(resultSet.getString("name"));
			user.setFullName(resultSet.getString("fullname"));
			user.setPassword(resultSet.getString("password"));
			user.setRoleId(resultSet.getLong("roleid"));
			user.setStatus(resultSet.getInt("status"));
			user.setCreatedDate(resultSet.getTimestamp("createddate"));
			user.setModifiedDate(resultSet.getTimestamp("modifieddate"));
			user.setCreatedBy(resultSet.getString("createdby"));
			user.setModifiedBy(resultSet.getString("modifiedby"));
			
			
			
			try {
				RoleModel roleModel = new RoleModel();
				roleModel.setCode(resultSet.getString("code"));
				roleModel.setName(resultSet.getString(12));
				roleModel.setId(resultSet.getLong("id"));
				user.setRoleModel(roleModel);
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
			return user;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}
	
}
