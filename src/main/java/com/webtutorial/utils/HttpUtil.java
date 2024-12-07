package com.webtutorial.utils;

import java.io.BufferedReader;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class HttpUtil {
	private String value;
	
	public HttpUtil() {		
	}
	public HttpUtil(String value) {
		super();
		this.value = value;
	}
	
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	public <T> T toModel(Class<T> isclass) {
		try {
			
			return new ObjectMapper().readValue(this.value, isclass);
		} catch (JsonParseException e) {
			
			e.printStackTrace();
		} catch (JsonMappingException e) {
			
			e.printStackTrace();
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		return null;
	}
	
	
	public static HttpUtil of(BufferedReader bufferedReader) {
		StringBuilder stringBuilder = new StringBuilder();
		String line = null;
		try {
			while((line = bufferedReader.readLine())!= null) {
				stringBuilder.append(line);
			}
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		return new HttpUtil(stringBuilder.toString());	
	}
	
}
